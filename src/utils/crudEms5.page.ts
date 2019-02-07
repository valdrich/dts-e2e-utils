import { OEElement } from 'oe-test-agent';

export abstract class CrudEms5 {
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
    this.window.findElement('bt_add1').choose();
  }

  /**
   * Executa a operação de Exclusão.
   */
  public delete(): void {
    this.window.findElement('bt_era1').choose();
  }

  /**
   * Executa a operação de Modificação.
   */
  public modify(): void {
    this.window.findElement('bt_mod1').choose();
  }

  /**
   * Executa a operação de Primeira Ocorrência.
   */
  public firstItem(): void {
    this.window.findElement('bt_fir').choose();
  }

  /**
   * Executa a operação de Ocorrência Anterior.
   */
  public previousItem(): void {
    this.window.findElement('bt_pre1').choose();
  }

  /**
   * Executa a operação de Próxima Ocorrência.
   */
  public nextItem(): void {
    this.window.findElement('bt_nex1').choose();
  }

  /**
   * Executa a operação de Última Ocorrência.
   */
  public lastItem(): void {
    this.window.findElement('bt_las').choose();
  }

  /**
   * Executa a operação de Pesquisa.
   */
  public searchItem(): void {
    this.window.findElement('bt_sea1').choose();
  }

  /**
   * Executa a operação de Sair.
   */
  public exit(): void {
    this.window.findElement('bt_exi').choose();
  }

  /**
   * Executa a operação de Ajuda.
   */
  public help(): void {
    this.window.findElement('bt_hel1').choose();
  }

  /**
   * Executa a operação de Relatórios.
   */
  public printer(): void {
    this.window.findElement('bt_pri').choose();
  }

  /**
   * Executa a operação de Detalhes.
   */
  public detail(): void {
    this.window.findElement('bt_det1').choose();
  }
}
