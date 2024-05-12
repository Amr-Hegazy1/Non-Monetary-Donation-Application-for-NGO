import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { COLORS } from '../values/colors';
import { Button } from '@mui/material';
import { AccordionActions } from '@mui/material';
import ViewRequestedDonationImg from './ViewRequestedDonationImg.jpg';
import { Sort } from '@mui/icons-material';
import { set } from 'react-cool-form';


const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: 'rgba(98, 11, 55, 0.1)', // Example background color for accordion
    marginBottom: theme.spacing(1),
  }));
  
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: COLORS.white,
    '&:hover': {
      backgroundColor: 'rgba(98, 11, 55, 0.1)',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.black
    
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: COLORS.white ,
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
  
  const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: COLORS.white, 
    '&:hover': {
      backgroundColor: 'rgba(98, 11, 55, 0.1)', 
    },
  }));
  
  const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
     
      backgroundColor:COLORS.white, 
    
  }));
  
function AdminFilterOrganization() {
  const [OrganizationsList, setOrganizationsList] = useState([
    {Name: 'Organization1', Area: 'NasrCity', Governorate: 'Cairo', Type: 'Orphange'},
    {Name: 'Organization2', Area: 'Maadi', Governorate: 'Cairo', Type: 'Hospital'},
    {Name: 'Organization3', Area: 'Heliopolis', Governorate: 'Cairo', Type: 'Orphange'},
    {Name: 'Organization4', Area: 'Dokki', Governorate: 'Giza', Type: 'Hospital'},
    {Name: 'Organization5', Area: 'Zamalek', Governorate: 'Giza', Type: 'Orphange'},
    {Name: 'Organization6', Area: 'semooha', Governorate: 'Alex', Type: 'Hospital'},
    {Name: 'Organization7', Area: 'Maadi', Governorate: 'Cairo', Type: 'Orphange'},
    {Name: 'Organization8', Area: 'Maadi', Governorate: 'Cairo', Type: 'Hospital'},
    {Name: 'Organization9', Area: 'Heliopolis', Governorate: 'Cairo', Type: 'Orphange'},
    {Name: 'Organization10', Area: 'Dokki', Governorate: 'Giza', Type: 'Orphange'},
    {Name: 'Organization11', Area: 'Zamalek', Governorate: 'Giza', Type: 'Hospital'},
  ]);
    const [NameHovered, setNameHovered] = useState(false);
    const [AreaHovered, setAreaHovered] = useState(false);
    const [GovernorateHovered, setGovernorateHovered] = useState(false);
    const [TypeHovered, setTypeHovered] = useState(false);

    const handleDelete = (index) => {
      const newOrganizationsList = [...OrganizationsList];
      newOrganizationsList.splice(index, 1);
      setOrganizationsList(newOrganizationsList);
    };
    
    const handleAreaMouseEnter = () => {
        setAreaHovered(true);
      }; 
    const handleAreaMouseLeave = () => {
        setAreaHovered(false);
      };
    const handleGovernorateMouseEnter = () => {
        setGovernorateHovered(true);
      };
    const handleGovernorateMouseLeave = () => {
        setGovernorateHovered(false);
      };
    const handleTypeMouseEnter = () => {
        setTypeHovered(true);
      };
    const handleTypeMouseLeave = () => {
        setTypeHovered(false);
      };
    const handleNameMouseEnter = () => {
        setNameHovered(true);
      };
    const handleNameMouseLeave = () => {
        setNameHovered(false);
      };
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      };

    const handleAreaChange = (event) => {
        setAreaFilter(event.target.value);
    
    }
    const handleGovernorateChange = (event) => {
        setGovernorateFilter(event.target.value);
    
    }
    const handleTypeChange = (event) => {
        setTypeFilter(event.target.value);
     
    }
    

    const [searchQuery, setSearchQuery] = useState('');
    const [areaFilter, setAreaFilter] = useState('');
    const [governorateFilter, setGovernorateFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    
    const filteredOrganizations = OrganizationsList.filter((organization) => {
        const values = Object.values(organization).map(value => 
                            typeof value =='string'? value.toLowerCase() : ''
                        );
        const areaMatch = areaFilter === '' || organization.Area === areaFilter;
        const governorateMatch =  governorateFilter === '' || organization.Governorate === governorateFilter;
        const typeMatch =  typeFilter === '' || organization.Type === typeFilter;

    return (
        values.some(value => value.startsWith(searchQuery.toLowerCase())) &&
        
        areaMatch &&
        governorateMatch &&
        typeMatch
    );
    });
    const [headers, setHeaders] = useState([]);
    


    useEffect(() => {
        if(filteredOrganizations.length > 0){
                const fiteredMoreorganization= filteredOrganizations.find(organization =>
                organization.Area == areaFilter &&
                organization.Governorate == governorateFilter &&
                organization.Type == typeFilter 
            );
        
        if(fiteredMoreorganization){
            setHeaders(Object.keys(fiteredMoreorganization).map(property => (
                <th key={property}>{property}</th>
            )));
            return;
        }
    }
        setHeaders([]);
    }, [filteredOrganizations, areaFilter, governorateFilter, typeFilter]);

    return (
    <Box sx={{ flexGrow: 1, backgroundColor: COLORS.white }}>
    <AppBar position="static" sx={{ backgroundColor: '#620b37', height: '100%', width: '100%', backgroundSize: 'contain' }}>
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}
            onChange={handleSearchInputChange}
            style = {{color: COLORS.black}}
          />
        </Search>
           

            <select  value={areaFilter} onChange={handleAreaChange} onMouseEnter={handleAreaMouseEnter} onMouseLeave={handleAreaMouseLeave} style={{color:AreaHovered? COLORS.white: COLORS.black,backgroundColor: AreaHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                <option value="">ALL Areas</option>
                <option value="NasrCity">NasrCity</option>
                <option value="Maadi">Maadi</option>
                <option value="Heliopolis">Heliopolis</option>
                <option value="Dokki">Dokki</option>
                <option value="Zamalek">Zamalek</option>
                <option value="Semooha">Semooha</option>
            </select>

            <select  value={governorateFilter} onChange={handleGovernorateChange} onMouseEnter={handleGovernorateMouseEnter} onMouseLeave={handleGovernorateMouseLeave} style={{color:GovernorateHovered? COLORS.white: COLORS.black,backgroundColor: GovernorateHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                <option value="">ALL Governorates</option>
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Alex">Alex</option>
            </select>

            <select  value={typeFilter} onChange={handleTypeChange} onMouseEnter={handleTypeMouseEnter} onMouseLeave={handleTypeMouseLeave} style={{color:TypeHovered? COLORS.white: COLORS.black,backgroundColor: TypeHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                <option value="">ALL Types</option>
                <option value="Orphange">Orphange</option>
                <option value="Hospital">Hospital</option>
            </select>
        </Toolbar>
    </AppBar>

   <Box sx={{ padding: '20px' }}>
      {filteredOrganizations.map((organization, index) => (
        <StyledAccordion key={index}>
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            {organization.Name} 
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <ul>
              {Object.entries(organization).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </StyledAccordionDetails>
          <AccordionActions>
  <Button 
    variant="contained" 
    color="primary"
    size="small" 
    style={{ margin: '0 auto', display: 'flex' , background:'#602b37', width: '120px' }} 
    onClick={() => window.location.href = "/view-org-registered-info"}
  >
    View All Details
  </Button>
  <Button 
  variant="contained" 
  color="secondary"
  size="small" 
  style={{ margin: '0 auto', display: 'flex' , background:'#602b37', marginLeft: '10px', width: '80px' }} 
  onClick={() => handleDelete(index)}
>
  Delete
</Button>
</AccordionActions>
        </StyledAccordion>
      ))}
    </Box>
  </Box>
  );
}
export default AdminFilterOrganization;
