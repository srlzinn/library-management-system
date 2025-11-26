import React from 'react';

const LivroList = ({ livros, onEmprestar }) => {
  return (
    <div className="livro-list">
      <h2>Acervo da Biblioteca</h2>
      {livros.map(livro => (
        <div key={livro.id} className="livro-card">
          <h3>{livro.titulo}</h3>
          <p>Autor: {livro.autor}</p>
          <p>ISBN: {livro.isbn}</p>
          <p>Status: 
            <span className={`status ${livro.status}`}>
              {livro.status}
            </span>
          </p>
          {livro.status === 'disponivel' && (
            <button onClick={() => onEmprestar(livro.id)}>
              Emprestar
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default LivroList;