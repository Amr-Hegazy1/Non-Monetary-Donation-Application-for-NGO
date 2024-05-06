import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { message } from 'antd';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Iconify from './components/iconify';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function PasswordManagement() {
  const [password, setPassword] = useState('');
  const [confirm, setconfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleChange = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    

    if ( password === confirm) {
      message.success('Password changed successfully');
    
    } else {
      message.error('Passwords dont match!');
    }
  };

 
  return (
    <>
     <div className="text-center">
          <img src="logo.png" style={{ width: '185px' }} alt="logo" />
          <h4 className="mt-1 mb-5 pb-1" style={{color: 'darkred', fontSize: '24px', fontWeight: 'bold', textShadow: '2px 2px 4px #aaa'}}>
            Change Password
          </h4>     
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={3}>
      <TextField
            name="New Password"
            label="New Password"
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
                style={{ color: 'darkred', fontSize: '40px' }}
              />        
            </IconButton>
            </InputAdornment>
         ), }}
          />
      
          <TextField
            name="Confirm Password"
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'} // Toggle password visibility
            value={confirm}
            height="50"
            width="20"
            onChange={(e) => setconfirm(e.target.value)}
            InputProps={{
            endAdornment:(
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)} edge="end"
              >
              <Iconify 
                icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} 
                style={{ color: 'darkred', fontSize: '40px' }}
              />        
            </IconButton>
            </InputAdornment>
         ), }}
          />
          
      
          <Button variant="contained" onClick={handleChange} 
          style={{
          width: '300px', 
          color: 'white', 
          backgroundColor: 'darkred',
          border: 'none', 
          borderRadius: '4px', 
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
            Change Password
          </Button>
      </Stack>
      </div>
    </>
  );
}

export default PasswordManagement;
