import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import './Header.css'

const Header = () => {
    return(
        <div className="mast-head">
            <Navbar expand="lg" style={{ padding: '10px', backgroundColor: 'black' }}>
                <Navbar.Brand className="text-color" as={Link} to="/login">Harini</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" defaultActiveKey={"/home"}>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/login">Mode change</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/user">User</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/more">More</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
