import { OEElement } from 'oe-test-agent';
declare enum Destination {
    'Impressora' = 1,
    'Arquivo' = 2,
    'Terminal' = 3
}
declare enum Mode {
    'On-Line' = 1,
    'Batch' = 2
}
declare enum Columns {
    '080 colunas' = 1,
    '132 colunas' = 2
}
export declare abstract class Report {
    protected window: OEElement;
    static readonly Destination: typeof Destination;
    static readonly Mode: typeof Mode;
    static readonly Columns: typeof Columns;
    /**
     * Define a instância do ```OEElement``` da tela de relatório.
     * @param window Instância da tela de relatório retornada pelo ```OE Test Agent```
     */
    setWindow(window: OEElement): void;
    /**
     * Seleciona a aba de "Seleção".
     */
    selectTab(): void;
    /**
     * Seleciona a aba de "Parâmetros".
     */
    parametersTab(): void;
    /**
     * Seleciona a aba de "Impressão".
     */
    printerTab(): void;
    /**
     * Define o valor do campo de destino de emissão do relatório.
     * @param destination Valor do destino de emissão.
     */
    setReportDestination(destination: Destination): void;
    /**
     * Define o valor do campo de destino de emissão do relatório.
     *
     * @deprecated Substituir pelo método ```setReportDestination```.
     * @param destination Destino de emissão.
     */
    setReportTarget(destination: Destination): void;
    /**
     * Define o valor do campo de modo de execução do relatório.
     * @param mode Modo de execução.
     */
    setExecutionMode(mode: Mode): void;
    /**
     * Define o valor dos campos de parâmetros de impressão.
     *
     * @param print ```true``` marca impressão da página de parâmetros.
     * @param columns Número de colunas do relatório.
     */
    setParametersPage(print: boolean, columns: Columns): void;
    /**
     * Clica no botão de seleção de impressora.
     **/
    selectPrinter(): void;
    /**
     * Clica no botão de seleção de arquivo.
     **/
    selectFile(): void;
    /**
     * Clica no botão de executar relatório.
     **/
    execute(): void;
    /**
     * Clica no botão de sair.
     **/
    exit(): void;
    /**
     * Clica no botão de ajuda.
     **/
    help(): void;
}
export {};
