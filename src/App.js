import React from 'react';
import NavBar from './components/Navbar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from './components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';

export default function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<h1>No existe la pagina</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
