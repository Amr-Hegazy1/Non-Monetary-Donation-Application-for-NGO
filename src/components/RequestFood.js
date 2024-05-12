import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { ReactTags } from 'react-tag-autocomplete'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Image,message } from 'antd';
import food from './food.png'
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
import RequestFoodImg from './RequestFoodImg.png'
import NavBar from './NavBar';


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

 function RequestFood() {

    const [itemName, setItemName] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [area, setArea] = React.useState('');
    const [governorate, setGovernorate] = React.useState('');
    





    const success = () => {
        message
          .loading('Sending request to admin..', 1.5)
          .then(() => message.success('Request sent to Admin, wait for approval :)', 2.5))
      };
      
  
    const handleSubmit = (event) => {
      event.preventDefault();

      
      if (!itemName) {
        message.error('Please specify item name.');
      } else if(!quantity) {
        message.error('Please specify quantity.');
      }
      else if(!area) {
        message.error('Please specify area.');
      }
      else if(!governorate) {
        message.error('Please specify governorate.');
      }
      else {
       success();
      }

    };



  return (
    <>
    <NavBar/>
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
                width: 550,
                height: 250,
                backgroundImage: `url(${RequestFoodImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </Box>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid item xs>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    
                    label="Item Name"
                    autoFocus
                    value={itemName}
                    onChange={(event) =>setItemName(event.target.value)}
                    />
            <Grid item>
            <br/>
                <FormControl fullWidth required>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Quantity(in KGs for fruit & vegetable)"
                
                    type='number'
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    
                    />
                </FormControl>
                <TextField
              margin="normal"
              required
              fullWidth
              name="Area"
              label="Area"
              value={area}
              onChange={(event)=>setArea(event.target.value)}
            />

        <TextField
              margin="normal"
              required
              fullWidth
              name="Governorate"
              label="Governorate"
              value={governorate}
              onChange={(event)=>setGovernorate(event.target.value)}
            />    
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
            </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
}

export default RequestFood;