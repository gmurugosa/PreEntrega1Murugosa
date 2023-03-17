import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState} from "react";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({ id,product }) => {

  const {addItem} = useContext(CartContext)
  const [cantidad,setCantidad] = useState(1) 
  console.log(id)
  function agregarAlCarrito(){
    const orden = {id:id,name:product.name,image:product.image,price:product.price,quantity:cantidad} 
    addItem(orden);
  }

  return (

    <>
      <div>
        <h1>Detalle de Item</h1>
        <img src={product.image} alt="pelicula1" />
        <h4>{`Nombre ${product.name}`}</h4>
        <h4>{`Categoria: ${product.category}`}</h4>
        <h4>{`Precio: $ ${product.price}`}</h4>
        <h4>{`Stock: ${product.stock}`}</h4>
        <ItemCount stock={product.stock} cantidad={cantidad} setCantidad = {setCantidad}></ItemCount>
        <button className="btn btn-success btn-sm" onClick={()=>agregarAlCarrito()}>Agregar al Carrito</button>
      </div>
    </>

  )
}

export default ItemDetail
