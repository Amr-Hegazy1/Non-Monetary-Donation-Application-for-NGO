import {React, useState} from 'react';
import NavBar from './NavBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { DatePicker, Image } from 'antd';
import Untitled from './Untitled.png';
const { RangePicker } = DatePicker;











const SchedulePickup = () => {
  
    

    
    const [vehicle, setVehicle] = useState('');
    
    

    
    return (
    <>
        
        <NavBar/>
        <Container component="main" maxWidth="md">
            <Box
            sx={{
                marginTop: 8,
                marginBottom: 8,
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}
            >   
                <Image width={450} src={Untitled} />
                <Typography component="h1" variant="h5">
                    Specify Pickup Details
                </Typography>
                <br/>
                
                <FormControl fullWidth required>
                <InputLabel id="demo-multiple-name-label">Vehicle Type</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={vehicle}
                input={<OutlinedInput label="Vehicle Type" />}
                onChange={(e) => setVehicle(e.target.value)}
                >
                    <MenuItem value="Truck">Truck</MenuItem>
                    <MenuItem value="Car">Car</MenuItem>
                    <MenuItem value="Motorcycle">Motorcycle</MenuItem>
                    
                </Select>
            </FormControl>
            <br/>
            <br/>
            <FormControl fullWidth required>
                <RangePicker size={"large"} showTime/>
            </FormControl>
            </Box>
      </Container>
    </>
    );
};
export default SchedulePickup;