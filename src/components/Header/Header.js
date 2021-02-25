import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './styles.css';

function Header() {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light" className='red-nav'>
                <Navbar.Brand className="name" href="#home">
                    <img src="/images/logo/elastik-chain.png" alt="" />
                    Elastik-Chain
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <Form inline className="search-area">
                            <input type="text" placeholder="Explore amazing ideas" />
                            <button >
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </Form>
                    </Nav>
                    <Nav className="event-page-options">
                        <Nav.Link eventKey={1} href="#">Explore</Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            Login
                        </Nav.Link>
                    </Nav>
                    <Nav className="landing-page-options">
                        <Nav.Link eventKey={1} href="#showcases">Show Cases</Nav.Link>
                        <Nav.Link eventKey={2} href="#work">
                            How It Works
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="#about">About</Nav.Link>
                        <Nav.Link eventKey={4} href="#team">Team</Nav.Link>
                        <Nav.Link eventKey={5} href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
