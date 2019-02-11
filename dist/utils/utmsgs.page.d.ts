import { OEElement } from 'oe-test-agent';
export declare class UTMSGS {
    private static getWindow;
    static getMessageWindow(title: string, timeout?: number): OEElement;
    static ok(msg: string | OEElement, timeout?: number): void;
    static yes(msg: string | OEElement, timeout?: number): void;
    static no(msg: string | OEElement, timeout?: number): void;
    static getMessage(msg: string | OEElement, timeout?: number): Promise<string>;
    static getHelp(msg: string | OEElement, timeout?: number): Promise<string>;
}
