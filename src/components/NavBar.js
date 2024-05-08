import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Image} from 'antd';
import logo from './logo.png'; 
function NavBar() { 
    return (
    <Navbar color='#0C4D42' collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Image width={200} src={logo}  />
      <Container>
        <Navbar.Brand href="#home">Donation App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Donate now" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/donateClothes">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="/donateMedicalSupplies">
                Medical Supplies
              </NavDropdown.Item>
              <NavDropdown.Item href="/donateToys">Toys</NavDropdown.Item>
              <NavDropdown.Item href="/donateBooks">Books</NavDropdown.Item>
              <NavDropdown.Item href="/donateStationary">Stationary Items</NavDropdown.Item>
              <NavDropdown.Item href="/donateFood">Food</NavDropdown.Item>              
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;