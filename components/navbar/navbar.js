import React from 'react';
import './navbar.css'
import { Navbar} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';


const NavBar = () => {
  return (
    <Navbar className='gradient_bg px-5' sticky='top' bg='dark' expand='lg' >
      <LinkContainer to="/">
        <Navbar.Brand>Food Sync</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='container-fluid' variant='underline'>
          <LinkContainer to='link-1'>
            <Nav.Link className='mr-lg-2'>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='link-2'>
            <Nav.Link className='mr-lg-1'>Recipes</Nav.Link>
          </LinkContainer>
          <LinkContainer to='link-3' className='ms-auto'>
            <Nav.Link >Login/Logout</Nav.Link>
          </LinkContainer>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;