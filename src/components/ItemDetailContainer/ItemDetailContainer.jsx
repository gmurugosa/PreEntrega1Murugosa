import React from 'react'
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail'
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
  }, [id])
  
  
  return (

    <>
      <ItemDetail id={id} product={product}/>
    </>

  )
}

export default ItemDetailContainer
