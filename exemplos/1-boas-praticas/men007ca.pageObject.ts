import { oeAgent } from 'oe-test-agent';
import { CrudEms5Edit } from 'test/e2e/_utils/crudEms5Edit.page';

import { GrpAplicatDtsul } from './GrpAplicatDtsul';

export class MEN0077CA extends CrudEms5Edit {
  public wait() {
    this.window = oeAgent.waitForWindow('men007ca');
  }

  public new(data: GrpAplicatDtsul) {
    this.codGrpAplicatDtsul = data.codGrpAplicatDtsul;
    this.desGrpAplicatDtsul = data.desGrpAplicatDtsul;
    this.numSeq = data.numSeq;
    this.nomGrpAplicatDtsulMenu = data.nomGrpAplicatDtsulMenu;

    this.ok();
  }

  public set codGrpAplicatDtsul(codGrpAplicatDtsul: string) {
    this.window.findElement('cod_grp_aplicat_dtsul').sendKeys(codGrpAplicatDtsul);
  }

  public set desGrpAplicatDtsul(desGrpAplicatDtsul: string) {
    this.window.findElement('des_grp_aplicat_dtsul').sendKeys(desGrpAplicatDtsul);
  }

  public set numSeq(numSeq: number) {
    this.window.findElement('num_seq').sendKeys(numSeq);
  }

  public set nomGrpAplicatDtsulMenu(nomGrpAplicatDtsulMenu: string) {
    this.window.findElement('nom_grp_aplicat_dtsul_menu').sendKeys(nomGrpAplicatDtsulMenu);
  }
}
