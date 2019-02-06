import { oeAgent } from 'oe-test-agent';
import { CrudEms5 } from 'test/e2e/_utils/crudEms5.page';

import { GrpAplicatDtsul } from './GrpAplicatDtsul';
import { MEN0077CA } from './men007ca.pageObject';

export class MEN0077AA extends CrudEms5 {
  public wait() {
    this.window = oeAgent.waitForWindow('men007aa');
  }

  public new(data: GrpAplicatDtsul) {
    super.add();
    const men007ca = new MEN0077CA();
    men007ca.wait();
    men007ca.new(data);
  }

  public remove(codGrpAplicatDtsul: string, confirm = true) {
    this.goToOk(codGrpAplicatDtsul);
    super.delete();

    if (confirm) {
      oeAgent.alertQuestionYes();
    } else {
      oeAgent.alertQuestionNo();
    }

    // Fecha a mensagem "Última ocorrência da tabela" se existir.
    oeAgent.windowExists('Warning', 1_000).then((exists) => (exists ? oeAgent.alertWarningOK() : true));
  }

  public goToOk(codGrpAplicatDtsul: string): Promise<boolean> {
    this.codGrpAplicatDtsul = codGrpAplicatDtsul;
    this.window.findElement('bt_ent_4409').choose();

    return oeAgent.windowExists('Warning', 1_000).then((exists) => {
      if (exists) oeAgent.alertWarningOK();
      return !exists;
    });
  }

  public set codGrpAplicatDtsul(codGrpAplicatDtsul: string) {
    this.window.findElement('cod_grp_aplicat_dtsul').clear().sendKeys(codGrpAplicatDtsul);
  }
}
