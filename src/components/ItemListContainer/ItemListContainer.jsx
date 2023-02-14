import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.jsx'
import { obtenerProductos,obtenerProductosPorCategoria } from "../../firebase/firebase.js"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const ItemDetailCategoryContainer = () => {

  //hook
  const [products, setProducts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    if(id){
      (async () => {
        try {
          const data = await obtenerProductosPorCategoria(id);
          setProducts(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          )
        } catch (error) {
          console.error(error);
        }
      })();
    }
    else{
      (async () => {
        try {
          const data = await obtenerProductos();
          setProducts(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          )
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [])
return (

    <>
      <ul className="products-grid">
        {products.map((product) => (
          <ItemList key={product.id} product={product}></ItemList>
        ))}
      </ul>
    </>

  )
}

export default ItemDetailCategoryContainer