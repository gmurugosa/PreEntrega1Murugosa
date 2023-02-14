import React from 'react'
import './ItemDetailContainer.css';
import { obtenerProductoPorId } from "../../firebase/firebase.js"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  
  //hooks
  const [product, setProduct] = useState({})
  const {id} = useParams()

  useEffect(() => {

    (async () => {
      try {
        const doc = await obtenerProductoPorId(id);
        setProduct(doc)
      } catch (error) {
        console.error(error);
      }
    })();
  }, [])
  
  
  return (

    <>
      <div>
        <h1>Detalle de Item</h1>
        <img src={product.image} alt="pelicula1" />
        <h4>{`Nombre ${product.name}`}</h4>
        <h4>{`Categoria: ${product.category}`}</h4>
        <h4>{`Precio: USD ${product.price}`}</h4>
        <h4>{`Stock: ${product.price}`}</h4>
      </div>
    </>

  )
}

export default ItemDetailContainer
