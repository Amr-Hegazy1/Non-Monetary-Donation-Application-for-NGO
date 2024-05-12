import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { ReactTags } from 'react-tag-autocomplete'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Image,message } from 'antd';
import toy from './toy.png'
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
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'animate.css';
import { useState } from 'react'; 


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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function DetailsOfToysToBeDonated() {
  const [type, setType] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [color, setColor] = React.useState('');
  const [age, setAge] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [area, setArea] = React.useState('');
  const [governorate, setGovernorate] = React.useState('');





  const success = () => {
      message
        .loading('Sending details to admin..', 1.5)
        .then(() => {
          message.success('Details sent to Admin!', 2.5).then(() => {
            window.location.href = '/';
          }
          );
        })
    };
    

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!type){
      message.error('Please enter type.');
    }
    if (!category ) {
      message.error('Please enter category.');
    } else if(  !gender ){
      message.error('Please specify gender.');
    }
    else if( !color ){
      message.error('Please specify color.');
    }
    else if( !age ){
      message.error('Please specify age.');
    }
    else if( !quantity ){
      message.error('Please specify quantity.');
    }
    else {
     success();
    }

  };



  return (
    
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
          
          <Image width={380} src={toy} style={{ pointerEvents: 'none' }}/>          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid item xs>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={type}
                    onChange={(event) =>setType(event.target.value)}
                    label="Type"
                    autoFocus
                    />
            <Grid item>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={category}
                    onChange={(event) =>setCategory(event.target.value)}
                    label="Category"
                    autoFocus
                    />
            </Grid>
            </Grid>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
           
            <TextField
              margin="normal"
              required
              fullWidth
              name="Color"
              label="Color"
              value={color}
              onChange={(event)=>setColor(event.target.value)}
              autoFocus
            />
            <br/>
                <FormControl fullWidth required>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Age"
                    autoFocus
                    value={age}
                    onChange={(event)=>setAge(event.target.value)}
                    type='number'
                    
                    />
                </FormControl>
                <FormControl fullWidth required>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Quantity"
                    autoFocus
                    type='number'
                    value={quantity}
                    onChange={(event)=>setQuantity(event.target.value)}
                    />
                </FormControl>
                
                
                <br/>
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