import { OEElement } from 'oe-test-agent';

import { UTMSGS } from './utmsgs.page';

enum Destination {
  'Impressora' = 1,
  'Arquivo' = 2,
  'Terminal' = 3
}

enum Mode {
  'On-Line' = 1,
  'Batch' = 2
}

enum Columns {
  '080 colunas' = 1,
  '132 colunas' = 2
}

export abstract class Report {
  protected window!: OEElement;

  public static readonly Destination = Destination;
  public static readonly Mode = Mode;
  public static readonly Columns = Columns;

  /**
   * Define a instância do ```OEElement``` da tela de relatório.
   * @param window Instância da tela de relatório retornada pelo ```OE Test Agent```
   */
  public setWindow(window: OEElement): void {
    this.window = window;
  }

  /**
   * Seleciona a aba de "Seleção".
   */
  public selectTab(): void {
    this.window.findElement('im-pg-sel').choose();
  }

  /**
   * Seleciona a aba de "Parâmetros".
   */
  public parametersTab(): void {
    this.window.findElement('im-pg-par').choose();
  }

  /**
   * Seleciona a aba de "Impressão".
   */
  public printerTab(): void {
    this.window.findElement('im-pg-imp').choose();
  }

  /**
   * Define o valor do campo de destino de emissão do relatório.
   * @param destination Valor do destino de emissão.
   */
  public setReportDestination(destination: Destination) {
    this.window.findElement('rs-destino').select(destination);
  }

  /**
   * Define o valor do campo de destino de emissão do relatório.
   *
   * @deprecated Substituir pelo método ```setReportDestination```.
   * @param destination Destino de emissão.
   */
  public setReportTarget(destination: Destination): void {
    this.setReportDestination(destination);
  }

  /**
   * Define o valor do campo de modo de execução do relatório.
   * @param mode Modo de execução.
   */
  public setExecutionMode(mode: Mode): void {
    this.window.findElement('rs-execucao').select(mode);
  }

  /**
   * Recebe o valor para o tooglebox Imprimir Página de Parâmetros e
   * o numero de colunas que o relatório irá conter.
   * @param print Campo Imprimir Página de Parâmetros.
   * @param columns Numero de colunas do relatório.
   */
  public setParametersPage(print: boolean, columns: Columns): void {
    this.window.findElement('tg-parametro').check(print);
    this.window.findElement('rs-formato').select(columns);
  }

  /**
   * Clica no botão Seleção de arquivo.
   **/
  public selectFile(): void {
    this.window.findElement('bt-arquivo').choose();
  }

  /**
   * Clica no botão Configuração de impressora.
   **/
  public selectPrinter(): void {
    this.window.findElement('bt-config-impr').choose();
  }

  /**
   * Clica no botão Executar.
   **/
  public execute(): void {
    this.window.findElement('bt-executar').choose();
  }

  /**
   * Confirma a execução da atualização do menu.
   */
  public confirmExecution(): void {
    const msgWindow = UTMSGS.getMessageWindow('(56372)');
    UTMSGS.yes(msgWindow);
  }

  /**
   * Cancela a execução da atualização do menu.
   */
  public cancelExecution(): void {
    const msgWindow = UTMSGS.getMessageWindow('(56372)');
    UTMSGS.no(msgWindow);
  }

  /**
   * Clica no botão Fechar
   **/
  public exit(): void {
    this.window.findElement('bt-cancelar').choose();
  }

  /**
   * Clica no botão Ajuda.
   **/
  public help(): void {
    this.window.findElement('bt-ajuda').choose();
  }
}
