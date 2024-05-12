import React from "react";
import Avatar from '@mui/material/Avatar';
import { Divider } from 'antd';
import { Typography } from 'antd';
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
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'animate.css';
import { FormatUnderlined } from "@mui/icons-material";
import { useState } from "react";
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';
import InputLabel from '@mui/material/InputLabel';
import { PhoneInput } from 'react-international-phone';
import NavBar from "./NavBar";
import { Country, State, City }  from 'country-state-city';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';


function OrganizationProfile(){
    const { Title } = Typography;
    const { Text } = Typography;
    const defaultTheme = createTheme();
    const [tooltipTextName, setTooltipTextName] = React.useState('');
    const [tooltipTextAddress, setTooltipTextAddress] = React.useState('');
    const [tooltipTextAddress1, setTooltipTextAddress1] = React.useState('');
    const [tooltipTextZipCode,setTooltipTextZipCode]=React.useState('');
    const [tooltipType, setTooltipType] = React.useState('');
    const [email, setEmail] = useState('MisrElKheir@gmail.com');
    const [name, setName] = useState('Misr El Kheir');
    const [organizationType, setOrganizationType] = useState('Non-Profit');
    const [phoneNumber, setNumber] = React.useState('201144118686');
    const [position, setPosition] = React.useState([29.98693069424653, 31.44078789655661]);
    const countries = Country.getAllCountries();
    const [selectedCountry, setSelectedCountry] = React.useState('EG');
    const [selectedState, setSelectedState] = React.useState('C');
    const [selectedCity, setSelectedCity] = React.useState('Cairo');
    const [zipCode, setZipCode] = React.useState('0000');
    const [address, setAddress] = React.useState('26 Sherif Street Downtown');

    const success = () => {
        message
          .loading('Saving Changes..', 1.5)
          .then(() => message.success('Saved Changes :)', 2.5))
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !name || !organizationType || !phoneNumber || !position ) {
          message.error('Please enter a name.');
        } else if(!email) {
            message.error('Please enter an email.');
        }
        else if(!organizationType) {
            message.error('Please enter a type.');
        }
        else if(!phoneNumber) {
            message.error('Please enter a phone number.');
        }
        else if(!position) {
            message.error('Please enter your location.');
        }

        else if (!selectedCountry ) {
            message.error('Please enter Country.');
          } else if (!selectedState) {
              message.error('Please enter State.');
          }
          else if (!selectedCity) {
              message.error('Please enter City.');
          }
          else if (!zipCode) {
              message.error('Please enter Zip Code.');
          }
          else if (!address){
              message.error('Please enter your address.');
          }
          else{
           success();
          }

      };

    const handleMouseEnterName = () => {
        setTooltipTextName('Click to change your name');
    };

    const handleMouseLeaveName = () => {
        setTooltipTextName('');
    };

    const handleMouseEnterType = () => {
        setTooltipType('Click to change organization type');
    };

    const handleMouseLeaveType = () => {
        setTooltipType('');
    };

    const handleMouseEnterEmail = () => {
        setTooltipTextAddress('Click to change your email');
    };

    const handleMouseLeaveEmail = () => {
        setTooltipTextAddress('');
    };

    const handleMouseEnterAddress1 = () => {
        setTooltipTextAddress1('Click to change your address');
    };
    const handleMouseLeaveAddress1 = () => {
        setTooltipTextAddress1('');
    };
    const handleMouseEnterZipCode = () => {
        setTooltipTextZipCode('Click to change Zip Code');
    };
    const handleMouseLeaveZipCode = () => {
        setTooltipTextZipCode('');
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangeName = (e) => {
        setName(e.target.value);
    };


    const handleChangeType = (e) => {
        setOrganizationType(e.target.value);
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
       
<>
    <NavBar/>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

<ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
            <Title style={{textAlign:'center', fontSize:50, color:'#620B37'}}>
                Profile Details
            </Title>
            <Divider/>
              <Avatar src={'https://api.dicebear.com/7.x/miniavs/svg?seed=29'} style={{border: '1px solid transparent',
              border: '1px solid #620B37',
              borderRadius: '50%',
              padding: '2px',
              position:'absolute',
              top: 300,
              right: '40%',
              transform: 'translate(-50%, -50%)',
              width: 150,
              height: 150,}} />

<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
     <Text variant="h6" style={{ marginBottom: 20, fontSize:25, position:'absolute', top:370,left:540,  color:'#620B37'}}>Name:</Text>
     <Grid item xs>
     <div style={{ position: 'relative' }}>
            <TextField
                margin="normal"
                fullWidth
                id="name"
                value={name}
                onChange={handleChangeName}
                InputProps={{
                    style: {
                        opacity: 1, // Ensure text is fully visible
                        position: 'relative', // Ensure position is relative for absolute positioning of tooltip
                    },
                    onMouseEnter: () => handleMouseEnterName(),
                    onMouseLeave: handleMouseLeaveName ,
                }}

                style={{ marginTop: 200 }}
            />
            {tooltipTextName && (
                <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', padding: '5px', border: 'transparent', borderRadius: '5px' }}>
                    {tooltipTextName}
                </div>
            )}
            </div>
            </Grid>
            <Divider/>
         <Grid item xs>
            <Text variant="h6" style={{ marginBottom: 20, fontSize:25, position:'absolute', top:550,left:540, color:'#620B37'}}>Email:</Text>
            <div style={{ position:'relative'}}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              onChange={handleChangeEmail} 
              value={email}
              style={{ marginTop: 30 }}
             
              InputProps={{
                style: {
                    opacity: 1, // Ensure text is fully visible
                    position: 'relative' // Ensure position is relative for absolute positioning of tooltip,
                    
                },
                onMouseEnter: () => handleMouseEnterEmail(),
                onMouseLeave: handleMouseLeaveEmail,
         
              
            }}
                     
        />

        {tooltipTextAddress && (
            <div style={{ position: 'absolute', top: '83%', left: 0, backgroundColor: 'white', padding: '5px', border: 'transparent', borderRadius: '5px' }}>
                {tooltipTextAddress}
            </div>
        )}
                    <Divider/>

       
            </div>
            </Grid>
            <Grid item xs>
            <Text variant="h6" style={{ marginBottom: 20, fontSize:25, position:'absolute', top:710,left:540, color:'#620B37'}}>Phone Number:</Text>

              <PhoneInput
                  defaultCountry="eg"
                  style={{width: '100%', marginTop: 55}}
                  id="phone"
                  name="phone"
                  value={phoneNumber}
              />
            </Grid>

        <Divider/>
           
            <Grid item xs>
            <Text variant="h6" style={{ marginBottom: 20, fontSize:25, position:'absolute', top:840,left:540, color:'#620B37'}}>Organization Type:</Text>

                    <TextField
                    margin="normal"
                    fullWidth
                    // type="number"
                    onChange={handleChangeType}
                    value={organizationType}
                    style={{ marginTop: 40 }}
                    InputProps={{
                        style: {
                            opacity: 10, 
                            position: 'relative' 
                            
                        },
                        onMouseEnter: () => handleMouseEnterType(),
                        onMouseLeave: handleMouseLeaveType,
                 
                      
                    }}
                   
                    
                />
                {tooltipType && (
                    <div style={{ position: 'absolute', top: '132%', left: '36%', backgroundColor: 'white', padding: '5px', border: 'transparent', borderRadius: '5px' }}>
                        {tooltipType}
                    </div>
                )} 
                </Grid>
                <Divider/>
                <Divider/>
            <Divider style={{fontSize:25, color:'#620B37'}}>Address Details </Divider>
            <FormControl fullWidth required style={{ marginBottom: '40px'}}>
                <InputLabel id="demo-multiple-name-label">Country</InputLabel>
                <Select
                disabled
                labelId="demo-multiple-name-label"
                id="country"
                name="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                input={<OutlinedInput label="Country" />}

                >
                    {countries.map((country) => <MenuItem value={country.isoCode}>{country.name}</MenuItem>)}
                </Select>
            </FormControl>
            <br/>
            <FormControl fullWidth required style={{ marginBottom: '40px'}}>
                <InputLabel id="demo-multiple-name-label">State</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="state"
                name='state'
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                input={<OutlinedInput label="State" />}
                >
                    {State.getStatesOfCountry(selectedCountry).map((state) => <MenuItem value={state.isoCode}>{state.name}</MenuItem>)}
                </Select>
            </FormControl>
            <br/>
            <FormControl fullWidth required style={{ marginBottom: '40px'}}>
                <InputLabel id="demo-multiple-name-label">City</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="city"
                name='city'
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                
     
                input={<OutlinedInput label="City" />}
                >
        
                     
                    {City.getCitiesOfState(selectedCountry, selectedState).map((city) => <MenuItem value={city.name}>{city.name}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl fullWidth required>
                <TextField
                style={{ marginBottom: '40px'}}
                required
                fullWidth
                id="address"
                name="address"
                label="Address"
                value = {address}
                onChange= {(e) => setAddress(e.target.value)}
                InputProps={{
                    style: {
                        opacity: 10, // Ensure text is fully visible
                        position: 'relative' // Ensure position is relative for absolute positioning of tooltip,
                        
                    },
                    onMouseEnter: () => handleMouseEnterAddress1(),
                    onMouseLeave: handleMouseLeaveAddress1,
             
                  
                }}
                />
                     {tooltipTextAddress1 && (
            <div style={{ position: 'absolute', top: '67%', left: 0, backgroundColor: 'white', padding: '5px', border: 'transparent', borderRadius: '5px' }}>
                {tooltipTextAddress1}
                </div>
                     )}
            </FormControl>
            
            
            <FormControl fullWidth required style={{ marginBottom: '35px'}}>
                <TextField
                margin="dense"
                required
                fullWidth
                id="zip"
                name="zip"
                label="Zip Code"
                value={zipCode}
                onChange= {(e) => setZipCode(e.target.value)}
                type="number"
                InputProps={{
                    style: {
                        opacity: 10, // Ensure text is fully visible
                        position: 'relative' // Ensure position is relative for absolute positioning of tooltip,
                        
                    },
                    onMouseEnter: () => handleMouseEnterZipCode(),
                    onMouseLeave: handleMouseLeaveZipCode,
             
                  
                }}
                />
                 {tooltipTextZipCode && (
            <div style={{ position: 'absolute', top: '71%', left: 0, backgroundColor: 'white', padding: '5px', border: 'transparent', borderRadius: '5px' }}>
                {tooltipTextZipCode}
            </div>
        )}
      <Divider/>
            </FormControl>
            <Grid item xs fullWidth required>

                    <InputLabel id="demo-multiple-name-label">Organization Location, click on map to change it</InputLabel>
                    <MapContainer center={position} zoom={20} scrollWheelZoom={false} style={{ height: '50vh', width: '100wh' }} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationFinderDummy />
                    <Marker position={position}>
                        <Popup style={{textAlign: 'center'}}>
                        {position[0]}, {position[1]}
                        </Popup>
                    </Marker>

                    </MapContainer> 
                </Grid>
                <Divider/>
                <Button
              type="submit"
              fullWidth
              variant="contained"
              className="btn"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#620b37', borderColor: '#620b37' }}
            >
              Save Changes
            </Button>
                <Divider/>
                </Box>
            </Container>
            </ThemeProvider>
            </Box>


</>

      );
    }
export default OrganizationProfile;