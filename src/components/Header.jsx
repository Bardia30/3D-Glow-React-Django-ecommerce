import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container className='px-4 py-2' fluid>
            <LinkContainer to='/'>
                <Navbar.Brand >3D Glow</Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <LinkContainer to='/cart'>
                    <Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                    <Nav.Link><i className='fas fa-user'></i> Login</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  )
}

export default Header