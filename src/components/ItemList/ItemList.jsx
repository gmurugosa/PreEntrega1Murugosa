import React from 'react'
import './ItemList.css';
import { Link } from 'react-router-dom';
const ItemListContainer = ({ product }) => {
  return (

    <div className='item-list-container'>
      <img className='movieImage' src={product.image} alt="pelicula1" />
      <div className="item-title"><strong>{product.name}</strong></div>
      <div className="item-stock">Stock disponible: <strong>{product.stock}</strong></div>
      <div className="item-price">Precio: <strong>USD {product.price}</strong></div>
      <Link to={`/item/${product.id}`} >
      <button className="btn btn-success btn-sm">Detalle</button>
      </Link>
    </div>

  )
}

export default ItemListContainer
