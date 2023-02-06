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
          <Navbar.Brand className="navbar-inner" href="#home">ERP Informática</Navbar.Brand>
          <Nav className="navbar-nav ml-auto text-center">
            <Nav.Link href="#Audio">Audio</Nav.Link>
            <Nav.Link href="#Gabinetes">Gabinetes</Nav.Link>
            <Nav.Link href="#Notebooks">Notebooks</Nav.Link>
            <Nav.Link href="#Gaming">Gaming</Nav.Link>
            <Nav.Link href="#Conectividad">Conectividad</Nav.Link>
            <Nav.Link href="#Impresión">Impresión</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBar
