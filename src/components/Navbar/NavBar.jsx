import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import '../Navbar/NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className="navbar-inner" href="/">ERP Informática</Navbar.Brand>
          <Nav className="navbar-nav navbar-text bg-primary ml-auto text-center">
            <Nav.Link href="/category">Todas las Categorias</Nav.Link>
            <Nav.Link href="/category/audio">Audio</Nav.Link>
            <Nav.Link href="/category/notebook">Notebooks</Nav.Link>
            <Nav.Link href="/category/televisor">Televisores</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBar
