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
  { RequestNo: 1, OrganizationName: "Sunshine Foundation", Category: "Food", Item: "Fresh meals", name: "Chicken and rice" },
  { RequestNo: 2, OrganizationName: "Hopeful Hearts Charity", Category: "Clothes", Item: "Pants", Size: "small", age: "17", Gender: "Female", Season: "Automn" },
  { RequestNo: 3, OrganizationName: "Serenity Aid Network", Category: "Food", Item: "Fruits and Vegetables", name: "Oranges and cucumbers" },
  { RequestNo: 4, OrganizationName: "Bright Horizons Organization", Category: "Blood Donations", Hospital: "Queen", Governorate: "Alexandria", Area: "Smooha" },
  { RequestNo: 5, OrganizationName: "Unity Outreach Initiative", Category: "Clothes", Item: "Tshirt", Size: "large", age: "20", Gender: "Male", Season: "Summer" },
  { RequestNo: 6, OrganizationName: "Care4Kids Foundation", Category: "School Supplies", Type: "Stationary", GradeRange: "1-5" },
  { RequestNo: 7, OrganizationName: "Helping Hands Alliance", Category: "Blood Donations", Hospital: "Cleopatra", Governorate: "Cairo", Area: "Heliopolis" },
  { RequestNo: 8, OrganizationName: "Empowerment Foundation", Category: "School Supplies", Type: "Books", GradeRange: "6-10" },
  { RequestNo: 9, OrganizationName: "Dream Builders Association", Category: "Toys", age: "5", Gender: "Male", Type: "Cars" },
  { RequestNo: 10, OrganizationName: "Compassion Relief Group", Category: "Toys", age: "10", Gender: "Male", Type: "Board Games" },
  { RequestNo: 11, OrganizationName: "Harmony Support Network", Category: "Food", Item: "Canned foods", Name: "Tuna" },
  { RequestNo: 12, OrganizationName: "Renewal Assistance Program", Category: "Food", Item: "Baked Goods", Name: "croissants" },
  { RequestNo: 13, OrganizationName: "Lifeline Medical Foundation", Category: "Medical Supplies", Type: "Medical Equipment", name:"Xray Machine" },
  { RequestNo: 14, OrganizationName: "Wellness Resources Network", Category: "Medical Supplies",Type: "Medical Device", name: "Ventilators" },
  { RequestNo: 15, OrganizationName: "Education Empowerment Coalition", Category: "Teaching", Subject: "Math", Area: "New Cairo", Governorate: "Ciaro" },
  { RequestNo: 16, OrganizationName: "Health Harmony Initiative", Category: "Medical Cases", Specialty: "Dermatologist", Area: "Mohandesin", Governorate: "Giza" } , 
  { RequestNo: 17, OrganizationName: "Wellness Resources Network", Category: "Medical Supplies",Type: "Medication", name: "Panadol", MedicalUse:"Headache" }

];


const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#f4f4f4', // Example background color for accordion
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
   
    backgroundColor: '#d0d0d0', 
  
}));



