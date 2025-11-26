describe('Sistema de Biblioteca', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('deve carregar a página inicial', () => {
    cy.contains('Sistema de Biblioteca');
  });

  it('deve permitir cadastrar um novo livro', () => {
    cy.get('input[name="titulo"]').type('Dom Casmurro');
    cy.get('input[name="autor"]').type('Machado de Assis');
    cy.get('input[name="isbn"]').type('1234567890');
    cy.get('button[type="submit"]').click();
    
    cy.contains('Dom Casmurro');
    cy.contains('Machado de Assis');
  });

  it('deve permitir emprestar um livro disponível', () => {
    cy.contains('button', 'Emprestar').first().click();
    cy.get('input[name="usuario"]').type('João Silva');
    cy.contains('button', 'Confirmar Empréstimo').click();
    
    cy.contains('Status: emprestado');
  });
});