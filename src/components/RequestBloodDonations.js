import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { ReactTags } from 'react-tag-autocomplete'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Image,message } from 'antd';
import book from './book.png'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import { Upload, Divider } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'animate.css';
import RequestBlood from './RequestBlood.png'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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


  const defaultTheme = createTheme();
 export default function RequestBloodDonations() {
    const [bloodType, setBloodType] = React.useState('');
    const [area, setArea] = React.useState('');
    const [governorate, setGovernorate] = React.useState('');
    const [hospital, setHospital] = React.useState('');
    const [urgency, setUrgency] = React.useState('');

    const success = () => {
        message
          .loading('Sending request to admin..', 1.5)
          .then(() => message.success('Request sent to Admin, wait for approval :)', 2.5))
      };
      
      const handleUrgencyChange = (event) => {
        const newUrgency = event.target.value;
        
        if (newUrgency >= 1 && newUrgency <= 5) {
            setUrgency(newUrgency);
        } else if (newUrgency === '') {
            setUrgency('');
        } else {
            message.error('Urgency must be between 1 and 5');
        }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!bloodType || !area || !governorate || !hospital || !urgency ) {
        message.error('Please fill in all fields.');
      } else {
       success();
      }
    };

 

    return(
                 
        
        
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 2,
              width: '100%', 
            }}
          >
            <Box
              sx={{
                width: 400,
                height: 300,
                backgroundImage: `url(${RequestBlood})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </Box>

    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    
                    label="Area"
                    autoFocus
                    value={area}
                    onChange={(event)=>setArea(event.target.value)}
                    />
            </Grid>
            <Grid item>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    
                    label="Hospital"
                    autoFocus
                    value={hospital}
                    onChange={(event)=>setHospital(event.target.value)}
                    />
            </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Governorate"
              autoFocus
              value={governorate}
              onChange={(event)=>setGovernorate(event.target.value)}
              
            />
            <FormControl fullWidth required>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Urgency, 1 being lowest and 5 highest"
              autoFocus
              type='number'
              value={urgency}
              onChange={handleUrgencyChange}  />
             </FormControl>

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Blood Type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={bloodType}
                onChange={(event) => setBloodType(event.target.value)}
              >
                <FormControlLabel value="AB positive" control={<Radio />} label="AB positive" />
                <FormControlLabel value="AB negative" control={<Radio />} label="AB negative" />
                <FormControlLabel value="B positive" control={<Radio />} label="B positive" />
                <FormControlLabel value="B negative" control={<Radio />} label="B negative" />
                <FormControlLabel value="A positive" control={<Radio />} label="A positive" />
                <FormControlLabel value="A negative" control={<Radio />} label="A negative" />
                <FormControlLabel value="O positive" control={<Radio />} label="O positive" />
                <FormControlLabel value="O negative" control={<Radio />} label="O negative" />

              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="btn"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#620b37', borderColor: '#620b37' }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    
  );
}