import React from 'react'
import CartWidget from './CartWidget'
import '../styles/NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ERP Informática</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Promociones">Promociones</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBar
