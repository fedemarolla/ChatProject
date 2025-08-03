import React from 'react';
import './App.css';
import ChatContainer from './Components/ChatConteiner/ChatContainer';
import { Routes, Route, Navigate } from 'react-router';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatContainer />} />
      <Route path="/chat/:contactId" element={<ChatContainer />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

