import { OEElement } from 'oe-test-agent';
export declare abstract class CrudEms5 {
    protected window: OEElement;
    /**
     * Define a instância do ```OEElement``` da tela de relatório.
     * @param window Instância da tela de relatório retornada pelo ```OE Test Agent```.
     */
    setWindow(window: OEElement): void;
    /**
     * Clica no botão de inclusão.
     */
    add(): void;
    /**
     * Clica no botão de exclusão.
     */
    delete(): void;
    /**
     * Clica no botão de modificação.
     */
    modify(): void;
    /**
     * Clica no botão para navegar até o primeiro registro.
     */
    firstItem(): void;
    /**
     * Clica no botão para navegar até o registro anterior.
     */
    previousItem(): void;
    /**
     * Clica no botão para navegar até o próximo registro.
     */
    nextItem(): void;
    /**
     * Clica no botão para navegar até o último registro.
     */
    lastItem(): void;
    /**
     * Clica no botão de pesquisa.
     */
    searchItem(): void;
    /**
     * Clica no botão de sair.
     */
    exit(): void;
    /**
     * Clica no botão de ajuda.
     */
    help(): void;
    /**
     * Executa a operação de Relatórios.
     */
    reports(): void;
    /**
     * Clica no botão de detalhes.
     */
    detail(): void;
}
