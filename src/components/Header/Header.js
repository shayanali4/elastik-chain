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
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </Button>
                        </Form>
                    </Nav>
                    <Nav className="event-page-options">
                        <Nav.Link eventKey={1} href="#">Explore</Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            Login
                        </Nav.Link>
                    </Nav>
                    <Nav className="landing-page-options">
                        <Nav.Link eventKey={1} href="#">Show Cases</Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            How It Works
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="#">About</Nav.Link>
                        <Nav.Link eventKey={4} href="#">Team</Nav.Link>
                        <Nav.Link eventKey={5} href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
