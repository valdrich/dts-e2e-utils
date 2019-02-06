import { oeAgent, OEConfig } from 'oe-test-agent';
import { browser } from 'protractor';

import { FamiliaSO, Interface, ProgDtsul, Template, Tipo } from '../../_models/ProgDtsul';
import { UTMSGS } from '../../_utils/utmsgs.page';
import { BasProgDtsul } from '../page-objects/basProgDtsul.pageObject';
import { G01FN068 } from '../page-objects/g01fn068.pageObject';

describe('BAS_PROG_DTSUL - Manutenção de Programas Datasul', () => {
  const basProgDtsul = new BasProgDtsul();

  // Popula os dados que serão utilizados no teste.
  const data: ProgDtsul[] = [];
  data.push(new ProgDtsul());
  data[data.length - 1].codProgDtsul = 'tstBasProgDtsul';
  data[data.length - 1].desProgDtsul = 'Programa de teste e2e do "bas_prog_dtsul"';
  data[data.length - 1].nomProgExt = 'tst/tstBasProgDtsul.w';
  data[data.length - 1].nomProgDtsulMenu = 'Teste e2e "bas_prog_dtsul"';
  data[data.length - 1].nomProgMenuVerbal = 'Teste e2e "bas_prog_dtsul"';
  data[data.length - 1].codProced = 'man_prog_dtsul';
  data[data.length - 1].template = Template['Nenhum'];
  data[data.length - 1].tipProgDtsul = Tipo['Tarefas'];
  data[data.length - 1].interfac = Interface.GUI;
  data[data.length - 1].familiaSo = FamiliaSO['Todas'];

  const goToOk = (codProgDtsul: string) => {
    basProgDtsul.goTo();

    const g01fn068 = new G01FN068();
    g01fn068.wait();
    g01fn068.codProgDtsul = codProgDtsul;
    g01fn068.ok();

    return g01fn068;
  };

  beforeAll(() => {
    // Inicia o "OE Test Agent".
    oeAgent.start(browser.params.oeConfig as OEConfig);

    // Executa o programa "BAS_PROG_DTSUL".
    oeAgent.run('men/men702dd.r', ['THIS-PROCEDURE', 'bas_prog_dtsul']);
  });

  it('deve ter executado o programa "bas_prog_dtsul"', () => {
    const window = basProgDtsul.wait();
    expect(window.isValid()).toBeTruthy();
  });

  it('deve cadastrar um novo programa', () => {
    basProgDtsul.new(data[0]);

    // Faz o GoTo para o novo programa.
    goToOk(data[0].codProgDtsul);

    // NÃO deve exibir a mensagem de erro (2) - Programa não encontrado!
    const message = UTMSGS.getMessageWindow('(2)', 1_000);
    expect(message.isValid()).toBeFalsy();
  });

  it('deve excluir o programa cadastrado', () => {
    // Pesquisa pelo programa e exclui o mesmo.
    goToOk(data[0].codProgDtsul);
    basProgDtsul.delete();

    // Pesquisa pelo programa novamente.
    const g01fn068 = goToOk(data[0].codProgDtsul);

    // DEVE exibir a mensagem de erro (2) - Programa não encontrado!
    const message = UTMSGS.getMessageWindow('(2)', 1_000);
    expect(message.isValid().then((valid) => (valid ? (UTMSGS.ok(message), true) : false))).toBeTruthy();

    g01fn068.cancel();
  });

  it('deve encerrar o programa "bas_prog_dtsul"', () => {
    basProgDtsul.exit(); // Aguarda pelo menos 2s para a tela ser encerrada.
    expect(browser.wait(() => oeAgent.windowExists('bas_prog_dtsul', 2_000).then((exists) => !exists))).toBeTruthy();
  });

  afterAll(() => oeAgent.quit());
});
