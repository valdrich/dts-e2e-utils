import { oeAgent, OEElement } from 'oe-test-agent';

export class G01FN068 {
  private window!: OEElement;

  public wait(): OEElement {
    this.window = oeAgent.waitForWindow('G01FN068');
    return this.window;
  }

  public set codProgDtsul(codProgDtsul: string) {
    this.window.findElement('c_cod_prog_dtsul').sendKeys(codProgDtsul);
  }

  public ok() {
    this.window.findElement('bt-ok').choose();
  }

  public cancel() {
    this.window.findElement('bt-cancela').choose();
  }
}
