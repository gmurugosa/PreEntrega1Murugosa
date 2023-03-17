import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className="navbar-inner" as={Link} to="/">ERP Informática</Navbar.Brand>
          <Nav className="navbar-nav navbar-text bg-primary ml-auto text-center">
            <Nav.Link as={Link} to="/category">Todas las Categorias</Nav.Link>
            <Nav.Link as={Link} to="/category/audio">Audio</Nav.Link>
            <Nav.Link as={Link} to="/category/notebook">Notebooks</Nav.Link>
            <Nav.Link as={Link} to="/category/televisor">Televisores</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
  );
};

export default NavBar;
