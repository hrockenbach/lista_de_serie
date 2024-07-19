// src/App.js

import React, { useState } from 'react';
import SeriesList from './components/SeriesList';
import MessageForm from './components/MessageForm';
import './App.css'; 

const App = () => {
  const [messages, setMessages] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editMessage, setEditMessage] = useState('');

  const handleAddMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const handleEditMessage = (index) => {
    setEditIndex(index);
    setEditMessage(messages[index]);
  };

  const handleUpdateMessage = (updatedMessage, index) => {
    const updatedMessages = [...messages];
    updatedMessages[index] = updatedMessage;
    setMessages(updatedMessages);
    setEditIndex(null);
    setEditMessage('');
  };

  const handleDeleteMessage = (index) => {
    const filteredMessages = messages.filter((_, i) => i !== index);
    setMessages(filteredMessages);
  };

  return (
    <div>
      <h1>Liste suas séries!</h1>
      <MessageForm
        onMessageSubmit={handleAddMessage}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        editMessage={editMessage}
      />
      <SeriesList
        messages={messages}
        onEditMessage={handleEditMessage}
        onDeleteMessage={handleDeleteMessage}
      />
    </div>
  );
};

export default App;