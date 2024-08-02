import React from 'react';
import './navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logoo from './logo.jpg'
import { useLocation } from 'react-router';



const NavBar = () => {
  const location = useLocation()

  if(location.pathname === '/login') {
    return null
  }
  
  return (
    <Navbar expand="xl" className=" gradient_bg navi">
      <Container>
      <Navbar.Brand href="#home" className='font-bold'>
      <img
              alt=""
              src={logoo}
              width="30"
              height="30"
              className="d-inline-block align-top rounded"
      />{' '}
       Groceries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto underline">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Recipes</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;