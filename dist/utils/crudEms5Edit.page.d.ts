import { OEElement } from 'oe-test-agent';
export declare abstract class CrudEms5Edit {
    protected window: OEElement;
    /**
     * Define a janela atual Progress.
     *
     * @param win Objeto com a janela atual Progress.
     */
    setWindow(win: OEElement): void;
    /**
     * Executa a operação de Cópia.
     */
    copy(): void;
    /**
     * Executa a operação de Ajuda.
     */
    help(): void;
    /**
     * Executa a operação de Ok.
     */
    ok(): void;
    /**
     * Executa a operação de Salvar.
     */
    save(): void;
    /**
     * Executa a operação de Cancelar.
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
}
