import { OEElement } from 'oe-test-agent';

export abstract class CrudEms2 {
  protected window!: OEElement;

  /**
   * Define a janela atual Progress.
   *
   * @param win Objeto com a janela atual Progress.
   */
  public setWindow(win: OEElement): void {
    this.window = win;
  }

  /**
   * Executa a operação de Inclusão.
   */
  public add(): void {
    this.window.findElement('bt-add').choose();
  }

  /**
   * Executa a operação de Cópia.
   */
  public copy(): void {
    this.window.findElement('bt-cop').choose();
  }

  /**
   * Executa a operação de Exclusão.
   */
  public delete(): void {
    this.window.findElement('bt-del').choose();
  }

  /**
   * Executa a operação de Modificação.
   */
  public modify(): void {
    this.window.findElement('bt-mod').choose();
  }

  /**
   * Executa a operação de Primeira Ocorrência.
   */
  public firstItem(): void {
    this.window.findElement('bt-fir').choose();
  }

  /**
   * Executa a operação de Ocorrência Anterior.
   */
  public previousItem(): void {
    this.window.findElement('bt-pre').choose();
  }

  /**
   * Executa a operação de Próxima Ocorrência.
   */
  public nextItem(): void {
    this.window.findElement('bt-nex').choose();
  }

  /**
   * Executa a operação de Última Ocorrência.
   */
  public lastItem(): void {
    this.window.findElement('bt-las').choose();
  }

  /**
   * Executa a operação de Pesquisa.
   */
  public searchItem(): void {
    this.window.findElement('bt-sea').choose();
  }

  /**
   * Executa a operação de Vá Para.
   */
  public goTo(): void {
    this.window.findElement('bt-go').choose();
  }

  /**
   * Executa a operação de Sair.
   */
  public exit(): void {
    this.window.findElement('bt-exi').choose();
  }

  /**
   * Executa a operação de Ajuda.
   */
  public help(): void {
    this.window.findElement('bt-hel').choose();
  }

  /**
   * Executa a operação de Relatórios.
   */
  public report(): void {
    this.window.findElement('bt-pri').choose();
  }

  /**
   * Executa a operação de Consultas.
   */
  public query(): void {
    this.window.findElement('bt-joi').choose();
  }

  /**
   * Executa a operação Confirma alterações.
   */
  public save(): void {
    this.window.findElement('bt-sav').choose();
  }

  /**
   * Executa a operação Cancela alterações.
   */
  public cancel(): void {
    this.window.findElement('bt-can').choose();
  }

  /**
   * Executa a operação Desfaz alterações.
   */
  public undo(): void {
    this.window.findElement('bt-und').choose();
  }
}
