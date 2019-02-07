import { oeAgent } from 'oe-test-agent';

describe('LOGIN', () => {
  describe('Interno', () => {
    it('não deve autenticar usuário com senha expirada', () => {});
    it('não deve autenticar usuário bloqueado', () => {});
  });

  describe('Externo', () => {
    it('não deve autenticar usuário bloqueado no AD', () => {});
    it('deve autenticar usuário no domínio selecionado', () => {});
  });
});

describe('SEC000AA - Usuários produto', () => {
  describe('Manutenção', () => {
    it('deve criar usuário interno', () => {});
    it('deve criar usuário externo', () => {});
  });

  describe('Navegação', () => {
    describe('Usuário Comum', () => {
      it('deve permitir alterar dados do usuário autenticado', () => {});
      it('não deve permitir alterar dados de outros usuários', () => {});
    });

    describe('Usuário Super', () => {
      it('deve permitir alterar dados de outros usuários', () => {});
    });
  });
});