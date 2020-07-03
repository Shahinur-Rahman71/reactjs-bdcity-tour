import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../citylogo.jpg'

const NavbarFunction = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="bdcity_logo" className="logodesign rounded-circle"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link}  eventKey={1} to="/" className="navmargin1">Home</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/about" className="navmargin2">About</Nav.Link>
                        <Nav.Link as={Link} eventKey={3} to="/tour" className="navmargin2">Tours</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarFunction;