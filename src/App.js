import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Lista de Productos"></ItemListContainer>
    </>
  );
}
