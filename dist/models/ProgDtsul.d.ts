export declare enum Template {
    'Nenhum' = "Nenhum",
    'Cadastro Simples' = "Cadastro Simples",
    'Cadastro Simples Alteração' = "Cadastro Simples Altera\u00E7\u00E3o",
    'Cadastro Complexo' = "Cadastro Complexo",
    'Cadastro Complexo Alteração' = "Cadastro Complexo Altera\u00E7\u00E3o",
    'Cadastro Simples Inclusão' = "Cadastro Simples Inclus\u00E3o",
    'Cadastro Paixfilho Filho' = "Cadastro Paixfilho Filho",
    'Cadastro Paixfilho Ambos' = "Cadastro Paixfilho Ambos",
    'Inclui/Modifica Pai' = "Inclui/Modifica Pai",
    'Inclui/Modifica Filho' = "Inclui/Modifica Filho",
    'Formação' = "Forma\u00E7\u00E3o",
    'Parâmetros Únicos' = "Par\u00E2metros \u00DAnicos",
    'Pesquisa' = "Pesquisa",
    'Consulta Simples' = "Consulta Simples",
    'Consulta Complexa' = "Consulta Complexa",
    'Consulta Relacionamento' = "Consulta Relacionamento",
    'Relatórios' = "Relat\u00F3rios",
    'Vá para' = "V\u00E1 para",
    'Custom Dialog' = "Custom Dialog",
    'Janela Detalhe' = "Janela Detalhe",
    'Janela Mestre' = "Janela Mestre",
    'Browse Inclui/Modifica' = "Browse Inclui/Modifica",
    'Browse Zoom' = "Browse Zoom",
    'Query' = "Query",
    'Viewer' = "Viewer",
    'Importação/Exportação' = "Importa\u00E7\u00E3o/Exporta\u00E7\u00E3o",
    'Programas sem Interface' = "Programas sem Interface",
    'Datasul-EMS 5.0' = "Datasul-EMS 5.0",
    'Relatório Gerado pelo Data Viewer' = "Relat\u00F3rio Gerado pelo Data Viewer",
    'Formação sem Navegação' = "Forma\u00E7\u00E3o sem Navega\u00E7\u00E3o",
    'Estrutura' = "Estrutura",
    'Digitação Rápida' = "Digita\u00E7\u00E3o R\u00E1pida",
    'Programa HTML' = "Programa HTML",
    'Portal HTML' = "Portal HTML",
    'Área de Trabalho' = "\u00C1rea de Trabalho",
    'Programa THF' = "Programa THF"
}
export declare enum Tipo {
    'Consulta' = "Consulta",
    'Manutenção' = "Manuten\u00E7\u00E3o",
    'Relatório' = "Relat\u00F3rio",
    'Tarefas' = "Tarefas"
}
export declare enum Interface {
    GUI = 1,
    WEB = 2,
    ChUI = 3,
    Flex = 4
}
export declare enum Categoria {
    'BUSINESSPROCESS' = "BUSINESSPROCESS",
    'MONITORY' = "MONITORY",
    'REPORT' = "REPORT",
    'MAINTENANCE' = "MAINTENANCE",
    'TOOLBAR' = "TOOLBAR",
    'CONFIG' = "CONFIG",
    'STATUSBAR' = "STATUSBAR",
    'WINDOW' = "WINDOW",
    'BUSINESSPROCESS (Metadados)' = "BUSINESSPROCESS (Metadados)",
    'MONITORY (Metadados)' = "MONITORY (Metadados)",
    'REPORT (Metadados)' = "REPORT (Metadados)",
    'MAINTENANCE (Metadados)' = "MAINTENANCE (Metadados)",
    'TOOLBAR (Metadados)' = "TOOLBAR (Metadados)",
    'CONFIG (Metadados)' = "CONFIG (Metadados)",
    'STATUSBAR (Metadados)' = "STATUSBAR (Metadados)",
    'WINDOW (Metadados)' = "WINDOW (Metadados)",
    'CRUDFREEFORM (Metadados)' = "CRUDFREEFORM (Metadados)"
}
export declare enum FamiliaSO {
    'Todas' = "Todas",
    'Windows' = "Windows",
    'Unix/Linux' = "Unix/Linux"
}
export declare class ProgDtsul {
    private _codProgDtsul;
    private _desProgDtsul;
    private _nomProgExt;
    private _nomProgDtsulMenu;
    private _nomProgMenuVerbal;
    private _nomProgUpc;
    private _codProced;
    private _template;
    private _tipProgDtsul;
    private _interfac;
    private _categProgDtsul;
    private _visualizMenu;
    private _loginAutom;
    private _atualizQuery;
    private _nomVerbCustom;
    private _outroProdutDtsul;
    private _geraLogExec;
    private _ignoraTrad;
    private _familiaSo;
    codProgDtsul: string;
    desProgDtsul: string;
    nomProgExt: string;
    nomProgDtsulMenu: string;
    nomProgMenuVerbal: string;
    nomProgUpc: string;
    codProced: string;
    template: Template;
    interfac: Interface;
    tipProgDtsul: Tipo;
    familiaSo: FamiliaSO;
    categProgDtsul: Categoria;
    visualizMenu: boolean;
    loginAutom: boolean;
    atualizQuery: boolean;
    nomVerbCustom: boolean;
    outroProdutDtsul: boolean;
    geraLogExec: boolean;
    ignoraTrad: boolean;
}
