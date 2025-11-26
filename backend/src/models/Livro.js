class Livro {
  constructor(id, titulo, autor, isbn, anoPublicacao, status = 'disponivel') {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this.anoPublicacao = anoPublicacao;
    this.status = status; // 'disponivel' | 'emprestado'
  }
}

class Emprestimo {
  constructor(id, livroId, usuario, dataEmprestimo, dataDevolucao = null) {
    this.id = id;
    this.livroId = livroId;
    this.usuario = usuario;
    this.dataEmprestimo = dataEmprestimo;
    this.dataDevolucao = dataDevolucao;
  }
}

module.exports = { Livro, Emprestimo };