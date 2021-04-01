import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">Agro Vast</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/order">Orders</Link></Nav.Link>
          <Nav.Link><Link to="/deal">Deals</Link></Nav.Link>
          <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
          <Button variant="success"><Link to="/login">Login</Link></Button>
        </Nav>
      </Navbar>
        </div>
    );
};

export default Header;