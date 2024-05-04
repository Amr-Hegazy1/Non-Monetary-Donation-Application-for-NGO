import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { message } from 'antd';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox, // Not used anymore
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';

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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-105">
      <div className="text-center">
        <img src="logo.png" style={{ width: '185px' }} alt="logo" />
        <h4 className="mt-1 mb-5 pb-1" style={{color:'#E7E3BE'}}> Change Password</h4>
      </div>

      <MDBInput
        className="mb-4"
        placeholder="New Password"
        id="form1"
        type={showPassword ? 'text' : 'password'} // Toggle password visibility
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{width:'300px'}}
      />
      <MDBInput
        className="mb-4"
        placeholder="Comfirm Password"
        id="form2"
        type={showPassword ? 'text' : 'password'} // Toggle password visibility
        value={confirm}
        onChange={(e) => setconfirm(e.target.value)}
        style={{width:'300px'}}

      />

      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex align-items-center"> {/* Align vertically */}
          <span className="text-muted mr-2">View password</span>
          <input
            type="checkbox" // Use checkbox for better UX
            checked={showPassword}
            onChange={toggleShowPassword}
            style={{width: '15px', height: '15px', marginLeft: '10px'}}
          />
        </div>
       
      </div>

      <Button variant="contained" onClick={handleChange} 
      style={{
      width: '300px', 
      backgroundColor: '#E7E3BE', 
      color: 'black', 
      border: 'none', 
      borderRadius: '4px', 
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer'
     }}>
        Change Password
      </Button>
    </MDBContainer>
  );
}

export default PasswordManagement;
