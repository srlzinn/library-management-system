const { Livro, Emprestimo } = require('../models/Livro');

class Biblioteca {
  constructor() {
    this.livros = [];
    this.emprestimos = [];
    this.nextLivroId = 1;
    this.nextEmprestimoId = 1;
  }

  adicionarLivro(titulo, autor, isbn, anoPublicacao) {
    const livro = new Livro(
      this.nextLivroId++,
      titulo,
      autor,
      isbn,
      anoPublicacao
    );
    this.livros.push(livro);
    return livro;
  }

  emprestarLivro(livroId, usuario) {
    const livro = this.livros.find(l => l.id === livroId);
    
    if (!livro) {
      return { sucesso: false, mensagem: 'Livro não encontrado' };
    }
    
    if (livro.status !== 'disponivel') {
      return { sucesso: false, mensagem: 'Livro indisponível para empréstimo' };
    }

    livro.status = 'emprestado';
    
    const emprestimo = new Emprestimo(
      this.nextEmprestimoId++,
      livroId,
      usuario,
      new Date().toISOString()
    );
    
    this.emprestimos.push(emprestimo);
    return { sucesso: true, emprestimo };
  }

  devolverLivro(livroId) {
    const livro = this.livros.find(l => l.id === livroId);
    const emprestimo = this.emprestimos.find(e => e.livroId === livroId && !e.dataDevolucao);
    
    if (livro && emprestimo) {
      livro.status = 'disponivel';
      emprestimo.dataDevolucao = new Date().toISOString();
      return { sucesso: true };
    }
    
    return { sucesso: false, mensagem: 'Empréstimo não encontrado' };
  }

  buscarLivros(termo) {
    return this.livros.filter(livro => 
      livro.titulo.toLowerCase().includes(termo.toLowerCase()) ||
      livro.autor.toLowerCase().includes(termo.toLowerCase())
    );
  }
}

module.exports = { Biblioteca };