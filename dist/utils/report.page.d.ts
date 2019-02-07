import { OEElement } from 'oe-test-agent';
declare enum Destiny {
    'Impressora' = 1,
    'Arquivo' = 2,
    'Terminal' = 3
}
declare enum Mode {
    'On-Line' = 1,
    'Batch' = 2
}
declare enum Columns {
    '80_colunas' = 1,
    '132_colunas' = 2
}
export declare abstract class Report {
    protected window: OEElement;
    static readonly Destiny: typeof Destiny;
    static readonly Mode: typeof Mode;
    static readonly Columns: typeof Columns;
    /**
     * Define a janela atual Progress.
     *
     * @param win Objeto com a janela atual Progress.
     */
    setWindow(win: OEElement): void;
    /**
     * Seleciona a aba Seleção.
     */
    selectTab(): void;
    /**
     * Seleciona a aba Parâmetros.
     */
    parametersTab(): void;
    /**
     * Seleciona a aba Impressão.
     */
    printerTab(): void;
    /**
     * Seta o destino da impressão de acordo com o valor recebido.
     * @param reportTarget Destino da impressão.
     */
    setReportTarget(reportTarget: Destiny): void;
    /**
     * Seta o modo de impressão de acordo com o valor recebido.
     * @param executionMode Modo de impressão.
     */
    setExecutionMode(executionMode: Mode): void;
    /**
     * Recebe o valor para o tooglebox Imprimir Página de Parâmetros e
     * o numero de colunas que o relatório irá conter.
     * @param print Campo Imprimir Página de Parâmetros.
     * @param columns Numero de colunas do relatório.
     */
    setParametersPage(print: boolean | undefined, columns: Columns): void;
    /**
     * Clica no botão Seleção de arquivo.
     **/
    selectFile(): void;
    /**
     * Clica no botão Configuração de impressora.
     **/
    selectPrinter(): void;
    /**
     * Clica no botão Executar.
     **/
    execute(): void;
    /**
     * Confirma a execução da atualização do menu.
     */
    confirmExecution(): void;
    /**
     * Cancela a execução da atualização do menu.
     */
    cancelExecution(): void;
    /**
     * Clica no botão Fechar
     **/
    exit(): void;
    /**
     * Clica no botão Ajuda.
     **/
    help(): void;
}
export {};
