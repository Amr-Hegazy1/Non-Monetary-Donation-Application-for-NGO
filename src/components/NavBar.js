import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Flex } from 'antd';
import {COLORS} from '../values/colors';
import "../styles/NavBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img src="logo.png" className="App-logo" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <a href="/" className="navbar-link">About Us</a>
            <a href="/" className="navbar-link">Services</a>
            <a href="/" className="navbar-link">Contact Us</a>
            
          </Nav>
          <Nav>
            <Flex gap="small">
              <Button className='signup-btn'>Signup</Button>
              
              <Button className="login-btn">Login</Button>
            </Flex>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;