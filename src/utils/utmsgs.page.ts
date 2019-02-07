import { OEAgent, oeAgent, OEElement } from 'oe-test-agent';

export class UTMSGS {
  public static getMessageWindow(title: string, timeout = OEAgent.DEFAULT_TIMEOUT): OEElement {
    return oeAgent.waitForWindow(title, timeout);
  }

  public static ok(msgWindow: OEElement): void {
    msgWindow.findElement('bt_ok').choose();
  }

  public static yes(msgWindow: OEElement): void {
    msgWindow.findElement('bt_ok').choose();
  }

  public static no(msgWindow: OEElement): void {
    msgWindow.findElement('bt_no').choose();
  }

  public static getMessage(msgWindow: OEElement): Promise<string> {
    return msgWindow.findElement('v_msg_val').getValue();
  }

  public static getHelp(msgWindow: OEElement): Promise<string> {
    return msgWindow.findElement('v_msg_hlp').getValue();
  }
}
