import { OEElement } from 'oe-test-agent';
export declare abstract class CrudEms2 {
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
     * Clica no botão de cópia.
     */
    copy(): void;
    /**
     * Clica no botão de exclusão.
     */
    delete(): void;
    /**
     * Clica no botão de modificação.
     */
    modify(): void;
    /**
     * Clica no botão de salvar as alterações.
     */
    save(): void;
    /**
     * Clica no botão de cancelar as alterações.
     */
    cancel(): void;
    /**
     * Clica no botão de desfazer as alterações.
     */
    undo(): void;
    /**
     * Clica no botão para navegar até o primeiro registro.
     */
    firstItem(): void;
    /**
     * Executa a operação de Ocorrência Anterior.
     */
    previousItem(): void;
    /**
     * Clica no botão para navegar até o próximo registro.
     */
    nextItem(): void;
    /**
     * Clica no botão para navegar até o próximo registro.
     */
    lastItem(): void;
    /**
     * Clica no botão de pesquisa.
     */
    searchItem(): void;
    /**
     * Clica no botão de Vá Para.
     */
    goTo(): void;
    /**
     * Clica no botão de sair.
     */
    exit(): void;
    /**
     * Clica no botão de ajuda.
     */
    help(): void;
    /**
     * Clica no botão de relatórios.
     */
    reports(): void;
    /**
     * Clica no botão de consultas.
     */
    queries(): void;
}
