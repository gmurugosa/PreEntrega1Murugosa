import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useEffect } from "react";

const ItemDetail = ({product}) => {    

return (

    <>
      <div>
        <h1>Detalle de Item</h1>
        <img src={product.image} alt="pelicula1" />
        <h4>{`Nombre ${product.name}`}</h4>
        <h4>{`Categoria: ${product.category}`}</h4>
        <h4>{`Precio: USD ${product.price}`}</h4>
        <h4>{`Stock: ${product.stock}`}</h4>
        <ItemCount stock={product.stock}></ItemCount>
        <button>Comprar</button>
      </div>
    </>

  )
}

export default ItemDetail
