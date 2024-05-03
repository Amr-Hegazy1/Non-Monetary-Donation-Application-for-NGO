import * as React from 'react';
import { Country, State, City }  from 'country-state-city';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';




export default function AddressForm() {
    const countries = Country.getAllCountries();
    const [selectedCountry, setSelectedCountry] = React.useState('EG');
    const [selectedState, setSelectedState] = React.useState('C');
    const [selectedCity, setSelectedCity] = React.useState('Cairo');
    return (
        <>
        <FormControl fullWidth required margin="normal">
                <InputLabel id="demo-multiple-name-label">Country</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                input={<OutlinedInput label="Country" />}
                >
                    {countries.map((country) => <MenuItem value={country.isoCode}>{country.name}</MenuItem>)}
                </Select>
            </FormControl>
            <br/>
            <FormControl fullWidth required margin="normal">
                <InputLabel id="demo-multiple-name-label">State</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                input={<OutlinedInput label="State" />}
                >
                    {State.getStatesOfCountry(selectedCountry).map((state) => <MenuItem value={state.isoCode}>{state.name}</MenuItem>)}
                </Select>
            </FormControl>
            <br/>
            <FormControl fullWidth required margin="normal">
                <InputLabel id="demo-multiple-name-label">City</InputLabel>
                <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                input={<OutlinedInput label="City" />}
                >
                    {City.getCitiesOfState(selectedCountry, selectedState).map((city) => <MenuItem value={city.name}>{city.name}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl fullWidth required>
                <TextField
                margin="normal"
                required
                fullWidth
                label="Address"
                autoFocus
                />
            </FormControl>
            
            
            <FormControl fullWidth required>
                <TextField
                margin="normal"
                required
                fullWidth
                label="Zip Code"
                autoFocus
                />
            </FormControl>
            </>
    );
}



