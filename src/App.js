import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';
import SideBar from './components/SideBar.jsx';

export default function App() {
  return (
    <>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <ItemListContainer greeting="Lista de Productos"></ItemListContainer>
    </>
  );
}
