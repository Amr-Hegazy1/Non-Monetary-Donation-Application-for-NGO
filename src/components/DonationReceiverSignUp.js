import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { ReactTags } from 'react-tag-autocomplete'
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
import TagsSelector from './TagsSelector';
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

export default function DonationReceiverSignUp() {

  const subjects = ["Math", "Science", "English", "History", "Art", "Music", "Physical Education", "Computer Science", "Biology", "Chemistry", "Physics", "Geography", "Economics", "Government", "Psychology", "Sociology", "Anthropology", "Philosophy", "Theology", "Engineering", "Business", "Marketing", "Accounting", "Finance", "Management", "Human Resources", "Operations", "Supply Chain", "Logistics", "Information Technology", "Data Science", "Machine Learning", "Artificial Intelligence", "Cybersecurity", "Networks", "Databases", "Web Development", "Mobile Development", "Game Development", "Software Development", "Hardware Development", "Robotics", "Automation", "Internet of Things", "Cloud Computing", "Big Data", "Blockchain", "Cryptocurrency", "Digital Marketing", "Social Media", "Search Engine Optimization", "Content Marketing", "Email Marketing", "Affiliate Marketing", "Influencer Marketing", "Public Relations", "Advertising", "Sales", "Customer Service", "Customer Success", "Customer Experience", "User Experience", "User Interface", "Product Management", "Project Management", "Quality Assurance", "Quality Control", "Compliance", "Regulatory Affairs", "Legal", "Risk Management", "Audit", "Tax", "Insurance", "Real Estate", "Construction", "Architecture", "Interior Design", "Urban Planning", "Landscape Architecture", "Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Chemical Engineering", "Aerospace Engineering", "Biomedical Engineering", "Environmental Engineering", "Materials Science", "Nanotechnology", "Physics", "Chemistry", "Biology", "Geology", "Meteorology", "Oceanography", "Astronomy", "Astrophysics", "Cosmology", "Theoretical Physics", "Particle Physics", "Quantum Physics", "Nuclear Physics", "Atomic Physics", "Molecular Physics", "Solid State Physics", "Fluid Dynamics", "Thermodynamics", "Electromagnetism", "Optics", "Acoustics", "Quantum Mechanics", "General Relativity", "Special Relativity", "String Theory", "M-Theory", "Loop Quantum Gravity", "Quantum Field Theory", "Quantum Chromodynamics", "Quantum Electrodynamics", "Quantum Gravity"];



  const [position, setPosition] = React.useState([29.98693069424653, 31.44078789655661]);
  const [volenteerRole, setVolenteerRole] = React.useState('Regular Donor');
  const [errorStates, setErrorStates] = React.useState({
    firstName: false,
    lastName: false,
    gender: false,
    email: false,
    password: false,
    phone: false,
    specialization: false,
    availableCases: false,
    subjects: false,
    certificates: false,
    address: false,
    city: false,
    country: false,
    postalCode: false,
    street: false,
    building: false,

  })

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





    message.success('Form submitted');

    window.location.href = '/login';


  };

  React.useEffect(() => { window.scrollTo(0, 0); }, [errorStates]);

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

    <Container component="main" maxWidth="sm">
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="firstName"
                label="First Name"
                error={errorStates.firstName}
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                required
                fullWidth

                label="Last Name"
                error={errorStates.lastName}
              />
            </Grid>
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            error={errorStates.email}
          />
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
          />
          <PhoneInput
            defaultCountry="eg"
            style={{ width: '100%' }}
            required
          />
          <br />         
            <FormControl fullWidth required>
              <InputLabel id="demo-multiple-name-label">Location</InputLabel>
              <MapContainer center={position} zoom={20} scrollWheelZoom={false} style={{ height: '50vh', width: '100wh' }} >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationFinderDummy />
                <Marker position={position}>
                  <Popup style={{ textAlign: 'center' }}>
                    {position[0]}, {position[1]}
                  </Popup>
                </Marker>

                    </MapContainer> 
                </FormControl>
             
                
                
                <br/>
           
                
                
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
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    
  );
}