import {React, useState} from 'react';
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material';
import {COLORS} from '../values/colors';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import DonorSignUp from './DonorSignUp';
import DonationReceiverSignUp from './DonationReceiverSignUp';
import OrganizationSignUp from './OrganizationSignUp';
import DeliveryPersonSignUp from './DeliveryPersonSignUp';



function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          ZOMA
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Signup() {

    const [userType, setUserType] = useState('Donor');

    return(
    <>
   
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <a href="/"><img src="logo.png" className="signup-app-logo" alt="logo"/></a>
          
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Sign up as:</FormLabel>
                <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <FormControlLabel value="Donor" control={<Radio style={{color: COLORS.primary}}/>} label="Donor" />
                        <FormControlLabel value="Donation Reciver" control={<Radio style={{color: COLORS.primary}}/>} label="Donation Reciver" />
                        <FormControlLabel value="Organization" control={<Radio style={{color: COLORS.primary}}/>} label="Organization" />
                        <FormControlLabel value="Delivery Person" control={<Radio style={{color: COLORS.primary}}/>} label="Delivery Person" />
                        
                    </RadioGroup>
            </FormControl>
            {(userType === 'Donor' ? <DonorSignUp /> : userType === 'Donation Reciver' ? <DonationReceiverSignUp /> : (userType === 'Organization' ? <OrganizationSignUp /> : <DeliveryPersonSignUp />))}
          
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    
    </>
    );

}