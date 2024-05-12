import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { message } from 'antd';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Iconify from './components/iconify';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';




function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const [cookies, setCookie] = useCookies(); // State for cookies

  useEffect(() => {
    document.body.style.backgroundColor = 'white'; // Set the background color of the document
    if(cookies.user_type === 'admin') {
      window.location.href = '/AdminHome';
    }
    if(cookies.user_type === 'donor' || cookies.user_type === 'donation_receiver'){
      window.location.href = '/';
    }
    if(cookies.user_type === 'delevery_person'){
      window.location.href = '/delieveyPersonDashboard';
    }
    
  }, []);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(email);
    // Replace with your actual authentication logic on the server-side
    // (e.g., sending hashed password for comparison)
    const correctAdminEmail = 'admin@gmail.com';
    const correctHashedPassword = 'password'; // Placeholder

    const correctDonorEmail = 'donor@gmail.com';

    const correctDonorDoctorEmail = 'doctor@gmail.com';

    const correctDonorTeacherEmail = 'teacher@gmail.com';

    const correctDonationReceiverEmail = 'donation_reciever@gmail.com';

    const correctDeliveryPersonEmail = 'delivery_person@gmail.com';

    const correctOrganizationEmail = 'organization@gmail.com';


    if (email === correctAdminEmail && password === correctHashedPassword) {
      // Login successful (redirect or show success message)
      window.location.href = '/AdminHome';
      message.success('Logged in successfully , redirecting ...');
      setCookie("user_type", "admin");

      // You can redirect to another page or perform other actions on success
    }
    else if (email === correctDonorEmail && password === correctHashedPassword) {
      // Login successful (redirect or show success message)
      window.location.href = '/';
      message.success('Logged in successfully , redirecting ...');
      setCookie("user_type", "donor");
      // You can redirect to another page or perform other actions on success
    }
    else if (email === correctDonorDoctorEmail && password === correctHashedPassword) {
      // Login successful (redirect or show success message)
      window.location.href = '/';
      message.success('Logged in successfully , redirecting ...');
      setCookie("user_type", "donor");
      setCookie("donor_type", "doctor");
      // You can redirect to another page or perform other actions on success
    }
    else if (email === correctDonorTeacherEmail && password === correctHashedPassword) {
      // Login successful (redirect or show success message)
      window.location.href = '/';
      message.success('Logged in successfully , redirecting ...');
      setCookie("user_type", "donor");
      setCookie("donor_type", "teacher");
      // You can redirect to another page or perform other actions on success
    }
    else if (email === correctDonationReceiverEmail && password === correctHashedPassword) {
      // Login successful (redirect or show success message)
      window.location.href = '/';
      message.success('Logged in successfully , redirecting ...');
      setCookie("user_type", "donation_receiver");
      // You can redirect to another page or perform other actions on success
    } else if (email === correctDeliveryPersonEmail && password === correctHashedPassword) {
      // Login successful (redirect or show success message)
      window.location.href = '/delieveyPersonDashboard';
      message.success('Logged in successfully , redirecting ...');
      setCookie("user_type", "delivery_person");
      // You can redirect to another page or perform other actions on success
    } else if (email === correctOrganizationEmail && password === correctHashedPassword) {
      // Login successful (redirect or show success message)
      window.location.href = '/';
      message.success('Logged in successfully , redirecting ...');
      setCookie("user_type", "organization");
      // You can redirect to another page or perform other actions on success
    }
    else {
      message.error('Invalid credentials');    
    }
  };

  

  return (
  
   < >
      <div className="text-center">
          <img src="logo.png" style={{ width: '185px' }} alt="logo" />
          <h4 className="mt-1 mb-5 pb-1" style={{color: '#602b37', fontSize: '24px', fontWeight: 'bold', textShadow: '2px 2px 4px #aaa'}}>
            Login
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
            onKeyDown={(e) => { if (e.key === 'Enter') handleLogin(e); }} // Handle Enter key press
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
     
          <Button variant="contained" onClick={handleLogin}
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

export default Login;
