import { oeAgent } from 'oe-test-agent';
import { browser } from 'protractor';

import { GrpAplicatDtsul } from '../../dist/models';
import { MEN0077AA } from './men007aa.pageObject';

describe('MEN007AA - Grupo Aplicativo', () => {
  const men007aa = new MEN0077AA();

  const data = new GrpAplicatDtsul();
  data.codGrpAplicatDtsul = 'FTT';
  data.desGrpAplicatDtsul = 'Grupo FND Teste';
  data.numSeq = 90;
  data.nomGrpAplicatDtsulMenu = 'Grupo Foundation Teste';

  beforeAll(() => {
    oeAgent.start(browser.params.oeConfig);
    oeAgent.run('men/men007aa.w');

    // Aguarda a abertura da tela MEN007AA.
    men007aa.wait();
  });

  it('deve criar um novo grupo de aplicativo', () => {
    // Aciona o evento de inclusão e valida se o mesmo foi incluído.
    men007aa.new(data);
    expect(men007aa.goToOk(data.codGrpAplicatDtsul)).toBeTruthy();
  });

  it('deve excluir um grupo de aplicativo', () => {
    // Aciona o evento de exclusão e valida se o mesmo foi excluído.
    men007aa.remove(data.codGrpAplicatDtsul);
    expect(men007aa.goToOk(data.codGrpAplicatDtsul)).toBeFalsy();
  });

  afterAll(() => {
    men007aa.exit();
    oeAgent.quit();
  });
});
