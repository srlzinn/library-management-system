const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { Biblioteca } = require('../../src/services/BibliotecaService');

let biblioteca;
let livro;
let resultado;

Given('que existe um livro {string} disponível', function (titulo) {
  biblioteca = new Biblioteca();
  livro = biblioteca.adicionarLivro(titulo, 'Autor Teste', 'ISBN123', 2020);
});

When('eu solicito o empréstimo deste livro para {string}', function (usuario) {
  resultado = biblioteca.emprestarLivro(livro.id, usuario);
});

Then('o livro deve ser marcado como emprestado', function () {
  assert.strictEqual(livro.status, 'emprestado');
});

Then('um registro de empréstimo deve ser criado', function () {
  assert.strictEqual(resultado.sucesso, true);
});