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
import ViewRequestedDonationImg from './ViewRequestedDonationImg.jpg';
import { Sort } from '@mui/icons-material';

const donationRequests =[
    { RequestNo: 1, OrganizationName: "Sunshine Foundation", Category: "Food", Item: "Fresh meals", name: "Chicken and rice", Area: "Smooha", Governorate:"Alexandria" },
    { RequestNo: 2, OrganizationName: "Hopeful Hearts Charity", Category: "Clothes", Item: "Pants", Size: "small", age: "17", Gender: "Female", Season: "Automn", Area: "Heliopolis", Governorate:"Cairo" },
    { RequestNo: 3, OrganizationName: "Serenity Aid Network", Category: "Food", Item: "Fruits and Vegetables", name: "Oranges and cucumbers", Area: "New Cairo", Governorate:"Cairo" },
    { RequestNo: 4, OrganizationName: "Bright Horizons Organization", Category: "Blood Donations", Hospital: "Queen",BloodType:'A positive',Urgency:'4', Governorate: "Alexandria", Area: "Smooha" },
    { RequestNo: 5, OrganizationName: "Unity Outreach Initiative", Category: "Clothes", Item: "Tshirt", Size: "large", age: "20", Gender: "Male", Season: "Summer", Area: "Mohandesin", Governorate:"Giza" },
    { RequestNo: 6, OrganizationName: "Care4Kids Foundation", Category: "School Supplies", Type: "Stationary", GradeRange: "1-5", Area: "Nasr City", Governorate:"Cairo" },
    { RequestNo: 7, OrganizationName: "Helping Hands Alliance", Category: "Blood Donations", Hospital: "Cleopatra", BloodType:'B positive',Urgency:'5', Governorate: "Cairo", Area: "Heliopolis" },
    { RequestNo: 8, OrganizationName: "Empowerment Foundation", Category: "School Supplies", Type: "Books", GradeRange: "6-10", Area: "New Cairo", Governorate:"Cairo" },
    { RequestNo: 9, OrganizationName: "Dream Builders Association", Category: "Toys", age: "5", Gender: "Male", Type: "Cars", Area: "Mohandesin",Governorate:"Giza"  },
    { RequestNo: 10, OrganizationName: "Compassion Relief Group", Category: "Toys", age: "10", Gender: "Male", Type: "Board Games", Area: "Nasr City" , Governorate:"Cairo"},
    { RequestNo: 11, OrganizationName: "Harmony Support Network", Category: "Food", Item: "Canned foods", Name: "Tuna", Area: "New Cairo", Governorate:"Cairo" },
    { RequestNo: 12, OrganizationName: "Renewal Assistance Program", Category: "Food", Item: "Baked Goods", Name: "croissants", Area: "Heliopolis", Governorate:"Cairo" },
    { RequestNo: 13, OrganizationName: "Lifeline Medical Foundation", Category: "Medical Supplies", Type: "Medical Equipment", name:"Xray Machine", Area: "Mohandesin",Governorate:"Giza" },
    { RequestNo: 14, OrganizationName: "Wellness Resources Network", Category: "Medical Supplies",Type: "Medical Device", name: "Ventilators", Area: "Smooha", Governorate:"Alexandria" },
    { RequestNo: 15, OrganizationName: "Education Empowerment Coalition", Category: "Teaching", Subject: "Math", Area: "New Cairo", Governorate: "Cairo" },
    { RequestNo: 16, OrganizationName: "Health Harmony Initiative", Category: "Medical Cases", Specialty: "Dermatologist", Area: "Mohandesin", Governorate: "Giza" },
    { RequestNo: 17, OrganizationName: "Wellness Resources Network", Category: "Medical Supplies",Type: "Medication", name: "Panadol", MedicalUse:"Headache", Area: "Heliopolis",Governorate:"Cairo" },
    { RequestNo: 18, OrganizationName: "Dar Al Shifa" , Category: "Medical Cases", Specialty: "Psychiatrist", Area:"Nasr City",Governorate: "Cairo"},
    { RequestNo: 19, OrganizationName: "Education On Top", Category: "Teaching", Subject: "Science", Area: "Heliopolis", Governorate: "Cairo" }
  ];
  
  
  




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



