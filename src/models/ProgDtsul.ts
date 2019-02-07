export enum Template {
  'Nenhum' = 'Nenhum',
  'Cadastro Simples' = 'Cadastro Simples',
  'Cadastro Simples Alteração' = 'Cadastro Simples Alteração',
  'Cadastro Complexo' = 'Cadastro Complexo',
  'Cadastro Complexo Alteração' = 'Cadastro Complexo Alteração',
  'Cadastro Simples Inclusão' = 'Cadastro Simples Inclusão',
  'Cadastro Paixfilho Filho' = 'Cadastro Paixfilho Filho',
  'Cadastro Paixfilho Ambos' = 'Cadastro Paixfilho Ambos',
  'Inclui/Modifica Pai' = 'Inclui/Modifica Pai',
  'Inclui/Modifica Filho' = 'Inclui/Modifica Filho',
  'Formação' = 'Formação',
  'Parâmetros Únicos' = 'Parâmetros Únicos',
  'Pesquisa' = 'Pesquisa',
  'Consulta Simples' = 'Consulta Simples',
  'Consulta Complexa' = 'Consulta Complexa',
  'Consulta Relacionamento' = 'Consulta Relacionamento',
  'Relatórios' = 'Relatórios',
  'Vá para' = 'Vá para',
  'Custom Dialog' = 'Custom Dialog',
  'Janela Detalhe' = 'Janela Detalhe',
  'Janela Mestre' = 'Janela Mestre',
  'Browse Inclui/Modifica' = 'Browse Inclui/Modifica',
  'Browse Zoom' = 'Browse Zoom',
  'Query' = 'Query',
  'Viewer' = 'Viewer',
  'Importação/Exportação' = 'Importação/Exportação',
  'Programas sem Interface' = 'Programas sem Interface',
  'Datasul-EMS 5.0' = 'Datasul-EMS 5.0',
  'Relatório Gerado pelo Data Viewer' = 'Relatório Gerado pelo Data Viewer',
  'Formação sem Navegação' = 'Formação sem Navegação',
  'Estrutura' = 'Estrutura',
  'Digitação Rápida' = 'Digitação Rápida',
  'Programa HTML' = 'Programa HTML',
  'Portal HTML' = 'Portal HTML',
  'Área de Trabalho' = 'Área de Trabalho',
  'Programa THF' = 'Programa THF'
}

export enum Tipo {
  'Consulta' = 'Consulta',
  'Manutenção' = 'Manutenção',
  'Relatório' = 'Relatório',
  'Tarefas' = 'Tarefas'
}

export enum Interface {
  GUI = 1,
  WEB = 2,
  ChUI = 3,
  Flex = 4
}

export enum Categoria {
  'BUSINESSPROCESS' = 'BUSINESSPROCESS',
  'MONITORY' = 'MONITORY',
  'REPORT' = 'REPORT',
  'MAINTENANCE' = 'MAINTENANCE',
  'TOOLBAR' = 'TOOLBAR',
  'CONFIG' = 'CONFIG',
  'STATUSBAR' = 'STATUSBAR',
  'WINDOW' = 'WINDOW',
  'BUSINESSPROCESS (Metadados)' = 'BUSINESSPROCESS (Metadados)',
  'MONITORY (Metadados)' = 'MONITORY (Metadados)',
  'REPORT (Metadados)' = 'REPORT (Metadados)',
  'MAINTENANCE (Metadados)' = 'MAINTENANCE (Metadados)',
  'TOOLBAR (Metadados)' = 'TOOLBAR (Metadados)',
  'CONFIG (Metadados)' = 'CONFIG (Metadados)',
  'STATUSBAR (Metadados)' = 'STATUSBAR (Metadados)',
  'WINDOW (Metadados)' = 'WINDOW (Metadados)',
  'CRUDFREEFORM (Metadados)' = 'CRUDFREEFORM (Metadados)'
}

export enum FamiliaSO {
  'Todas' = 'Todas',
  'Windows' = 'Windows',
  'Unix/Linux' = 'Unix/Linux'
}

export class ProgDtsul {
  private _codProgDtsul = '';
  private _desProgDtsul = '';
  private _nomProgExt = '';
  private _nomProgDtsulMenu = '';
  private _nomProgMenuVerbal = '';
  private _nomProgUpc = '';
  private _codProced = '';
  private _template = Template['Nenhum'];
  private _tipProgDtsul = Tipo['Consulta'];
  private _interfac = Interface.GUI;
  private _categProgDtsul!: Categoria;
  private _visualizMenu = true;
  private _loginAutom = false;
  private _atualizQuery = false;
  private _nomVerbCustom = false;
  private _outroProdutDtsul = false;
  private _geraLogExec = false;
  private _ignoraTrad = false;
  private _familiaSo = FamiliaSO['Todas'];

  public get codProgDtsul() {
    return this._codProgDtsul;
  }

  public set codProgDtsul(value) {
    this._codProgDtsul = value;
  }

  public get desProgDtsul() {
    return this._desProgDtsul;
  }

  public set desProgDtsul(value) {
    this._desProgDtsul = value;
  }

  public get nomProgExt() {
    return this._nomProgExt;
  }

  public set nomProgExt(value) {
    this._nomProgExt = value;
  }

  public get nomProgDtsulMenu() {
    return this._nomProgDtsulMenu;
  }

  public set nomProgDtsulMenu(value) {
    this._nomProgDtsulMenu = value;
  }

  public get nomProgMenuVerbal() {
    return this._nomProgMenuVerbal;
  }

  public set nomProgMenuVerbal(value) {
    this._nomProgMenuVerbal = value;
  }

  public get nomProgUpc() {
    return this._nomProgUpc;
  }

  public set nomProgUpc(value) {
    this._nomProgUpc = value;
  }

  public get codProced() {
    return this._codProced;
  }

  public set codProced(value) {
    this._codProced = value;
  }

  public get template() {
    return this._template;
  }

  public set template(value) {
    this._template = value;
  }

  public get interfac() {
    return this._interfac;
  }

  public set interfac(value) {
    this._interfac = value;
  }

  public get tipProgDtsul() {
    return this._tipProgDtsul;
  }

  public set tipProgDtsul(value) {
    this._tipProgDtsul = value;
  }

  public get familiaSo() {
    return this._familiaSo;
  }

  public set familiaSo(value) {
    this._familiaSo = value;
  }

  public get categProgDtsul(): Categoria {
    return this._categProgDtsul;
  }

  public set categProgDtsul(value: Categoria) {
    this._categProgDtsul = value;
  }

  public get visualizMenu() {
    return this._visualizMenu;
  }

  public set visualizMenu(value) {
    this._visualizMenu = value;
  }

  public get loginAutom() {
    return this._loginAutom;
  }

  public set loginAutom(value) {
    this._loginAutom = value;
  }

  public get atualizQuery() {
    return this._atualizQuery;
  }

  public set atualizQuery(value) {
    this._atualizQuery = value;
  }

  public get nomVerbCustom() {
    return this._nomVerbCustom;
  }

  public set nomVerbCustom(value) {
    this._nomVerbCustom = value;
  }

  public get outroProdutDtsul() {
    return this._outroProdutDtsul;
  }

  public set outroProdutDtsul(value) {
    this._outroProdutDtsul = value;
  }

  public get geraLogExec() {
    return this._geraLogExec;
  }

  public set geraLogExec(value) {
    this._geraLogExec = value;
  }

  public get ignoraTrad() {
    return this._ignoraTrad;
  }

  public set ignoraTrad(value) {
    this._ignoraTrad = value;
  }
}
