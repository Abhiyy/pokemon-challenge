import { faCircleInfo, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Container, Navbar, Nav, Form , Button, NavDropdown  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (<>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><FontAwesomeIcon icon={faCircleInfo} /> POKENMON-O-PEDIA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            {/* <Nav.Link href="#action1">All Pokemons</Nav.Link> */}
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            
           
          </Nav>
        <Link to={"/all-pokemons"} className="btn btn-light">All Pokemons</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>); 
}

export default Header;