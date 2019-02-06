export class GrpAplicatDtsul {
  private _codGrpAplicatDtsul = '';
  private _desGrpAplicatDtsul = '';
  private _numSeq = 0;
  private _nomGrpAplicatDtsulMenu = '';

  public get codGrpAplicatDtsul(): string {
    return this._codGrpAplicatDtsul;
  }

  public set codGrpAplicatDtsul(value: string) {
    this._codGrpAplicatDtsul = value;
  }

  public get desGrpAplicatDtsul(): string {
    return this._desGrpAplicatDtsul;
  }

  public set desGrpAplicatDtsul(value: string) {
    this._desGrpAplicatDtsul = value;
  }

  public get numSeq(): number {
    return this._numSeq;
  }

  public set numSeq(value: number) {
    this._numSeq = value;
  }

  public get nomGrpAplicatDtsulMenu(): string {
    return this._nomGrpAplicatDtsulMenu;
  }

  public set nomGrpAplicatDtsulMenu(value: string) {
    this._nomGrpAplicatDtsulMenu = value;
  }
}