function ViewDonationRequest() {
 const [Categoryhovered, setCategoryHovered] = useState(false);
 const [AreaHovered, setAreaHovered] = useState(false);
 const [GovernorateHovered, setGovernorateHovered] = useState(false);
    const [GenderHovered, setGenderHovered] = useState(false);
    const [SizeHovered, setSizeHovered] = useState(false);
    const [SeasonHovered, setSeasonHovered] = useState(false);
    const [SupplyHovered, setSupplyHovered] = useState(false); 
    const [ToyGenderHovered, setToyGenderHovered] = useState(false);
    const [TypeHovered, setTypeHovered] = useState(false);
    const [ItemHovered, setItemHovered] = useState(false);
    const [MedicalTypeHovered, setMedicalTypeHovered] = useState(false);
    const [MedicalUseHovered, setMedicalUseHovered] = useState(false);
    const [HospitalNameHovered, setHospitalNameHovered] = useState(false);
    const [SpecialtyHovered, setSpecialtyHovered] = useState(false);
    const [OrganizationNameHovered, setOrganizationNameHovered] = useState(false);
    const [SubjectHovered, setSubjectHovered] = useState(false);
    const [ClothesAgeHovered, setClothesAgeHovered] = useState(false);
    const [ToysAgeHovered, setToysAgeHovered] = useState(false);
    const [BloodTypeHovered, setBloodTypeHovered] = useState(false);
    const [UrgencyHovered, setUrgencyHovered] = useState(false);
    



    const handleCategoryMouseEnter = () => {
        setCategoryHovered(true);
      };
    
      const handleCategoryMouseLeave = () => {
        setCategoryHovered(false);
      };


      const handleGenderMouseEnter = () => {
        setGenderHovered(true);
      };
    
      const handleGenderMouseLeave = () => {
        setGenderHovered(false);
      };

      const handleSizeMouseEnter = () => {
        setSizeHovered(true);
      };
    
      const handleSizeMouseLeave = () => {
        setSizeHovered(false);
      };

      const handleSeasonMouseEnter = () => {
        setSeasonHovered(true);
      };
    
      const handleSeasonMouseLeave = () => {
        setSeasonHovered(false);
      };


      const handleSupplyMouseEnter = () => {
        setSupplyHovered(true);
      };
    
      const handleSupplyMouseLeave = () => {
        setSupplyHovered(false);
      };
      
      const handleToyGenderMouseEnter = () => {
        setToyGenderHovered(true);
      };
      
      const handleToyGenderMouseLeave = () => {
        setToyGenderHovered(false);
      };

      const handleTypeMouseEnter = () => {
        setTypeHovered(true);
      };
      
      const handleTypeMouseLeave = () => {
        setTypeHovered(false);
      };

      const handleItemMouseEnter = () => {
        setItemHovered(true);
      };
      
      const handleItemMouseLeave = () => {
        setItemHovered(false);
      };

      const handleMedicalTypeMouseEnter = () => {
        setMedicalTypeHovered(true);
      };
      
      const handleMedicalTypeMouseLeave = () => {
        setMedicalTypeHovered(false);
      };

      const handleMedicalUseMouseEnter = () => {
        setMedicalUseHovered(true);
      };
      
      const handleMedicalUseMouseLeave = () => {
        setMedicalUseHovered(false);
      };

      const handleHospitalNameMouseEnter = () => {
        setHospitalNameHovered(true);
      }
      
      const handleHospitalNameMouseLeave = () => {
        setHospitalNameHovered(false);
      };

      const handleBloodTypeMouseEnter = () => {
        setBloodTypeHovered(true);
      }
      
      const handleBloodTypeMouseLeave = () => {
        setBloodTypeHovered(false);
      }

      const handleUrgencyMouseEnter = () =>{
        setUrgencyHovered(true);
      }
      
      const handleUrgencyMouseLeave = () =>{
        setUrgencyHovered(false);
      }

         const handleAreaMouseEnter = () => {
          setAreaHovered(true);
        }
        
      const handleAreaMouseLeave = () => {
        setAreaHovered(false);
      }


      const handleGovernorateMouseEnter = () => {
        setGovernorateHovered(true);
      }
      
      const handleGovernorateMouseLeave = () => {
        setGovernorateHovered(false);
      }
   

    

      const handleOrganizationNameMouseEnter = () =>{
        setOrganizationNameHovered(true);
      }

      const handleOrganizationNameMouseLeave = () =>{
        setOrganizationNameHovered(false);
      }
      
     
      const handleSpecialtyMouseEnter = () =>{
        setSpecialtyHovered(true);
      }
      
      const handleSpecialtyMouseLeave = () =>{
        setSpecialtyHovered(false);
      }

      const handleSubjectMouseEnter = () =>{
        setSubjectHovered(true);
      }
      
      const handleSubjectMouseLeave = () =>{
        setSubjectHovered(false);
      }

      const handleClothesAgeMouseEnter = () =>{
        setClothesAgeHovered(true);
      }
      
      const handleClothesAgeMouseLeave = () =>{
        setClothesAgeHovered(false);
    }
      const handleToysAgeMouseEnter = () =>{
        setToysAgeHovered(true);
      }
      

      const handleToysAgeMouseLeave = () =>{
        setToysAgeHovered(false);
      }


    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      };

   
      

    
      const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
        logFilteredDonationRequests(event.target.value);
        setGenderFilter('');
        setSizeFilter('');
        setSeasonFilter('');
        setSupplyFilter('');
        setToysFilter('');
        setTypeFilter('');
        setItemFilter('');
        setMedicalTypeFilter('');
        setMedicalUseFilter('');
        setHospitalNameFilter('');
        setSpecialtyFilter('');
        setOrganizationNameFilter('');
        setSubjectFilter('');
        setClothesAgeFilter('');
        setToysAgeFilter('');
        setBloodTypeFilter('');
        setUrgencyFilter('');

      };

      
      const handleAreaChange = (event) => {
        setAreaFilter(event.target.value);
        logFilteredDonationRequestsArea(event.target.value);
        setGenderFilter('');
        setSizeFilter('');
        setSeasonFilter('');
        setSupplyFilter('');
        setToysFilter('');
        setTypeFilter('');
        setItemFilter('');
        setMedicalTypeFilter('');
        setMedicalUseFilter('');
        setHospitalNameFilter('');
        setSpecialtyFilter('');
        setOrganizationNameFilter('');
        setSubjectFilter('');
        setClothesAgeFilter('');
        setToysAgeFilter('');
        setBloodTypeFilter('');
        setUrgencyFilter('');

      };

      const handleGovChange = (event) => {
        setGovFilter(event.target.value);
        logFilteredDonationRequestsGov(event.target.value);
        setGenderFilter('');
        setSizeFilter('');
        setSeasonFilter('');
        setSupplyFilter('');
        setToysFilter('');
        setTypeFilter('');
        setItemFilter('');
        setMedicalTypeFilter('');
        setMedicalUseFilter('');
        setHospitalNameFilter('');
        setSpecialtyFilter('');
        setOrganizationNameFilter('');
        setSubjectFilter('');
        setClothesAgeFilter('');
        setToysAgeFilter('');
        setBloodTypeFilter('');
        setUrgencyFilter('');

      };

      


      
    
      const [searchQuery, setSearchQuery] = useState('');
      const [categoryFilter, setCategoryFilter] = useState('');
      const [areaFilter, setAreaFilter] = useState('');
      const [govFilter, setGovFilter] = useState('');
      const [genderFilter, setGenderFilter] = useState('');
      const [sizeFilter, setSizeFilter] = useState('');
      const [seasonFilter, setSeasonFilter] = useState('');
      const [supplyFilter, setSupplyFilter] = useState('');
      const [toysFilter, setToysFilter] = useState('');
      const [typeFilter, setTypeFilter] = useState('');
      const [itemFilter, setItemFilter] = useState('');
      const [medicalTypeFilter, setMedicalTypeFilter] = useState('');
      const [medicalUseFilter, setMedicalUseFilter] = useState('');
      const [hospitalNameFilter, setHospitalNameFilter] = useState('');
      const [specialtyFilter, setSpecialtyFilter] = useState('');
      const [organizationNameFilter, setOrganizationNameFilter] = useState('');
      const [subjectFilter, setSubjectFilter] = useState('');
      const [clothesAgeFilter, setClothesAgeFilter] = useState('');
      const [toysAgeFilter, setToysAgeFilter] = useState('');
      const [bloodTypeFilter, setBloodTypeFilter] = useState('');
      const [urgencyFilter, setUrgencyFilter] = useState('');

      const filteredDonationRequests = donationRequests.filter((request) => {
      
        const values = Object.values(request).map(value =>
          typeof value === 'string' ? value.toLowerCase() : ''
        );
       
        const categoryMatch = categoryFilter === '' || request.Category === categoryFilter;
        const areaMatch = areaFilter === ''  || request.Area === areaFilter;
        const govMatch = govFilter === '' || request.Governorate === govFilter;
        const genderMatch = categoryFilter !== 'Clothes' || genderFilter === '' || request.Gender === genderFilter;
        const sizeMatch = categoryFilter!== 'Clothes' || sizeFilter === '' || request.Size === sizeFilter;
        const seasonMatch = categoryFilter!== 'Clothes' || seasonFilter === '' || request.Season === seasonFilter;
        const supplyMatch = categoryFilter !== 'School Supplies' || supplyFilter === '' || request.Type === supplyFilter;
        const toysMatch = categoryFilter !== 'Toys' || toysFilter === '' || request.Gender === toysFilter;
        const typeMatch = categoryFilter!== 'Toys' || typeFilter === '' || request.Type === typeFilter;
        const itemMatch = categoryFilter!== 'Food' || itemFilter === '' || request.Item === itemFilter;
        const medicalTypeMatch = categoryFilter!== 'Medical Supplies' || medicalTypeFilter === '' || request.Type === medicalTypeFilter;
        const medicalUseMatch = (categoryFilter !== 'Medical Supplies' || typeFilter !== 'Medication' )
            &&(medicalUseFilter === '' || request.MedicalUse === medicalUseFilter);
        const hospitalNameMatch = categoryFilter!== 'Blood Donations' || hospitalNameFilter === '' || request.Hospital === hospitalNameFilter;
        const specialtyMatch = categoryFilter!== 'Medical Cases' || specialtyFilter === '' || request.Specialty === specialtyFilter;
        const organizationNameMatch = categoryFilter!== 'Medical Cases' || organizationNameFilter === '' || request.OrganizationName === organizationNameFilter;
        const subjectMatch = categoryFilter!== 'Teaching' || subjectFilter === '' || request.Subject === subjectFilter;
        const clothesAgeMatch = categoryFilter!== 'Clothes' || clothesAgeFilter === '' || request.age === clothesAgeFilter;
        const toysAgeMatch = categoryFilter!== 'Toys' || toysAgeFilter === '' || request.age === toysAgeFilter;
        const bloodTypeMatch = categoryFilter!== 'Blood Donations' || bloodTypeFilter === '' || request.BloodType === bloodTypeFilter;
        const urgencyMatch = categoryFilter!== 'Blood Donations' || urgencyFilter === '' || request.Urgency === urgencyFilter;
         
    
        return (
            values.some(value => value.startsWith(searchQuery.toLowerCase())) &&
            categoryMatch && areaMatch && govMatch&&
            genderMatch && sizeMatch && seasonMatch && supplyMatch && toysMatch && typeMatch
              && itemMatch && medicalTypeMatch && medicalUseMatch && hospitalNameMatch 
               && specialtyMatch && organizationNameMatch && subjectMatch && clothesAgeMatch && toysAgeMatch && bloodTypeMatch && urgencyMatch
        );
    });

      const [headers, setHeaders] = useState([]);
    
      

      const logFilteredDonationRequests = (categoryFilter) => {
        filteredDonationRequests.forEach(request => {
            console.log(`ID: ${request.RequestNo}`);
            console.log(`Title: ${request.OrganizationName}`);
            console.log(`Category Name: ${request.Category}`);
            console.log(`Area: ${request.Area}`);
            console.log(`Governorate: ${request.Governorate}`);
            // Print additional properties if they exist
            if (categoryFilter !== "All Categories") {
                console.log("Additional Properties:");
                Object.keys(request).forEach(key => {
                if (key !== 'RequestNo' && key !== 'OrganizationName' && key !== 'Category' && key !=='Area' && key!=='Governorate') {
                    console.log(`${key}: ${request[key]}`);
                }
                });
            }
        });
    };


    const logFilteredDonationRequestsArea = (areaFilter) => {
      filteredDonationRequests.forEach(request => {
          console.log(`ID: ${request.RequestNo}`);
          console.log(`Title: ${request.OrganizationName}`);
          console.log(`Category Name: ${request.Category}`);
          console.log(`Area: ${request.Area}`);
          console.log(`Governorate: ${request.Governorate}`);
          // Print additional properties if they exist
          if (categoryFilter !== "All Categories") {
              console.log("Additional Properties:");
              Object.keys(request).forEach(key => {
              if (key !== 'RequestNo' && key !== 'OrganizationName' && key !== 'Category' && key !=='Area' && key!=='Governorate') {
                  console.log(`${key}: ${request[key]}`);
              }
              });
          }
      });
  };

  const logFilteredDonationRequestsGov = (govFilter) => {
    filteredDonationRequests.forEach(request => {
        console.log(`ID: ${request.RequestNo}`);
        console.log(`Title: ${request.OrganizationName}`);
        console.log(`Category Name: ${request.Category}`);
        console.log(`Area: ${request.Area}`);
        console.log(`Governorate: ${request.Governorate}`);
        // Print additional properties if they exist
        if (categoryFilter !== "All Categories") {
            console.log("Additional Properties:");
            Object.keys(request).forEach(key => {
            if (key !== 'RequestNo' && key !== 'OrganizationName' && key !== 'Category' && key !=='Area' && key!=='Governorate') {
                console.log(`${key}: ${request[key]}`);
            }
            });
        }
    });
};

      
useEffect(() => {
  if (filteredDonationRequests.length > 0) {
      const filteredRequest = filteredDonationRequests.find(request =>
          request.Category === categoryFilter &&
          request.Area === areaFilter &&
          request.Governorate === govFilter &&
          ((categoryFilter === 'Clothes' && ((genderFilter !== '' && request.Gender === genderFilter) || (sizeFilter !== '' && request.Size === sizeFilter) || (seasonFilter !== '' && request.Season === seasonFilter))) ||
           (categoryFilter === 'School Supplies' && supplyFilter !== '' && request.Type === supplyFilter) ||
           (categoryFilter === 'Toys' && ((toysFilter !== '' && request.Gender === toysFilter) || (typeFilter !== '' && request.Type === typeFilter))) ||
           (categoryFilter === 'Food' && itemFilter !== '' && request.Item === itemFilter) ||
           ((categoryFilter === 'Medical Supplies' && ((medicalTypeFilter !== '' && request.Type === medicalTypeFilter) || (medicalTypeFilter === 'Medication' && medicalUseFilter !== '' && request.MedicalUse === medicalUseFilter))))
           (categoryFilter === 'Blood Donations' && hospitalNameFilter !== '' && request.Hospital === hospitalNameFilter) ||
           (categoryFilter === 'Medical Cases' && ((specialtyFilter !== '' && request.Specialty === specialtyFilter) || (organizationNameFilter !== '' && request.OrganizationName === organizationNameFilter))) ||
           (categoryFilter === 'Teaching' && subjectFilter !== '' && request.Subject === subjectFilter))||
           (categoryFilter === 'Clothes' && clothesAgeFilter !== '' && request.age === clothesAgeFilter) ||
           (categoryFilter === 'Toys' && toysAgeFilter !== '' && request.age === toysAgeFilter) ||
           (categoryFilter === 'Blood Donations' && bloodTypeFilter !== '' && request.BloodType === bloodTypeFilter) ||
           (categoryFilter === 'Blood Donations' && urgencyFilter !== '' && request.Urgency === urgencyFilter)
      );
      
      if (filteredRequest) {
          setHeaders(Object.keys(filteredRequest).map(property => (
              <th key={property}>{property}</th>
          )));
          return;
      }
  }

  // If no filtered request found, set default headers
  setHeaders([]);
}, [categoryFilter, areaFilter, govFilter, filteredDonationRequests, genderFilter, sizeFilter, seasonFilter, supplyFilter, toysFilter, typeFilter, itemFilter, medicalTypeFilter, medicalUseFilter, hospitalNameFilter , subjectFilter,
   organizationNameFilter, specialtyFilter,toysAgeFilter,clothesAgeFilter, bloodTypeFilter,urgencyFilter]);

      

   

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
        <select  value={categoryFilter} onChange={handleCategoryChange} onMouseEnter={handleCategoryMouseEnter} onMouseLeave={handleCategoryMouseLeave} style={{color:Categoryhovered? COLORS.white: COLORS.black,backgroundColor: Categoryhovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Clothes">Clothes</option>
            <option value="School Supplies">School Supplies</option>
            <option value="Toys">Toys</option>
            <option value="Medical Supplies">Medical Supplies</option>
            <option value="Blood Donations">Blood Donations</option>
            <option value="Teaching">Teaching</option>
            <option value="Medical Cases">Medical Cases</option>


            
          </select>
          <select  value={areaFilter} onChange={handleAreaChange} onMouseEnter={handleAreaMouseEnter} onMouseLeave={handleAreaMouseLeave} style={{color:AreaHovered? COLORS.white: COLORS.black,backgroundColor: AreaHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
            <option value="">All Areas</option>
            <option value="Smooha">Smooha</option>
            <option value="New Cairo">New Cairo</option>
            <option value="Nasr City">Nasr City</option>
            <option value="Heliopolis">Heliopolis</option>
            <option value="Mohandesin">Mohandesin</option>            
          </select>

          <select  value={govFilter} onChange={handleGovChange} onMouseEnter={handleGovernorateMouseEnter} onMouseLeave={handleGovernorateMouseLeave} style={{color:GovernorateHovered? COLORS.white: COLORS.black,backgroundColor: GovernorateHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
            <option value="">All Governorates</option>
            <option value="Cairo">Cairo</option>
            <option value="Giza">Giza</option>
            <option value="Alexandria">Alexandria</option>          
          </select>


          {categoryFilter === 'Clothes' && (
                        <select  value={genderFilter} onChange={(event) => setGenderFilter(event.target.value)}  onMouseEnter={handleGenderMouseEnter} onMouseLeave={handleGenderMouseLeave} style={{color: GenderHovered ? COLORS.white: COLORS.black, backgroundColor: GenderHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All Genders</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                    )}
            {categoryFilter === 'Clothes' && (
                        <select  value={sizeFilter} onChange={(event) => setSizeFilter(event.target.value)}  onMouseEnter={handleSizeMouseEnter} onMouseLeave={handleSizeMouseLeave} style={{color: SizeHovered? COLORS.white:COLORS.black, backgroundColor: SizeHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All sizes</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select>

                    )}

        
                        {categoryFilter === 'Clothes' && (
                        <select  value={seasonFilter} onChange={(event) => setSeasonFilter(event.target.value)}  onMouseEnter={handleSeasonMouseEnter} onMouseLeave={handleSeasonMouseLeave} style={{color: SeasonHovered?COLORS.white: COLORS.black, backgroundColor: SeasonHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All seasons</option>
                            <option value="Summer">Summer</option>
                            <option value="Automn">Automn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>

                        </select>

                    )}
          {categoryFilter === 'School Supplies' && (
                        <select  value={supplyFilter} onChange={(event) => setSupplyFilter(event.target.value)}  onMouseEnter={handleSupplyMouseEnter} onMouseLeave={handleSupplyMouseLeave} style={{color: SupplyHovered?COLORS.white: COLORS.black, backgroundColor: SupplyHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All Supplies</option>
                            <option value="Books">Books</option>
                            <option value="Stationary">Stationary</option>
                        </select>

                    )}
                          {categoryFilter === 'Toys' && (
                        <select  value={toysFilter} onChange={(event) => setToysFilter(event.target.value)}  onMouseEnter={handleToyGenderMouseEnter} onMouseLeave={handleToyGenderMouseLeave} style={{color:ToyGenderHovered?COLORS.white: COLORS.black, backgroundColor: ToyGenderHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All Genders</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                    )}

                    {categoryFilter === 'Toys' && (
                        <select  value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}  onMouseEnter={handleTypeMouseEnter} onMouseLeave={handleTypeMouseLeave} style={{color:TypeHovered?COLORS.white: COLORS.black, backgroundColor: TypeHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All Toy Categories</option>
                            <option value="Board Games">Board Games</option>
                            <option value="Stuffed Toys">Stuffed Toys</option>
                            <option value="Dolls">Dolls</option>
                            <option value="Sports">Sports</option>
                            <option value="Cars">Cars</option>
                            <option value="Outdoor">Outdoor</option>
                        </select>
                    )}


                  {categoryFilter === 'Food' && (
                        <select  value={itemFilter} onChange={(event) => setItemFilter(event.target.value)}  onMouseEnter={handleItemMouseEnter} onMouseLeave={handleItemMouseLeave} style={{color:ItemHovered?COLORS.white: COLORS.black, backgroundColor: ItemHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All Items</option>
                            <option value="Fresh meals">Fresh meals</option>
                            <option value="Fruits and Vegetables">Fruits and Vegetables</option>
                            <option value="Canned foods">Canned Foods</option>
                            <option value="Baked Goods">Baked Goods</option>
                        </select>
                    )}   

{categoryFilter === 'Medical Supplies' && (
    <>
        <select  
            value={medicalTypeFilter} 
            onChange={(event) => setMedicalTypeFilter(event.target.value)}  
            onMouseEnter={handleMedicalTypeMouseEnter} 
            onMouseLeave={handleMedicalTypeMouseLeave} 
            style={{
                color: MedicalTypeHovered ? COLORS.white : COLORS.black, 
                backgroundColor: MedicalTypeHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, 
                fontWeight: 'bold'
            }}
        >
            <option value="">All Types</option>
            <option value="Medical Device">Medical Device</option>
            <option value="Medical Equipment">Medical Equipment</option>
            <option value="Medication">Medication</option>
        </select>
        {(medicalTypeFilter === 'Medication') && (
            <select
                value={medicalUseFilter}
                onChange={(event) => setMedicalUseFilter(event.target.value)}
                onMouseEnter={handleMedicalUseMouseEnter}
                onMouseLeave={handleMedicalUseMouseLeave}
                style={{
                    color: MedicalUseHovered ? COLORS.white : COLORS.black,
                    backgroundColor: MedicalUseHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white,
                    fontWeight: 'bold',
                }}
            >
                <option value="">All Medical Uses</option>
                <option value="Headache">Headache</option>
                <option value="Fever">Fever</option>
            </select>
        )}
    </>
)}




                  {categoryFilter === 'Blood Donations' && (
                            <select  value={hospitalNameFilter} onChange={(event) => setHospitalNameFilter(event.target.value)}  onMouseEnter={handleHospitalNameMouseEnter} onMouseLeave={handleHospitalNameMouseLeave} style={{color:HospitalNameHovered?COLORS.white: COLORS.black, backgroundColor: HospitalNameHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                                <option value="">All Hospitals</option>
                                <option value="Queen">Queen</option>
                                <option value="Cleopatra">Cleopatra</option>
                            </select>
                            )}  

                {categoryFilter === 'Blood Donations' && (
                            <select  value={bloodTypeFilter} onChange={(event) => setBloodTypeFilter(event.target.value)}  onMouseEnter={handleBloodTypeMouseEnter} onMouseLeave={handleBloodTypeMouseLeave} style={{color:BloodTypeHovered?COLORS.white: COLORS.black, backgroundColor: BloodTypeHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                                <option value="">All Blood Types</option>
                                <option value="AB positive">AB positive</option>
                                <option value="AB negative">AB negative</option>
                                <option value="A positive">A positive</option>
                                <option value="A negative">A negative</option>
                                <option value="B positive">B positive</option>
                                <option value="B negative">B negative</option>
                                <option value="O positive">O positive</option>
                                <option value="O negative">O negative</option>

                            </select>
                            )}
                  {categoryFilter === 'Blood Donations' && (
                            <select  value={urgencyFilter} onChange={(event) => setUrgencyFilter(event.target.value)}  onMouseEnter={handleUrgencyMouseEnter} onMouseLeave={handleUrgencyMouseLeave} style={{color:UrgencyHovered?COLORS.white: COLORS.black, backgroundColor: UrgencyHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                                <option value="">All Urgencies</option>
                                <option value="1">Least Urgent</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">Most Urgent</option>

                            </select>
                            )}
                            


                

              {categoryFilter === 'Medical Cases' && (
                          <select  value={specialtyFilter} onChange={(event) => setSpecialtyFilter(event.target.value)}  onMouseEnter={handleSpecialtyMouseEnter} onMouseLeave={handleSpecialtyMouseLeave} style={{color:SpecialtyHovered?COLORS.white: COLORS.black, backgroundColor: SpecialtyHovered ? 'rgba(98, 11, 55, 0.8)': COLORS.white, fontWeight:'bold'}}>
                              <option value="">All Specialties</option>
                              <option value="Dermatologist">Dermatologist</option>
                              <option value="Psychiatrist">Psychiatrist</option>
                          </select>
                          )}

              {categoryFilter === 'Medical Cases' && (
                          <select  value={organizationNameFilter} onChange={(event) => setOrganizationNameFilter(event.target.value)}  onMouseEnter={handleOrganizationNameMouseEnter} onMouseLeave={handleOrganizationNameMouseLeave} style={{color:OrganizationNameHovered?COLORS.white: COLORS.black, backgroundColor: OrganizationNameHovered ? 'rgba(98, 11, 55, 0.8)': COLORS.white, fontWeight:'bold'}}>
                              <option value="">All Organizations</option>
                              <option value="Health Harmony Initiative">Health Harmony Initiative</option>
                              <option value="Dar Al Shifa">Dar Al Shifa</option>
                          </select>
                          )}


             

   


            {categoryFilter === 'Teaching' && (
                          <select  value={subjectFilter} onChange={(event) => setSubjectFilter(event.target.value)}  onMouseEnter={handleSubjectMouseEnter} onMouseLeave={handleSubjectMouseLeave} style={{color:SubjectHovered?COLORS.white: COLORS.black, backgroundColor: SubjectHovered ? 'rgba(98, 11, 55, 0.8)': COLORS.white, fontWeight:'bold'}}>
                              <option value="">All Subjects</option>
                              <option value="Math">Math</option>
                              <option value="Science">Science</option>
                              <option value="English">English</option>
                              <option value="French">French</option>
                              <option value="Social Studies">Social Studies</option>

                          </select>
                          )}

            {categoryFilter === 'Clothes' && (
                          <select  value={clothesAgeFilter} onChange={(event) => setClothesAgeFilter(event.target.value)}  onMouseEnter={handleClothesAgeMouseEnter} onMouseLeave={handleClothesAgeMouseLeave} style={{color:ClothesAgeHovered?COLORS.white: COLORS.black, backgroundColor: ClothesAgeHovered ? 'rgba(98, 11, 55, 0.8)': COLORS.white, fontWeight:'bold'}}>
                              <option value="">All Ages</option>
                              <option value="17">From 13-17</option>
                              <option value="20">From 18-22</option>
                          </select>
                          )}

                {categoryFilter === 'Toys' && (
                          <select  value={toysAgeFilter} onChange={(event) => setToysAgeFilter(event.target.value)}  onMouseEnter={handleToysAgeMouseEnter} onMouseLeave={handleToysAgeMouseLeave} style={{color:ToysAgeHovered?COLORS.white: COLORS.black, backgroundColor: ToysAgeHovered ? 'rgba(98, 11, 55, 0.8)': COLORS.white, fontWeight:'bold'}}>
                              <option value="">All Ages</option>
                              <option value="5">From 0-7</option>
                              <option value="10">From 8-14</option>
                          </select>
                          )}


      </Toolbar>
    </AppBar>
    <Box sx={{ padding: '20px' }}>
      {filteredDonationRequests.map((request, index) => (
        <StyledAccordion key={index}>
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            {request.OrganizationName} - {request.Category}
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <ul>
              {Object.entries(request).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  </Box>
  );
}

export default ViewDonationRequest;
