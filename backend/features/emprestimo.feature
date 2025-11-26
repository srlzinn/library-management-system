Funcionalidade: Empréstimo de livros
  Como um usuário da biblioteca
  Eu quero poder emprestar livros disponíveis
  Para poder ler em casa

  Cenário: Empréstimo de livro disponível
    Dado que existe um livro "Dom Casmurro" disponível
    Quando eu solicito o empréstimo deste livro para "João Silva"
    Então o livro deve ser marcado como emprestado
    E um registro de empréstimo deve ser criado

  Cenário: Tentativa de empréstimo de livro indisponível
    Dado que o livro "Memórias Póstumas" está emprestado
    Quando eu tento emprestar este livro
    Então deve ser exibida a mensagem "Livro indisponível para empréstimo"