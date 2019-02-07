import { Interface, ProgDtsul } from 'dist/models';
import { CrudEms2, UTMSGS } from 'dist/utils';
import { oeAgent, OEAttributes, OEElement } from 'oe-test-agent';

export class BasProgDtsul extends CrudEms2 {
  public wait(): OEElement {
    const window = oeAgent.waitForWindow('bas_prog_dtsul');
    this.setWindow(window);

    return this.window;
  }

  public new(progDtsul: ProgDtsul) {
    this.add();

    // *** Detalhes
    this.window.findElementByAttribute(OEAttributes.SCREENVALUE, 'Detalhes').choose();

    this.window.findElement('cod_prog_dtsul').sendKeys(progDtsul.codProgDtsul);
    this.window.findElement('des_prog_dtsul').sendKeys(progDtsul.desProgDtsul);
    this.window.findElement('nom_prog_ext').sendKeys(progDtsul.nomProgExt);
    this.window.findElement('nom_prog_dtsul_menu').sendKeys(progDtsul.nomProgDtsulMenu);
    this.window.findElement('nom_prog_menu_verbal').sendKeys(progDtsul.nomProgMenuVerbal);
    this.window.findElement('nom_prog_upc').sendKeys(progDtsul.nomProgUpc);
    this.window.findElement('cod_proced').sendKeys(progDtsul.codProced);

    // *** Opções
    this.window.findElementByAttribute(OEAttributes.SCREENVALUE, 'Opções').choose();

    this.window.findElement('v_ind_template').select(progDtsul.template);
    this.window.findElement('v_idi_tip_prog_dtsul').select(progDtsul.tipProgDtsul);
    this.window.findElement('v_ind_interface').select(progDtsul.interfac);

    if (progDtsul.interfac === Interface.Flex) {
      this.window.findElement('v_ind_categoria').select(progDtsul.categProgDtsul);
    }

    this.window.findElement('log_visualiz_menu').check(progDtsul.visualizMenu);
    this.window.findElement('tg-login-autom').check(progDtsul.loginAutom);
    this.window.findElement('log_atualiz_query').check(progDtsul.atualizQuery);
    this.window.findElement('tg-nom-verb-custom').check(progDtsul.nomVerbCustom);
    this.window.findElement('log_outro_produt_dtsul').check(progDtsul.outroProdutDtsul);
    this.window.findElement('log_gera_log_exec').check(progDtsul.geraLogExec);
    this.window.findElement('tg-ignora-trad').check(progDtsul.ignoraTrad);
    this.window.findElement('v_ind_familia_so').select(progDtsul.familiaSo);

    this.save();

    // Este programa executar o "Salvar e Novo" sempre, neste caso cancela a
    // nova inclusão.
    this.cancel();
  }

  public delete(confirm = true) {
    super.delete();

    const message = UTMSGS.getMessageWindow('(550)');

    if (confirm) {
      UTMSGS.yes(message);
    } else {
      UTMSGS.no(message);
    }
  }
}
