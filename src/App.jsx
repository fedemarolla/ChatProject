import React from 'react';
import './App.css';
import ChatContainer from './Components/ChatConteiner/ChatContainer';
import { Routes, Route, Navigate } from 'react-router';

const App = () => {
  return (
    /*routes es el componente contenedor, escucha la url y decide cual ruta mostrar*/
    <Routes> 
      {/* el rout define la ruta individual y usa path para la url que debe coincidir, y element renderiza el componente de esa ruta */}
      <Route path="/" element={<ChatContainer />} /> 
      {/* el slash es el home de la pagina  */}
      <Route path='/chat/:contactId ' element={<ChatContainer />}/>
      <Route path='*' element={<Navigate to="/" />}/>

    </Routes>
  );
};

export default App;
