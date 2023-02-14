import React from 'react';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
