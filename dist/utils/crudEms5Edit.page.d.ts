import { OEElement } from 'oe-test-agent';
export declare abstract class CrudEms5Edit {
    protected window: OEElement;
    /**
     * Define a instância do ```OEElement``` da tela de relatório.
     * @param window Instância da tela de relatório retornada pelo ```OE Test Agent```.
     */
    setWindow(window: OEElement): void;
    /**
     * Clica no botão de cópia.
     */
    copy(): void;
    /**
     * Clica no botão OK.
     */
    ok(): void;
    /**
     * Clica no botão de salvar as alterações.
     */
    save(): void;
    /**
     * Clica no botão de cancelar as alterações.
     */
    cancel(): void;
    /**
     * Executa a operação de Ocorrência Anterior.
     */
    previousItem(): void;
    /**
     * Executa a operação de Próxima Ocorrência.
     */
    nextItem(): void;
    /**
     * Executa a operação de Pesquisa.
     */
    searchItem(): void;
    /**
     * Clica no botão de ajuda.
     */
    help(): void;
}
