/**
 * Programa executado na inicializacao do "OE Test Agent", necessario para
 * autenticacao do usuario no Datasul.
 */
DEFINE INPUT PARAMETER cUser AS CHARACTER NO-UNDO.
DEFINE INPUT PARAMETER cPswd AS CHARACTER NO-UNDO.

DEFINE VARIABLE hUtils   AS HANDLE    NO-UNDO.
DEFINE VARIABLE cMessage AS CHARACTER NO-UNDO.

{utp/utapi009.i}

RUN OEUtils.p PERSISTENT SET hUtils.
RUN DoLog IN hUtils (INPUT "STARTUP", INPUT "Autenticando usuario ~"" + TRIM(cUser) + "~" no Datasul.").

RUN btb/btapi910za(INPUT cUser, INPUT cPswd, OUTPUT TABLE tt-erros).

IF  RETURN-VALUE = "NOK" THEN
DO:
    FIND FIRST tt-erros NO-LOCK NO-ERROR.

    ASSIGN
        cMessage = "Erro ao autenticar usuario ~"" + TRIM(cUser) + "~" no Datasul!" + CHR(10) + CHR(13)
        cMessage = cMessage + "(" + STRING(tt-erros.cod-erro) + " " + tt-erros.desc-erro + ").".

    MESSAGE cMessage
      VIEW-AS ALERT-BOX ERROR BUTTONS OK.

    RUN DoLog IN hUtils (INPUT "STARTUP", INPUT cMessage).

    QUIT.
END.
ELSE
    RUN DoLog IN hUtils (INPUT "STARTUP", INPUT "Usuario ~"" + TRIM(cUser) + "~" autenticado com sucesso no Datasul.").

FINALLY:
    DELETE PROCEDURE hUtils NO-ERROR.
END FINALLY.
