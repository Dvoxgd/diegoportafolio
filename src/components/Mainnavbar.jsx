import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'

function Mainnavbar() {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary w-100 fixed-top z-1' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='#' className='fs-4'>Diego AV.</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto w-100 d-flex justify-content-end'>
                        <Nav.Link href='#header'>Home</Nav.Link>
                        <Nav.Link href='#about'>Sobre mi</Nav.Link>
                        <Nav.Link href='#projects'>Proyectos</Nav.Link>
                        <Nav.Link href='#contact'>Contáctame</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default Mainnavbar;
