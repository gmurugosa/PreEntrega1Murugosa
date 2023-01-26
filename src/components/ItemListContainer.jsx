import React from 'react'
import '../styles/ItemListContainer.css';

const ItemListContainer = ({greeting})=>{
  return (
    <div className='list-container'>
      <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer
