// src/components/SeriesList.jsx

import React from 'react';

const SeriesList = ({ messages, onEditMessage, onDeleteMessage }) => {
  return (
    <div>
      <h2> Sua lista de séries: </h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            {msg}
            <button id="Editar" onClick={() => onEditMessage(index)}>Editar</button>
            <button id="Remover" onClick={() => onDeleteMessage(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;