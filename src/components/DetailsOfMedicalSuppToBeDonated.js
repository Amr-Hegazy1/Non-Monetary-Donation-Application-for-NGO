import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { ReactTags } from 'react-tag-autocomplete'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Image,message } from 'antd';
import med from './med.png'
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

const { Dragger } = Upload;
const defaultTheme = createTheme();

export default function DetailsOfMedicalSuppToBeDonated() {

  const [deviceType, setDeviceType] = React.useState('');
  const [usage, setUsage] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
 
  const [upload, setUpload] = React.useState('');




  const success = () => {
      message
        .loading('Sending details to admin..', 1.5)
        .then(() => {
          message.success('Details sent to Admin', 2.5).then(() => {
            window.location.href = '/';
          }
          );

        })
    };
    

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (! deviceType ) {
      message.error('Please enter device type.');
    } else if(!usage) {
      message.error('Please enter usage.');
    }
    else if(!quantity) {
      message.error('Please enter quantity.');
    }
    else if(!upload) {
      message.error('Please upload picture(s) of the device(s).');
    }
    else {
     success();
    }
  };

  const props = {
    name: 'file',
    multiple: true,
    beforeUpload: file => {
      const reader = new FileReader();

      reader.onload = e => {
        console.log(e.target.result);
      };

      // save the file to public folder
      reader.readAsDataURL(file);

      setUpload(file);


      // Prevent upload
      return false;
    },

    onChange(info) {

      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done' || status === 'error') {
        message.success(`${info.file.name} file uploaded successfully.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    
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
          
          <Image width={250} src={med} />          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={deviceType}
                    onChange = {(event)=>setDeviceType(event.target.value)} 
                    label="Device Type"
                    autoFocus
                    />
            </Grid>
            <Grid item>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={usage}
                    onChange={(event)=>setUsage(event.target.value)}
                    label="Usage"
                    autoFocus
                    />
            </Grid>
            </Grid>
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
                    
                    <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Upload picture(s) of the device(s)</p>
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