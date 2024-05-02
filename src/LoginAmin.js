import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox, // Not used anymore
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Replace with your actual authentication logic on the server-side
    // (e.g., sending hashed password for comparison)
    const correctEmail = 'admin@gmail.com';
    const correctHashedPassword = 'password'; // Placeholder

    if (email === correctEmail && password === correctHashedPassword) {
      // Login successful (redirect or show success message)
      message.success('Logged in successfully , redirecting ...');
      // You can redirect to another page or perform other actions on success
    } else {
      message.error('Invalid credentials');    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-105">
      <div className="text-center">
        <img src="logo192.png" style={{ width: '185px' }} alt="logo" />
        <h4 className="mt-1 mb-5 pb-1" style={{color:'#E7E3BE'}}>Admin Login</h4>
      </div>

      <MDBInput
        className="mb-4"
        placeholder="Email address"
        id="form1"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MDBInput
        className="mb-4"
        placeholder="Password"
        id="form2"
        type={showPassword ? 'text' : 'password'} // Toggle password visibility
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />


      <div className="d-flex justify-content-between mb-4">
  <div className="d-flex align-items-center" style={{width: '300px'}}> {/* Add some margin-bottom */}
    <span className="text-muted mr-2">View password</span>
    <div style={{position: 'relative', marginLeft: '10px'}}>
      <input
        type="checkbox"
        checked={showPassword}
        onChange={toggleShowPassword}
        style={{width: '15px', height: '15px'}}
      />
    </div>
  </div>
</div>

<div className="d-flex justify-content-between mb-4">
  <Link to="/password-management" className="text-decoration-none" style={{width: '300px', color: '#007bff'}}> {/* Change the link color */}
    Forgot password?
  </Link>
</div>

<Button variant="contained" onClick={handleLogin} 
 style={{
  width: '300px', 
  backgroundColor: '#E7E3BE', 
  color: 'black', 
  border: 'none', 
  borderRadius: '4px', 
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer'}}>
  Login
</Button>
   </MDBContainer>
  );
}

export default AdminLogin;
