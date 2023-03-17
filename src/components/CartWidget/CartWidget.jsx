import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {getTotalProducts} = useContext(CartContext);
    
    return (
        <div className='cart-icon'>
            <Link to={"/cart"} >
                <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
                <div className="cantidad-productos">{getTotalProducts()}</div>
            </Link>
        </div>
    )
}

export default CartWidget
