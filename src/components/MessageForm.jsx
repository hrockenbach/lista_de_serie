// src/components/MessageForm.jsx

import React, { useState, useEffect } from 'react';

const MessageForm = ({ onMessageSubmit, editIndex, setEditIndex, editMessage }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (editIndex !== null) {
      setMessage(editMessage);
    }
  }, [editIndex, editMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      if (editIndex !== null) {
        onMessageSubmit(message, editIndex);
        setEditIndex(null);
      } else {
        onMessageSubmit(message);
      }
      setMessage('');
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {editIndex !== null ? 'Editar Mensagem:' : 'Sua Mensagem:'}
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Digite sua mensagem..."
          required
        />
      </label>
      <button type="submit">{editIndex !== null ? 'Salvar' : 'Enviar'}</button>
    </form>
  );
};

export default MessageForm;