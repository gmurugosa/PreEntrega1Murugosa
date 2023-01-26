import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cart-icon'>
            <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
            <div className="cantidad-productos">0</div>
        </div>
    )
}

export default CartWidget
