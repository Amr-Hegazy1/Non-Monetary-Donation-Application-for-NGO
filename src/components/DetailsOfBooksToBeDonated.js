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
const { Dragger } = Upload;
const defaultTheme = createTheme();

export default function DetailsOfBooksToBeDonated() {

  const [name, setName] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [language, setLanguage] = React.useState('');
  const [edition, setEdition] = React.useState('');
  const [bookSummary, setBookSummary] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [area, setArea] = React.useState('');
  const [governorate, setGovernorate] = React.useState('');





  const success = () => {
      message
        .loading('Sending details to admin..', 1.5)
        .then(() => message.success('Details sent to admin!', 2.5))
    };
    

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!name ) {
      message.error('Please specify book name.');
    } else if(!author){
      message.error('Please specify book author.');
    }
    else if(!language){
      message.error('Please specify book language.');
    }
    else if(!edition){
      message.error('Please specify book edition.');
    }
    else if(!bookSummary){
      message.error('Please specify book summary.');
    }
    else if(!quantity){
      message.error('Please specify book quantity.');
    }
    else if(!area){
      message.error('Please specify book area.');
    }
    else if(!governorate){
      message.error('Please specify book governorate.');
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
          
          <Image width={250} src={book} />          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                    label="Name"
                    autoFocus
                    />
            </Grid>
            <Grid item>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={author}
                    onChange={(event)=>setAuthor(event.target.value)}
                    label="Author"
                    autoFocus
                    />
            </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Language"
              value={language}
              onChange={(event)=>setLanguage(event.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Edition"
              label="Edition"
              value={edition}
              onChange={(event)=>setEdition(event.target.value)}
              autoFocus
            />
               <TextField
              margin="normal"
              required
              fullWidth
              name="Book Summary"
              label="Book Summary"
              value={bookSummary}
              onChange={(event)=>setBookSummary(event.target.value)}
              autoFocus
            />
            <br/>
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
                <FormControl fullWidth required>
                    
                    <Dragger>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Upload picture(s) of the book(s)</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                        banned files.
                    </p>
                    </Dragger>
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