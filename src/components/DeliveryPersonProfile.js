import React from "react";
import Avatar from '@mui/material/Avatar';
import { Divider } from 'antd';
import { Typography } from 'antd';
import { ReactTags } from 'react-tag-autocomplete'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Image, message } from 'antd';
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
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';
import InputLabel from '@mui/material/InputLabel';
import NavBar from "./NavBar";
import { PhoneInput } from 'react-international-phone';




function DeliveryPersonProfile() {
    const { Title } = Typography;
    const { Text } = Typography;
    const defaultTheme = createTheme();
    const [tooltipTextName, setTooltipTextName] = React.useState('');
    const [tooltipTextAddress, setTooltipTextAddress] = React.useState('');
    const [tooltipTextCases, setTooltipTextCases] = React.useState('');
    const [email, setEmail] = useState('alaz.soysalan@gmail.com');
    const [name, setName] = useState('Alaz Soysalan');
    const [phoneNumber] = React.useState('201003601633');


    const success = () => {
        message
            .loading('Saving Changes..', 1.5)
            .then(() => message.success('Saved Changes :)', 2.5))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email) {
            message.error('Please specify your email.');
        } else if (!name) {
            message.error('Please specify your name.');
        }
        else if (!phoneNumber) {
            message.error('Please specify your phone number.');
        }
        else {
            success();
        }


    };

    const handleMouseEnterName = () => {
        setTooltipTextName('Click to change your name');
    };

    const handleMouseLeaveName = () => {
        setTooltipTextName('');
    };

    const handleMouseEnterEmail = () => {
        setTooltipTextAddress('Click to change your email');
    };

    const handleMouseLeaveEmail = () => {
        setTooltipTextAddress('');
    };


    const handleMouseLeaveCases = () => {
        setTooltipTextCases('');
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangeName = (e) => {
        setName(e.target.value);
    };


    return (
        <>
            <NavBar />
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
                        <Title style={{ textAlign: 'center', fontSize: 50, color: '#620B37' }}>
                            Profile Details
                        </Title>
                        <Divider />
                        <Avatar src={'https://api.dicebear.com/7.x/miniavs/svg?seed=29'} style={{
                            border: '1px solid transparent',
                            border: '1px solid #620B37',
                            borderRadius: '50%',
                            padding: '2px',
                            position: 'absolute',
                            top: 300,
                            right: '40%',
                            transform: 'translate(-50%, -50%)',
                            width: 150,
                            height: 150,
                        }} />

                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                            <Text variant="h6" style={{ marginBottom: 20, fontSize: 25, position: 'absolute', top: "54%", left: "36.5%", color: '#620B37' }}>Name:</Text>



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
                                            onMouseLeave: handleMouseLeaveName,
                                        }}

                                        style={{ marginTop: 200 }}
                                    />
                                    {tooltipTextName && (
                                        <div style={{ position: 'absolute', top: '98%', left: 0, backgroundColor: 'white', padding: '0px', border: 'transparent', borderRadius: '5px' }}>
                                            {tooltipTextName}
                                        </div>
                                    )}
                                </div>
                            </Grid>
                            <Divider />
                            <Grid item xs>
                                <Text variant="h6" style={{ marginBottom: 20, fontSize: 25, position: 'absolute', top: "73%", left: "36.6%", color: '#620B37' }}>Email:</Text>
                                <div style={{ position: 'relative' }}>
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
                                        <div style={{ position: 'absolute', top: '93%', left: 0, backgroundColor: 'white', padding: '0px', border: 'transparent', borderRadius: '5px' }}>
                                            {tooltipTextAddress}
                                        </div>
                                    )}
                                </div>
                            </Grid>
                            <Divider />
                            <Grid item xs>

                                <Text variant="h6" style={{ marginBottom: 20, fontSize: 25, position: 'absolute', top: "93%", left: "36.6%", color: '#620B37' }}>Phone Number:</Text>
                                <PhoneInput
                                    defaultCountry="eg"
                                    style={{ width: '100%', marginTop: 62 }}
                                    id="phone"
                                    name="phone"
                                    value={phoneNumber}

                                />

                            </Grid>
                            <Divider />





                            <Grid item xs>
                                <Text variant="h6" style={{ marginBottom: 20, fontSize: 25, position: 'absolute', top: "109.5%", left: "36.6%", color: '#620B37' }}>Profession:</Text>

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    disabled  // Make it non-editable
                                    id="admin"
                                    value="Delivery Person" // Set value to "Doctor"
                                    style={{ marginTop: 40 }}

                                    InputProps={{
                                        style: {
                                            opacity: 10, // Ensure text is fully visible
                                            position: 'relative', // Ensure position is relative for absolute positioning of tooltip,
                                        },
                                    }}
                                />
                            </Grid>

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

                        </Box>
                    </Container>
                </ThemeProvider>
            </Box>


        </>

    );
}
export default DeliveryPersonProfile;