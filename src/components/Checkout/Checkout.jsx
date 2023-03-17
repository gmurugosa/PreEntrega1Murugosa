import React from 'react'
import './Checkout.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
import { guardarCheckout } from "../../firebase/firebase.js"

const Checkout = () => {

  const { cartList, getTotalCheckout, emptyCart } = useContext(CartContext);
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorEmailConfirmacion, setErrorEmailConfirmacion] = useState(null);
  const [idCheckout, setIdCheckout] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidCheckout() {
    return nombre.trim().length !== 0
      && apellido.trim().length !== 0
      && telefono.trim().length !== 0
      && email.trim().length !== 0
      && emailConfirmacion.trim().length !== 0
      && email === emailConfirmacion
      && errorEmail === null
      && errorEmailConfirmacion === null
      ;
  }

  const handleNombre = event => {
    setNombre(event.target.value);
  };

  const handleApellido = event => {
    setApellido(event.target.value);
  };

  const handleTelefono = event => {
    setTelefono(event.target.value);
  };

  const validoEmail = event => {

    if (!isValidEmail(event.target.value)) {
      setErrorEmail('El email no es valido');
    } else {
      setErrorEmail(null);
    }
    setEmail(event.target.value)

  };

  const validoEmailConfirmacion = event => {
    if (!isValidEmail(event.target.value)) {
      setErrorEmailConfirmacion('El email de confirmación no es valido');
    } else {
      setErrorEmailConfirmacion(null);
    }
    setEmailConfirmacion(event.target.value)
  };

  const realizarCheckout = async (e) => {
    try {
      const checkout = { nombre: nombre, apellido: apellido, telefono: telefono, data: { cartList }, total: getTotalCheckout(), fecha: new Date().getTime() }
      const idCheckout = await guardarCheckout(checkout);
      setIdCheckout(idCheckout)
      emptyCart()
      console.log(idCheckout)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>

      {cartList.length === 0 && <h3>No has cargado productos al carrito</h3>}

      {cartList.length > 0 &&
        <div>
          <p>Nombre:</p>
          <input
            id="nombre"
            name="nombre"
            value={nombre}
            placeholder=""
            onChange={handleNombre}
          />
          <p>Apellido:</p>
          <input
            id="apellido"
            name="apellido"
            value={apellido}
            placeholder=""
            onChange={handleApellido}
          />
          <p>Telefono:</p>
          <input
            id="telefono"
            name="telefono"
            value={telefono}
            placeholder=""
            onChange={handleTelefono}
          />
          <p>Email:</p>
          <input
            id="email"
            name="email"
            value={email}
            placeholder=""
            onChange={validoEmail}
          />
          {errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}
          <p></p>
          <p>Confirme Email:</p>
          <input
            id="emailConfirmacion"
            name="emailConfirmacion"
            value={emailConfirmacion}
            placeholder=""
            onChange={validoEmailConfirmacion}
          />
                    
          {errorEmailConfirmacion && <p style={{ color: 'red' }}>{errorEmailConfirmacion}</p>}
          <p></p>
          <table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map(item => (
                <tr key={item.id}>
                  <td><img src={item.image} alt=""></img></td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
      <h4>Total: ${getTotalCheckout()}</h4>
          <button className="btn btn-success btn-sm" disabled={!isValidCheckout()} onClick={() => realizarCheckout()} >Realizar Compra</button>
          {idCheckout && <h7 style={{ color: 'green' }}>Su orden ha sido ingresada correctamente con id: {idCheckout}</h7>}
        </div>
      }
    </>
  )
}

export default Checkout

