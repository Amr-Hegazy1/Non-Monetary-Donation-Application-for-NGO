import {React, useState} from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import NavBar from './NavBar';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;









const SchedulePickup = () => {
  
    

    

    
    

    
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
            }}
            >   
                <Typography component="h1" variant="h5">
                    Specify Pickup Details
                </Typography>
                
                <FormControl fullWidth required>
                <InputLabel id="demo-multiple-name-label">Vehicle Type</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={[]}
                input={<OutlinedInput label="Vehicle Type" />}
                >
                    <MenuItem>Truck</MenuItem>
                    <MenuItem>Car</MenuItem>
                    <MenuItem>Motorcycle</MenuItem>
                    
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