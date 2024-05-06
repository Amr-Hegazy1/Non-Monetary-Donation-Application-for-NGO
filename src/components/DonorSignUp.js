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
import { Upload, Divider } from 'antd';
import "../styles/OrganizationSignUp.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { InboxOutlined } from '@ant-design/icons';
import { useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Country, State, City }  from 'country-state-city';
import TagsSelector from './TagsSelector';
import 'animate.css';
import { DisabledByDefault } from '@mui/icons-material';
import AddressForm from './AddressForm';

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

export default function DonorSignUp() {

  const subjects = ["Math", "Science", "English", "History", "Art", "Music", "Physical Education", "Computer Science", "Biology", "Chemistry", "Physics", "Geography", "Economics", "Government", "Psychology", "Sociology", "Anthropology", "Philosophy", "Theology", "Engineering", "Business", "Marketing", "Accounting", "Finance", "Management", "Human Resources", "Operations", "Supply Chain", "Logistics", "Information Technology", "Data Science", "Machine Learning", "Artificial Intelligence", "Cybersecurity", "Networks", "Databases", "Web Development", "Mobile Development", "Game Development", "Software Development", "Hardware Development", "Robotics", "Automation", "Internet of Things", "Cloud Computing", "Big Data", "Blockchain", "Cryptocurrency", "Digital Marketing", "Social Media", "Search Engine Optimization", "Content Marketing", "Email Marketing", "Affiliate Marketing", "Influencer Marketing", "Public Relations", "Advertising", "Sales", "Customer Service", "Customer Success", "Customer Experience", "User Experience", "User Interface", "Product Management", "Project Management", "Quality Assurance", "Quality Control", "Compliance", "Regulatory Affairs", "Legal", "Risk Management", "Audit", "Tax", "Insurance", "Real Estate", "Construction", "Architecture", "Interior Design", "Urban Planning", "Landscape Architecture", "Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Chemical Engineering", "Aerospace Engineering", "Biomedical Engineering", "Environmental Engineering", "Materials Science", "Nanotechnology", "Physics", "Chemistry", "Biology", "Geology", "Meteorology", "Oceanography", "Astronomy", "Astrophysics", "Cosmology", "Theoretical Physics", "Particle Physics", "Quantum Physics", "Nuclear Physics", "Atomic Physics", "Molecular Physics", "Solid State Physics", "Fluid Dynamics", "Thermodynamics", "Electromagnetism", "Optics", "Acoustics", "Quantum Mechanics", "General Relativity", "Special Relativity", "String Theory", "M-Theory", "Loop Quantum Gravity", "Quantum Field Theory", "Quantum Chromodynamics", "Quantum Electrodynamics", "Quantum Gravity"];
  
  

  const [position, setPosition] = React.useState([51.505, -0.09]);
  const [volenteerRole, setVolenteerRole] = React.useState('Regular Donor');
  




  const handleSubmit = (event) => {
    event.preventDefault();
    
    
  };

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
    <ThemeProvider theme={defaultTheme}>
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
          
          <img src="logo.png" className="App-logo" alt="logo" />
          
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
              id="password"
              autoComplete="current-password"
            />
            <PhoneInput
                defaultCountry="eg"
                style={{width: '100%'}}
                required
            />
            <br/>
            
            <FormControl fullWidth required>
                <InputLabel id="demo-multiple-name-label">Volenteer Role</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={volenteerRole}
                input={<OutlinedInput label="Volenteer Role" />}
                onChange={(e) => setVolenteerRole(e.target.value)}
                >
                    <MenuItem value="Regular Donor">Regular Donor</MenuItem>
                    <MenuItem value="Doctor">Doctor</MenuItem>
                    <MenuItem value="Teacher">Teacher</MenuItem>
                    
                </Select>
            </FormControl>

            
            


            <br/>
            <div className="animate__animated animate__fadeIn" hidden={volenteerRole !== 'Doctor'}>
                <Divider>Doctor Details</Divider>
                <FormControl fullWidth required>
                    <InputLabel id="demo-multiple-name-label">Clinic Location</InputLabel>
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '50vh', width: '100wh' }} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationFinderDummy />
                    <Marker position={position}/>

                    </MapContainer> 
                </FormControl>
                <FormControl fullWidth required>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Specialization"
                    autoFocus
                    />
                </FormControl>
                <FormControl fullWidth required>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Available Pro-Bono Cases"
                    autoFocus
                    type='number'
                    
                    />
                </FormControl>
                
                
                <br/>
            </div>
            <div className="animate__animated animate__fadeIn" hidden={volenteerRole !== 'Teacher'}>
                <Divider>Teacher Details</Divider>
                <FormControl fullWidth required>
                    <TagsSelector suggestions={subjects} tagLabel="subjects" />
                </FormControl>
            </div>
            <div className="animate__animated animate__fadeIn" hidden={volenteerRole === 'Regular Donor'}>
                
                <Divider>{volenteerRole} Certificates</Divider>
                <FormControl fullWidth required>
                    
                    <Dragger>
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
            </div>
            <Divider>Address Details</Divider>
            <AddressForm />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="btn"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}