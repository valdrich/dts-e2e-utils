import { OEElement } from 'oe-test-agent';

export abstract class CrudEms5Edit {
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
   * Executa a operação de Cópia.
   */

  public copy(): void {
    this.window.findElement('bt_cop').choose();
  }

  /**
   * Executa a operação de Ajuda.
   */
  public help(): void {
    this.window.findElement('bt_hel2').choose();
  }

  /**
   * Executa a operação de Ok.
   */
  public ok(): void {
    this.window.findElement('bt_ok').choose();
  }

  /**
   * Executa a operação de Salvar.
   */
  public save(): void {
    this.window.findElement('bt_save').choose();
  }

  /**
   * Executa a operação de Cancelar.
   */
  public cancel(): void {
    this.window.findElement('bt_can').choose();
  }

  /**
   * Executa a operação de Ocorrência Anterior.
   */
  public previousItem(): void {
    this.window.findElement('bt_pre2').choose();
  }

  /**
   * Executa a operação de Próxima Ocorrência.
   */
  public nextItem(): void {
    this.window.findElement('bt_nex2').choose();
  }

  /**
   * Executa a operação de Pesquisa.
   */
  public searchItem(): void {
    this.window.findElement('bt_sea2').choose();
  }
}
