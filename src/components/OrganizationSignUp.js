import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { message, Upload, Divider } from 'antd';
import "../styles/OrganizationSignUp.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { InboxOutlined } from '@ant-design/icons';
import { useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import AddressForm from './AddressForm';
import { COLORS } from '../values/colors';
import { set } from 'react-cool-form';


const { Dragger } = Upload;

const saveFile = async (blob, filename) => {


};



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

export default function OrganizationSignUp() {

  const [position, setPosition] = React.useState([29.98693069424653, 31.44078789655661]);
  const [organizationType, setOrganizationType] = React.useState('');
  const [isFileUploaded, setIsFileUploaded] = React.useState(false);



  const [errorStates, setErrorStates] = React.useState({
    "firstName": false,
    "lastName": false,
    "gender": false,
    "email": false,
    "password": false,
    "confirmPassword": false,
    "phone": false,
    "organizationName": false,
    "organizationType": false,
    "organizationLocation": false,
    "organizationCertificates": false

  });






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

      saveFile(file, file.name);

      setIsFileUploaded(true);


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
    // customRequest({ file, onSuccess }) {
    //   // console.log(file);
    //   setTimeout(() => {
    //     onSuccess("ok");
    //   }, 0);
    // },
  };





  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // check each field and validate

    for (let [name, value] of data) {
      console.log(name, value);
      if (value === '') {
        setErrorStates({ ...errorStates, [name]: true });
        message.error(name + ' is required');
        return;
      }
      if (name === 'email') {
        if (!value.includes('@')) {
          setErrorStates({ ...errorStates, [name]: true })
          message.error('Invalid email');
          return;
        }
      }

      if (name === 'phone') {
        if (value.length < 10) {
          setErrorStates({ ...errorStates, [name]: true })
          message.error('Invalid phone number');
          return;
        }
      }

      setErrorStates({ ...errorStates, [name]: false });
    }

    

    // check if gender is in data
    if (!data.has('gender')) {
      setErrorStates({ ...errorStates, ["gender"]: true });
      message.error("Gender is required");
      return;
    }

    // check if confirm password is equal to password
    if (data.get('password') !== data.get('confirmPassword')) {
      
      message.error("Passwords do not match");
      return;
    }

    if (!isFileUploaded) {
      message.error("Organization Certificates are required");
      return;
    }

    message.success('Form submitted');
    
    window.location.href = '/login';

  };

  React.useEffect(() => { window.scrollTo(0, 0);}, [errorStates]);

  const handleInvalid = (event) => {
    event.preventDefault();
    handleSubmit(event);

    // scroll to first error
    event.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  

  const LocationFinderDummy = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  return (
    
      <Container component="main"  maxWidth="xs">
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
            <Grid container spacing={2}>
              <Grid item xs>
                <FormControl fullWidth required >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    error={errorStates.firstName}
                    focused={errorStates.firstName}
                    
                    
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl fullWidth required>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    error={errorStates.lastName}
                    focused={errorStates.lastName}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <FormControl error={errorStates.gender} focused={errorStates.gender}>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                
              >
                <FormControlLabel value="female" control={<Radio style={{ color: COLORS.primary }} />} label="Female" />
                <FormControlLabel value="male" control={<Radio style={{ color: COLORS.primary }} />} label="Male" />
              </RadioGroup>
            </FormControl>
            <FormControl fullWidth required>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errorStates.email}
                focused={errorStates.email}
              />
            </FormControl>
            <FormControl fullWidth required>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={errorStates.password}
                focused={errorStates.password}
              />
            </FormControl>
            <FormControl fullWidth required>
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                error={errorStates.confirmPassword}
                focused={errorStates.confirmPassword}
              />
            </FormControl>
            <FormControl fullWidth required error={errorStates.phone} focused={errorStates.phone}>
              <PhoneInput
                defaultCountry="eg"
                style={{ width: '100%' }}
                required
                id="phone"
                name="phone"
              
              />
            </FormControl>
            <FormControl fullWidth required>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Organization Name"
                id="organizationName"
                name="organizationName"
                error={errorStates.organizationName}
                focused={errorStates.organizationName}
              />
            </FormControl>

            <FormControl fullWidth required error={errorStates.organizationType} focused={errorStates.organizationType}>
              <InputLabel id="demo-multiple-name-label">Organization Type</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="organizationType"
                name="organizationType"
                onChange={(e) => setOrganizationType(e.target.value)}
                value={organizationType}
                input={<OutlinedInput label="Organization Type" />}
              >
                <MenuItem value="School">School</MenuItem>
                <MenuItem value="Hospital">Hospital</MenuItem>
                <MenuItem value="Church">Church</MenuItem>
                <MenuItem value="Mosque">Mosque</MenuItem>
                <MenuItem value="Orphanage">Orphanage</MenuItem>
                <MenuItem value="Non-Profit">Non-Profit</MenuItem>

              </Select>
            </FormControl>
            <br />
            <Divider>Organization Location</Divider>
            <AddressForm />
            <FormControl fullWidth required>
              <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '50vh', width: '100wh' }} >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationFinderDummy />
                <Marker position={position}>
                  <Popup style={{ textAlign: 'center' }}>
                    {position[0].toPrecision(4)}, {position[1].toPrecision(4)}
                  </Popup>
                </Marker>

              </MapContainer>
            </FormControl>
            <br />
            <Divider>Organization Certificates</Divider>
            <FormControl fullWidth required error={errorStates.organizationCertificates} focused={errorStates.organizationCertificates}>

              <Dragger {...props} id='organizationCertificates' name='organizationCertificates'>
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className='signup-btn'
            >
              Sign Up
            </Button>
          </Box>
        </Box>

      </Container>
    
  );
}