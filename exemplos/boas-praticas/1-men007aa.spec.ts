import { oeAgent } from 'oe-test-agent';
import { browser } from 'protractor';

describe('MEN007AA - Grupo Aplicativo', () => {
  beforeAll(() => {
    oeAgent.start(browser.params.oeConfig);
    oeAgent.run('men/men007aa.w');
  });

  it('deve criar um novo grupo de aplicativo', () => {
    // Aciona o evento de inclusão.
    const men007aa = oeAgent.waitForWindow('men007aa');
    men007aa.findElement('bt_add1').choose();

    // Informa os dados para inclusão.
    const men007ca = oeAgent.waitForWindow('men007ca');
    men007ca.findElement('cod_grp_aplicat_dtsul').sendKeys('FTT');
    men007ca.findElement('des_grp_aplicat_dtsul').sendKeys('Grupo FND Teste');
    men007ca.findElement('num_seq').sendKeys(90);
    men007ca.findElement('nom_grp_aplicat_dtsul_menu').sendKeys('Grupo Foundation Teste');
    men007ca.findElement('bt_ok').choose();

    // Valida se registro foi incluído.
    // NÃO deve exibir a mensagem "Grupo Aplicativo inexistente".
    men007aa.findElement('cod_grp_aplicat_dtsul').clear().sendKeys('FTT');
    men007aa.findElement('bt_ent_4409').choose();
    expect(oeAgent.windowExists('Warning', 1_000)).toBeFalsy();
  });

  it('deve excluir um grupo de aplicativo', () => {
    const men007aa = oeAgent.waitForWindow('men007aa');
    men007aa.findElement('cod_grp_aplicat_dtsul').clear().sendKeys('FTT');
    men007aa.findElement('bt_ent_4409').choose();

    // Aciona o evento de exclusão.
    men007aa.findElement('bt_era1').choose();
    oeAgent.alertQuestionYes();

    // Fecha a mensagem "Última ocorrência da tabela" se existir.
    oeAgent.windowExists('Warning', 1_000).then((exists) => exists ? oeAgent.alertWarningOK() : true);

    // Valida se registro foi excluído.
    // DEVE exibir a mensagem "Grupo Aplicativo inexistente".
    men007aa.findElement('cod_grp_aplicat_dtsul').clear().sendKeys('FTT');
    men007aa.findElement('bt_ent_4409').choose();
    expect(oeAgent.windowExists('Warning', 1_000)).toBeTruthy();

    // Fecha a mensagem "Grupo Aplicativo inexistente".
    oeAgent.alertWarningOK();
  });

  afterAll(() => {
    const men007aa = oeAgent.waitForWindow('men007aa');
    men007aa.findElement('bt_exi').choose();
    oeAgent.quit();
  });
});
