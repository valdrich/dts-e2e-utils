import { OEElement } from 'oe-test-agent';
export declare class UTMSGS {
    static getMessageWindow(title: string, timeout?: number): OEElement;
    static ok(msgWindow: OEElement): void;
    static yes(msgWindow: OEElement): void;
    static no(msgWindow: OEElement): void;
    static getMessage(msgWindow: OEElement): Promise<string>;
    static getHelp(msgWindow: OEElement): Promise<string>;
}
