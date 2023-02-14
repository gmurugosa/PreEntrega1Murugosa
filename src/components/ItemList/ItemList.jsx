import React from 'react'
import './ItemList.css';

const ItemListContainer = ({product}) => {
  return (

    <div className='item-list-container'>
      <img className='movieImage' src={product.image} alt="pelicula1" />
      <div className="item-title"><strong>{product.name}</strong></div>
      <div className="item-stock">Stock disponible: <strong>{product.stock}</strong></div>
      <div className="item-price">Precio: <strong>USD {product.price}</strong></div>
      <a href={`/item/${product.id}`} className="btn btn-success btn-sm" role="button" aria-pressed="true">Comprar</a>
      </div>

  )
}

export default ItemListContainer
