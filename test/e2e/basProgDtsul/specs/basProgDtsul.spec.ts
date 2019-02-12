import { oeAgent, OEConfig } from 'oe-test-agent';
import { browser } from 'protractor';

import { FamiliaSO, Interface, ProgDtsul, Template, Tipo } from '../../../../dist/models';
import { BasProgDtsul } from '../page-objects/basProgDtsul.pageObject';

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

  beforeAll(() => {
    // Inicia o "OE Test Agent".
    oeAgent.start(browser.params.oeConfig as OEConfig);

    // Executa o programa "BAS_PROG_DTSUL".
    oeAgent.run('men/men012aa.w');
  });

  it('deve ter executado o programa "bas_prog_dtsul"', () => {
    const window = basProgDtsul.wait();
    expect(window.isValid()).toBeTruthy();
  });

  it('deve cadastrar um novo programa', () => {
    basProgDtsul.new(data[0]);

    // Faz o GoTo para o novo programa.
    expect(basProgDtsul.goToOK(data[0].codProgDtsul)).toBeTruthy();
  });

  it('deve excluir o programa cadastrado', () => {
    // Pesquisa pelo programa e exclui o mesmo.
    basProgDtsul.goToOK(data[0].codProgDtsul);
    basProgDtsul.delete();

    // Pesquisa pelo programa novamente.
    expect(basProgDtsul.goToOK(data[0].codProgDtsul)).toBeFalsy();
  });

  it('deve encerrar o programa "bas_prog_dtsul"', () => {
    basProgDtsul.exit(); // Aguarda pelo menos 2s para a tela ser encerrada.
    expect(browser.wait(() => oeAgent.windowExists('bas_prog_dtsul', 2_000).then((exists) => !exists))).toBeTruthy();
  });

  afterAll(() => oeAgent.quit());
});
