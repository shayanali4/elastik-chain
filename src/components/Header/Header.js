import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './styles.css';

function Header() {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand className="name" href="#home">
                    <img src="/images/crystalIco.png" alt="" />
                    Elastik-Chain
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </Button>
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Explore</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
