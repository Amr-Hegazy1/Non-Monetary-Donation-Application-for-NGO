import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { message } from 'antd';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Iconify from './components/iconify';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useCookies } from 'react-cookie';



function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    document.body.style.backgroundColor = 'white'; // Set the background color of the document
    if(cookies.user_type === 'admin') {
      window.location.href = '/AdminHome';
    }
    if(cookies.user_type === 'donor' || cookies.user_type === 'donation_receiver'){
      window.location.href = '/';
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Replace with your actual authentication logic on the server-side
    // (e.g., sending hashed password for comparison)
    const correctAdminEmail = 'admin@gmail.com';
    const correctHashedPassword = 'password'; // Placeholder
    const correctDonorEmail = 'donor@gmail.com';
    const correctDonationReceiverEmail = 'donation_reciever@gmail.com';

   
    if (email === correctAdminEmail && password === correctHashedPassword) {
      // Login successful (redirect or show success message)
      message.success('Logged in successfully , redirecting ...');
      setCookie("user_type", "admin");
      // You can redirect to another page or perform other actions on success
    }
    else if (email === correctDonorEmail && password === correctHashedPassword) {
      // Login successful (redirect or show success message)
      message.success('Logged in successfully , redirecting ...');
      setCookie("user_type", "donor");
      // You can redirect to another page or perform other actions on success
    }
    else if (email === correctDonationReceiverEmail && password === correctHashedPassword) {
      // Login successful (redirect or show success message)
      message.success('Logged in successfully , redirecting ...');
      setCookie("user_type", "donation_receiver");
      // You can redirect to another page or perform other actions on success
    } else {
      message.error('Invalid credentials');    
    }
  }

  return (
  
   < >
      <div className="text-center">
          <img src="logo.png" style={{ width: '185px' }} alt="logo" />
          <h4 className="mt-1 mb-5 pb-1" style={{color: '#602b37', fontSize: '24px', fontWeight: 'bold', textShadow: '2px 2px 4px #aaa'}}>
              Admin Login
          </h4>     
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={3}>
          <TextField 
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      
          <TextField
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'} // Toggle password visibility
            value={password}
            height="50"
            width="20"
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
            endAdornment:(
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)} edge="end"
              >
              <Iconify 
                icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} 
                style={{ color: '#602b37', fontSize: '40px' }}
              />        
            </IconButton>
            </InputAdornment>
                         ), 
                        }}
          />
      
      
      
          <div className="d-flex justify-content-between mb-4">
            <a href="/Verify" className="text-decoration-none" style={{width: '300px', color: '#007bff'}}> {/* Change the link color */}
              Forgot password?
            </a>
          </div>
     
          <Button variant="contained" href ="/AdminHome" onClick={handleLogin} 
          style={{
            width: '300px', 
            backgroundColor: '#602b37', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer'
            }}>
            Login
          </Button>
      </Stack>
      </div>
    </>


  );
}

export default AdminLogin;
