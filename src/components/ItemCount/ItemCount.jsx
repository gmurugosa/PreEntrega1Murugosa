import React from 'react'
import { useState, useEffect } from "react";

const ItemCount = ({stock}) => {    

const [cantidad,setCantidad] = useState(1)    

function incrementar(){
    if(cantidad>=stock){
        return
    }
    setCantidad(cantidad+1)
}

function decrementar(){
    if(cantidad<=1){
        return 
    }
    setCantidad(cantidad-1)
}

return (    
    <>
      <div>
        <h4>Cantidad {cantidad}</h4>
        <button onClick={(e)=>{decrementar()}}>-</button>
        <button onClick={(e)=>{incrementar()}}>+</button>
        </div>
    </>

  )
}

export default ItemCount