function ViewDonationRequest() {
 const [Categoryhovered, setCategoryHovered] = useState(false);
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
    const [GovernorateNameHovered, setGovernorateNameHovered] = useState(false);
    const [AreaNameHovered, setAreaNameHovered] = useState(false);
    



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

      const handleHospitalAreaMouseEnter = () =>{
            setAreaNameHovered(true);
      }
      
      const handleHospitalAreaMouseLeave = () =>{
            setAreaNameHovered(false);
      }

      const handleHospitalGovMouseEnter = () =>{
        setGovernorateNameHovered(true);
      }
      
      const handleHospitalGovMouseLeave = () =>{
        setGovernorateNameHovered(false);
      }
      


    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      };

      const handleAgeSortChange = (event) => {
        setSortAge(event.target.value);
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
        setSortAge('');
        setItemFilter('');
        setMedicalTypeFilter('');
        setMedicalUseFilter('');
        setHospitalNameFilter('');
        setBloodDonationAreaFilter('');
        setBloodGovFilter('');

      };

      


      
    
      const [searchQuery, setSearchQuery] = useState('');
      const [categoryFilter, setCategoryFilter] = useState('');
      const [genderFilter, setGenderFilter] = useState('');
      const [sizeFilter, setSizeFilter] = useState('');
      const [seasonFilter, setSeasonFilter] = useState('');
      const [supplyFilter, setSupplyFilter] = useState('');
      const [toysFilter, setToysFilter] = useState('');
      const [typeFilter, setTypeFilter] = useState('');
      const [sortAge, setSortAge] = useState('ascending');
      const [itemFilter, setItemFilter] = useState('');
      const [medicalTypeFilter, setMedicalTypeFilter] = useState('');
      const [medicalUseFilter, setMedicalUseFilter] = useState('');
      const [hospitalNameFilter, setHospitalNameFilter] = useState('');
      const [bloodDonationAreaFilter, setBloodDonationAreaFilter] = useState('');
      const [bloodGovFilter, setBloodGovFilter] = useState('');

      const filteredDonationRequests = donationRequests.filter((request) => {
      
        const values = Object.values(request).map(value =>
          typeof value === 'string' ? value.toLowerCase() : ''
        );
       
        const categoryMatch = categoryFilter === '' || request.Category === categoryFilter;
        const genderMatch = categoryFilter !== 'Clothes' || genderFilter === '' || request.Gender === genderFilter;
        const sizeMatch = categoryFilter!== 'Clothes' || sizeFilter === '' || request.Size === sizeFilter;
        const seasonMatch = categoryFilter!== 'Clothes' || seasonFilter === '' || request.Season === seasonFilter;
        const supplyMatch = categoryFilter !== 'School Supplies' || supplyFilter === '' || request.Type === supplyFilter;
        const toysMatch = categoryFilter !== 'Toys' || toysFilter === '' || request.Gender === toysFilter;
        const typeMatch = categoryFilter!== 'Toys' || typeFilter === '' || request.Type === typeFilter;
        const ageMatch =
        isNaN(parseInt(request.age)) || sortAge === '' ||
        request.age === sortAge ||
        (sortAge === 'ascending' && parseInt(request.age) > 0) ||
        (sortAge === 'descending' && parseInt(request.age) < 0);
        const itemMatch = categoryFilter!== 'Food' || itemFilter === '' || request.Item === itemFilter;
        const medicalTypeMatch = categoryFilter!== 'Medical Supplies' || medicalTypeFilter === '' || request.Type === medicalTypeFilter;
        const medicalUseMatch =
        categoryFilter !== 'Medical Supplies' ||
        typeFilter === 'Medication' ||
        medicalUseFilter === '' ||
        request.MedicalUse === medicalUseFilter;
        const hospitalNameMatch = categoryFilter!== 'Blood Donations' || hospitalNameFilter === '' || request.Hospital === hospitalNameFilter;
        const bloodDonationAreaMatch = categoryFilter!== 'Blood Donations' || bloodDonationAreaFilter === '' || request.Area === bloodDonationAreaFilter;
        const bloodDonationGovMatch = categoryFilter!== 'Blood Donations' || bloodGovFilter ==='' || request.Governorate === bloodGovFilter;
         
    
        return (
            values.some(value => value.startsWith(searchQuery.toLowerCase())) &&
            categoryMatch &&
            genderMatch && sizeMatch && seasonMatch && supplyMatch && toysMatch && typeMatch
             && ageMatch && itemMatch && medicalTypeMatch && medicalUseMatch && hospitalNameMatch && bloodDonationAreaMatch && bloodDonationGovMatch
        );
    });

      const [headers, setHeaders] = useState([]);
    
      

      const logFilteredDonationRequests = (categoryFilter) => {
        filteredDonationRequests.forEach(request => {
            console.log(`ID: ${request.RequestNo}`);
            console.log(`Title: ${request.OrganizationName}`);
            console.log(`Category Name: ${request.Category}`);
            // Print additional properties if they exist
            if (categoryFilter !== "All Categories") {
                console.log("Additional Properties:");
                Object.keys(request).forEach(key => {
                if (key !== 'RequestNo' && key !== 'OrganizationName' && key !== 'Category') {
                    console.log(`${key}: ${request[key]}`);
                }
                });
            }
        });
    };

      
      useEffect(() => {
        if (categoryFilter === '' && filteredDonationRequests.length > 0) {
            setHeaders(Object.keys(filteredDonationRequests[0]).map(property => (
                <th key={property}>{property}</th> 
            )));
        } else if (categoryFilter === 'Clothes' && genderFilter !== '' ) {
            const filteredRequest = filteredDonationRequests.find(request =>
                request.Category === categoryFilter && request.Gender === genderFilter
            );
            if (filteredRequest) {
                setHeaders(Object.keys(filteredRequest).map(property => (
                    <th key={property}>{property}</th>
                )));
            }
        } else if (categoryFilter === 'Clothes' && sizeFilter !== '' ) {
            const filteredRequest = filteredDonationRequests.find(request =>
                request.Category === categoryFilter &&  request.Size === sizeFilter
            );
            if (filteredRequest) {
                setHeaders(Object.keys(filteredRequest).map(property => (
                    <th key={property}>{property}</th>
                )));
            }

        } else if (categoryFilter === 'Clothes' && seasonFilter !== '' ) {
            const filteredRequest = filteredDonationRequests.find(request =>
                request.Category === categoryFilter && request.Season === seasonFilter
            );
            if (filteredRequest) {
                setHeaders(Object.keys(filteredRequest).map(property => (
                    <th key={property}>{property}</th>
                )));
            }

        } else if (categoryFilter === 'School Supplies' && supplyFilter !== '') {
            const filteredRequest = filteredDonationRequests.find(request =>
                request.Category === categoryFilter && request.Type === supplyFilter
            );
            if (filteredRequest) {
                setHeaders(Object.keys(filteredRequest).map(property => (
                    <th key={property}>{property}</th>
                )));
            }
          }

            else if (categoryFilter === 'Toys' && toysFilter !== '' ) {
                const filteredRequest = filteredDonationRequests.find(request =>
                    request.Category === categoryFilter && request.Gender === toysFilter
                );
                if (filteredRequest) {
                    setHeaders(Object.keys(filteredRequest).map(property => (
                        <th key={property}>{property}</th>
                    )));
                }
            }

            else if (categoryFilter === 'Toys' && toysFilter !== '' ) {
              const filteredRequest = filteredDonationRequests.find(request =>
                  request.Category === categoryFilter && request.Type === typeFilter
              );
              if (filteredRequest) {
                  setHeaders(Object.keys(filteredRequest).map(property => (
                      <th key={property}>{property}</th>
                  )));
              }
          }

        else if (categoryFilter === 'Food' && itemFilter !== '' ) {
          const filteredRequest = filteredDonationRequests.find(request =>
              request.Category === categoryFilter && request.Item === itemFilter
          );
          if (filteredRequest) {
              setHeaders(Object.keys(filteredRequest).map(property => (
                  <th key={property}>{property}</th>
              )));
          }

         } else if (categoryFilter === 'Medical Supplies' && medicalTypeFilter !== '' ) {
            const filteredRequest = filteredDonationRequests.find(request =>
                request.Category === categoryFilter && request.Type === medicalTypeFilter
            );
            if (filteredRequest) {
                setHeaders(Object.keys(filteredRequest).map(property => (
                    <th key={property}>{property}</th>
                )));
            }
           } else if (categoryFilter === 'Medical Supplies' && medicalTypeFilter === 'Medication' ) {
              const filteredRequest = filteredDonationRequests.find(request =>
                  request.Category === categoryFilter && request.Type === medicalTypeFilter && request.MedicalUse === medicalUseFilter
              );
              if (filteredRequest) {
                  setHeaders(Object.keys(filteredRequest).map(property => (
                      <th key={property}>{property}</th>
                  )));
              }
  
          }

          
        else if (categoryFilter === 'Blood Donations' && hospitalNameFilter !== '' ) {
            const filteredRequest = filteredDonationRequests.find(request =>
                request.Category === categoryFilter && request.Hospital === hospitalNameFilter
            );
            if (filteredRequest) {
                setHeaders(Object.keys(filteredRequest).map(property => (
                    <th key={property}>{property}</th>
                )));
            }
  
           }

           else if (categoryFilter === 'Blood Donations' && bloodDonationAreaFilter !== '' ) {
            const filteredRequest = filteredDonationRequests.find(request =>
                request.Category === categoryFilter && request.Area === bloodDonationAreaFilter
            );
            if (filteredRequest) {
                setHeaders(Object.keys(filteredRequest).map(property => (
                    <th key={property}>{property}</th>
                )));
            }
  
           }

           else if (categoryFilter === 'Blood Donations' && bloodGovFilter !== '' ) {
            const filteredRequest = filteredDonationRequests.find(request =>
                request.Category === categoryFilter && request.Governorate === bloodGovFilter
            );
            if (filteredRequest) {
                setHeaders(Object.keys(filteredRequest).map(property => (
                    <th key={property}>{property}</th>
                )));
            }
  
           }
          
          


          

         else if (filteredDonationRequests.length > 0) {
            setHeaders(Object.keys(filteredDonationRequests.find(request => request.Category === categoryFilter)).map(property => (
                <th key={property}>{property}</th>
            )));
        }
      }, [categoryFilter, filteredDonationRequests, genderFilter, sizeFilter, seasonFilter, supplyFilter, toysFilter,typeFilter,itemFilter, medicalTypeFilter, medicalUseFilter,hospitalNameFilter,bloodGovFilter,bloodDonationAreaFilter ]);

      

   

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

                {/* {categoryFilter === 'Toys' && (
                      <select
                        value={sortAge}
                        onChange={(event) => setSortAge(event.target.value)}
                        style={{ color: COLORS.black, fontWeight: 'bold' }}
                      >
                        <option value="">Age</option>
                        <option value="ascending">Sort Age: Ascending</option>
                        <option value="descending">Sort Age: Descending</option>
                      </select>
                    )} */}

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
                        <select  value={medicalTypeFilter} onChange={(event) => setMedicalTypeFilter(event.target.value)}  onMouseEnter={handleMedicalTypeMouseEnter} onMouseLeave={handleMedicalTypeMouseLeave} style={{color:MedicalTypeHovered?COLORS.white: COLORS.black, backgroundColor: MedicalTypeHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All Types</option>
                            <option value="Medical Device">Medical Device</option>
                            <option value="Medical Equipment">Medical Equipment</option>
                            <option value="Medication">Medication</option>
                        </select>
                    )}  

                    {categoryFilter === 'Medical Supplies' && typeFilter === 'Medication' && (
                        <select
                                value={medicalUseFilter}
                                onChange={(event) => setMedicalUseFilter(event.target.value)}
                                onMouseEnter={handleMedicalUseMouseEnter}
                                onMouseLeave={handleMedicalUseMouseLeave}
                                style={{
                                  color: MedicalUseHovered ? COLORS.white : COLORS.black,
                                  backgroundColor: MedicalUseHovered
                                    ? 'rgba(98, 11, 55, 0.1)'
                                    : COLORS.white,
                                  fontWeight: 'bold',
                                }}
                              >
                            <option value="">All Medical Uses</option>
                            <option value="Headache">Headache</option>
                            <option value="Fever">Fever</option>
                          </select>
                        )}

                  {categoryFilter === 'Blood Donations' && (
                            <select  value={hospitalNameFilter} onChange={(event) => setHospitalNameFilter(event.target.value)}  onMouseEnter={handleHospitalNameMouseEnter} onMouseLeave={handleHospitalNameMouseLeave} style={{color:HospitalNameHovered?COLORS.white: COLORS.black, backgroundColor: HospitalNameHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                                <option value="">All Hospitals</option>
                                <option value="Queen">Queen</option>
                                <option value="Cleopatra">Cleopatra</option>
                            </select>
                            )}  


                  {categoryFilter === 'Blood Donations' && (
                          <select  value={bloodDonationAreaFilter} onChange={(event) => setBloodDonationAreaFilter(event.target.value)}  onMouseEnter={handleHospitalAreaMouseEnter} onMouseLeave={handleHospitalAreaMouseLeave} style={{color:AreaNameHovered?COLORS.white: COLORS.black, backgroundColor: AreaNameHovered ? 'rgba(98, 11, 55, 0.4)': COLORS.white, fontWeight:'bold'}}>
                              <option value="">All Areas</option>
                              <option value="Heliopolis">Heliopolis</option>
                              <option value="Smooha">Smooha</option>
                          </select>
                          )} 

                  {categoryFilter === 'Blood Donations' && (
                          <select  value={bloodGovFilter} onChange={(event) => setBloodGovFilter(event.target.value)}  onMouseEnter={handleHospitalGovMouseEnter} onMouseLeave={handleHospitalGovMouseLeave} style={{color:GovernorateNameHovered?COLORS.white: COLORS.black, backgroundColor: GovernorateNameHovered ? 'rgba(98, 11, 55, 0.8)': COLORS.white, fontWeight:'bold'}}>
                              <option value="">All Governorates</option>
                              <option value="Cairo">Cairo</option>
                              <option value="Alexandria">Alexandria</option>
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
