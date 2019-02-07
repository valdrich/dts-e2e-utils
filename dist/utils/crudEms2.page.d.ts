import { OEElement } from 'oe-test-agent';
export declare abstract class CrudEms2 {
    protected window: OEElement;
    /**
     * Define a janela atual Progress.
     *
     * @param win Objeto com a janela atual Progress.
     */
    setWindow(win: OEElement): void;
    /**
     * Executa a operação de Inclusão.
     */
    add(): void;
    /**
     * Executa a operação de Cópia.
     */
    copy(): void;
    /**
     * Executa a operação de Exclusão.
     */
    delete(): void;
    /**
     * Executa a operação de Modificação.
     */
    modify(): void;
    /**
     * Executa a operação de Primeira Ocorrência.
     */
    firstItem(): void;
    /**
     * Executa a operação de Ocorrência Anterior.
     */
    previousItem(): void;
    /**
     * Executa a operação de Próxima Ocorrência.
     */
    nextItem(): void;
    /**
     * Executa a operação de Última Ocorrência.
     */
    lastItem(): void;
    /**
     * Executa a operação de Pesquisa.
     */
    searchItem(): void;
    /**
     * Executa a operação de Vá Para.
     */
    goTo(): void;
    /**
     * Executa a operação de Sair.
     */
    exit(): void;
    /**
     * Executa a operação de Ajuda.
     */
    help(): void;
    /**
     * Executa a operação de Relatórios.
     */
    report(): void;
    /**
     * Executa a operação de Consultas.
     */
    query(): void;
    /**
     * Executa a operação Confirma alterações.
     */
    save(): void;
    /**
     * Executa a operação Cancela alterações.
     */
    cancel(): void;
    /**
     * Executa a operação Desfaz alterações.
     */
    undo(): void;
}
