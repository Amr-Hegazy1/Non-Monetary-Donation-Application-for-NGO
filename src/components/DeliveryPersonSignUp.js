import * as React from 'react';
import { useState } from 'react'; // Added useState import
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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
import FormLabel from '@mui/material/FormLabel';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { message, Upload, Divider } from 'antd';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { InboxOutlined } from '@ant-design/icons';
import { useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'animate.css';
import AddressForm from './AddressForm';
import { COLORS } from '../values/colors';
const { Dragger } = Upload;

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});




function DeliveryPersonSignUp() {

  const [position, setPosition] = React.useState([29.98693069424653, 31.44078789655661]);
  const [isFileUploaded, setIsFileUploaded] = React.useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (!error) {
      console.log('Submitted');
      message.success('Submitted');
      // Add your submission logic here
    } else {
      console.log('Not submitted');
      message.error('Please complete your submission');
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
      reader.readAsDataURL(file);
      setIsFileUploaded(true);
      return false; // Prevent upload
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

  function LocationFinderDummy() {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  }
  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="logo.png" className="signup-app-logo" alt="logo" />
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Last Name"
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
                <FormControlLabel value="female" control={<Radio style={{ color: COLORS.primary }} />} label="Female" />
                <FormControlLabel value="male" control={<Radio style={{ color: COLORS.primary }} />} label="Male" />
              </RadioGroup>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <PhoneInput
              defaultCountry="eg"
              style={{ width: '100%' }}
              required
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Vehicle Info"
              label="Vehicle Info"
            />
            <br />
            <br />
            <Divider>Location</Divider>
            <FormControl fullWidth required>
              <InputLabel id="demo-multiple-name-label">Location</InputLabel>
              <MapContainer center={position} zoom={20} scrollWheelZoom={false} style={{ height: '50vh', width: '100wh' }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationFinderDummy />
                <Marker position={position} />
              </MapContainer>
            </FormControl>
            <br />
            <Divider>Driver's License</Divider>
            <FormControl fullWidth required>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                  banned files.
                </p>
              </Dragger>
            </FormControl>
            <Divider>Address Details</Divider>
            <AddressForm />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="signup-btn"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default DeliveryPersonSignUp;
