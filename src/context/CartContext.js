import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    function isInCart(item) {
        return cartList.find(obj => obj.id === item.id)
    }

    function modifyItem(item) {
        const newArray = cartList.map(obj =>
            obj.id === item.id ? { ...obj, quantity: item.quantity } : obj
        );
        setCartList(newArray);
    }


    function addItem(item, quantity) {

        if (isInCart(item)) {
            modifyItem(item)
        }
        else{
            setCartList([...cartList, item]);
        }

        console.log(cartList)
    }

    function removeItem(item) {
        const copyArray = [...cartList];
        const newArray = copyArray.filter(elm=>elm.id !== item.id);
        setCartList(newArray);
    }

    function emptyCart() {
        setCartList([]);
    }
    
   const getTotalProducts = ()=>{
        const totalProducts = cartList.reduce((acc,item)=>acc + item.quantity,0);
        return totalProducts;
    }
    
    const getTotalCheckout = ()=>{
        const totalCheckout = cartList.reduce((acc,item)=>acc + (item.quantity*item.price),0);
        return totalCheckout;
    }

    return <CartContext.Provider value={{cartList,addItem,modifyItem,removeItem,emptyCart,isInCart,getTotalProducts,getTotalCheckout}}> {children} </CartContext.Provider>

}