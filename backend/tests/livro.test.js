const { Livro } = require('../src/models/Livro');

describe('Classe Livro', () => {
  test('deve criar um livro com status disponível por padrão', () => {
    const livro = new Livro(1, 'Dom Casmurro', 'Machado de Assis', '123456', 1899);
    
    expect(livro.titulo).toBe('Dom Casmurro');
    expect(livro.status).toBe('disponivel');
  });

  test('deve permitir emprestar um livro', () => {
    const livro = new Livro(1, 'Dom Casmurro', 'Machado de Assis', '123456', 1899);
    livro.status = 'emprestado';
    
    expect(livro.status).toBe('emprestado');
  });
});