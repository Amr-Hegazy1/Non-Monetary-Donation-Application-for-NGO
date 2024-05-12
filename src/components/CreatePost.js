import React , {useState} from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Select, Space } from 'antd';
// import {COLORS} from '../values/colors';
// import { Button, message} from 'antd';
import Avatar from '@mui/material/Avatar';
import { ReactTags } from 'react-tag-autocomplete'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Image,message } from 'antd';
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



function CreateRequestPost() {

  

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
      messageApi
        .open({
          type: 'loading',
          content: 'Sending request to admin..',
          duration: 1.5,
        })
        .then(() => message.success('Request sent to Admin, wait for approval :)', 2.5))
    };
  
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [requestText, setRequestText] = useState('');
  
    const handleChange = (value) => {
      console.log(`selected ${value}`);
      setSelectedCategory(value);
    };
  
    const handleTextChange = (event) => {
      setRequestText(event.target.value);
    };
  
    const handleSubmit = () => {
      if (!selectedCategory) {
        message.error('Please choose a category');
      } else if (requestText.trim() === '') {
        message.error('Please enter text');
      } else {
        success();
      }
    };
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };

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


  return (
    
    <Typography component="h1" variant="h5" style={{position:'absolute', top:60, left:620}}>
    Create Request Post
  </Typography>
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
        
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid item xs>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  
                  label="Type"
                  autoFocus
                  />
          <Grid item>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  
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

export default CreateRequestPost;


