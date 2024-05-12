import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Image} from 'antd';
import logo from './logo.png'; 
import { Button, Flex } from 'antd';
import '../styles/NavBar.css';
import { useCookies } from 'react-cookie';
import Avatar from '@mui/material/Avatar';
import'../styles/AvatarBorder.css';
import {useState} from 'react';
function NavBar() { 
    const [cookies, setCookie] = useCookies();
    const handleAvatarClick = () => {
      // You can perform any actions you want here
      // For example, you can navigate to a different page
      if(cookies.user_type === 'donor') {
        window.location.href ='/DonorProfile';
      }
      else if(cookies.user_type === 'donation_receiver') {
        window.location.href ='/OrganizationProfile';
      }
      else if(cookies.user_type === 'admin') {
        window.location.href ='/AdminProfile';
      }
      else if(cookies.user_type === 'delivery_person'){
        window.location.href ='/DeliveryPersonProfile';
      }
    };
    
    return (
    <Navbar color='#0C4D42' collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Image width={200} src={logo}  preview="false"/>
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Contact Us</Nav.Link>
            <Nav.Link href="/">About Us</Nav.Link>
            {(cookies['user_type'] === "donor") ? <><Nav.Link href="/ViewDonationRequests">View Donation Requests</Nav.Link>
            <NavDropdown title="Donate now" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/donateClothes">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="/donateMedicalSupplies">
                Medical Supplies
              </NavDropdown.Item>
              <NavDropdown.Item href="/donateToys">Toys</NavDropdown.Item>
              <NavDropdown.Item href="/donateBooks">Books</NavDropdown.Item>
              <NavDropdown.Item href="/donateStationary">Stationary Items</NavDropdown.Item>
              <NavDropdown.Item href="/donateFood">Food</NavDropdown.Item>              
            </NavDropdown></> : null}

            {(cookies['user_type'] === "donation_receiver") ? <NavDropdown title="Create Donation Request" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/RequestClothes">Request Clothes</NavDropdown.Item>
              <NavDropdown.Item href="/RequestMedicalSupplies">
                Request Medical Supplies
              </NavDropdown.Item>
              <NavDropdown.Item href="/RequestToys">Request Toys</NavDropdown.Item>
              <NavDropdown.Item href="/RequestBooks">Request Books</NavDropdown.Item>
              <NavDropdown.Item href="/RequestStationary">Request Stationary Items</NavDropdown.Item>
              <NavDropdown.Item href="/RequestFood">Request Food</NavDropdown.Item>
              <NavDropdown.Item href="/RequestBloodDonations">Request Blood Donations</NavDropdown.Item>              
              <NavDropdown.Item href="/RequestTeaching">Request Teacher</NavDropdown.Item> 
              <NavDropdown.Item href="/RequestMedicalCases">Request Doctor</NavDropdown.Item>        

            </NavDropdown> : null}

            


          </Nav>
          <Nav>
            {
              (cookies.user_type === 'donor' || cookies.user_type === 'donation_receiver') ? (<div
                onClick={() => handleAvatarClick()}
                style={{ border: '1px solid transparent', borderRadius: '50%', padding: '2px', transition: 'border-color 0.3s ease-in-out' , cursor: 'pointer' }}
                onMouseEnter={(e) => { e.target.style.borderColor = 'blue'; }}
                onMouseLeave={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.borderWidth = '1px'; }} 
              >
              
              <Avatar src={'https://api.dicebear.com/7.x/miniavs/svg?seed=29'} />
            </div>) : 
              (<Flex gap="small">
                <Button className='navbar-signup-btn' onClick={() => window.location.href = '/signup'}>Sign Up</Button>

                <Button className="navbar-login-btn" onClick={() => window.location.href = '/login'}>Login</Button>
              </Flex>)
          }
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;