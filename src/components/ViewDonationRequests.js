import React , { useState, useEffect} from 'react'; 
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {COLORS} from '../values/colors';
import ViewRequestedDonationImg from './ViewRequestedDonationImg.jpg';



const donationRequests = [
        { RequestNo: 1, OrganizationName: 'Organization1', Category: 'Food', Item: 'Fresh meals', name: 'Chicken and rice' },
        { RequestNo: 2, OrganizationName: 'Organization2', Category: 'Clothes',Item:'Pants', Size: 'small', age: '17', Gender: 'Female', Season: 'Automn' },
        { RequestNo: 3, OrganizationName: 'Organization1', Category: 'Food', Item: 'fruits and vegetables', name: 'Oranges and cucumbers' },
        { RequestNo: 4, OrganizationName: 'Organization2', Category: 'Blood Donations', Hospital: 'Queen', Governorate: 'Alexandria', Area: 'Smooha' },
        { RequestNo: 5, OrganizationName: 'Organization1', Category: 'Clothes',Item:'Tshirt', Size: 'large', age: '20', Gender: 'Male', Season: 'Summer' },
        { RequestNo: 6, OrganizationName: 'Organization2', Category: 'School Supplies', Type: 'Stationary', GradeRange: '1-5' },
        { RequestNo: 7, OrganizationName: 'Organization3', Category: 'Blood Donations', Hospital: 'Cleopatra', Governorate: 'Cairo', Area: 'Heliopolis' },
        { RequestNo: 8, OrganizationName: 'Organization1', Category: 'School Supplies', Type: 'Books', GradeRange: '6-10' },
        { RequestNo: 9, OrganizationName: 'Organization2', Category: 'Toys', age: '5', Gender: 'Male', Type: 'cars' },
        { RequestNo: 10, OrganizationName: 'Organization3', Category: 'Toys', age: '10', Gender: 'Male', Type: 'board games' },
        { RequestNo: 11, OrganizationName: 'Organization3', Category: 'Food', Item: 'Canned food', Name: 'Tuna' },
        { RequestNo: 12, OrganizationName: 'Organization3', Category: 'Food', Item: 'baked goods', Name: 'croissants' },
        { RequestNo: 13, OrganizationName: 'Organization2', Category: 'Medical Supplies', MedicalEquipment: 'Xray Machine' },
        { RequestNo: 14, OrganizationName: 'Organization2', Category: 'Medical Supplies', MedicalDevice: 'Ventilators' },
        { RequestNo: 15, OrganizationName: 'Organization3', Category: 'Teaching', Subject: 'Math', Area: 'New Cairo', Governorate:'Ciaro'},
        { RequestNo: 16, OrganizationName: 'Organization1', Category: 'Medical Cases', Specialty: 'Dermatologist', Area: 'Mohandesin', Governorate:'Giza'}
        

      ];
      
  



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#BDA18C',
    '&:hover': {
      backgroundColor: 'rgba(189, 161, 140, 0.5)',
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

function ViewDonationRequest() {


    const [Categoryhovered, setCategoryHovered] = useState(false);
    const [GenderHovered, setGenderHovered] = useState(false);
    const [SizeHovered, setSizeHovered] = useState(false);
    const [SeasonHovered, setSeasonHovered] = useState(false);
    const [SupplyHovered, setSupplyHovered] = useState(false); 




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

      };



      
    
      const [searchQuery, setSearchQuery] = useState('');
      const [categoryFilter, setCategoryFilter] = useState('');
      const [genderFilter, setGenderFilter] = useState('');
      const [sizeFilter, setSizeFilter] = useState('');
      const [seasonFilter, setSeasonFilter] = useState('');
      const [supplyFilter, setSupplyFilter] = useState('');
      const [toysFilter, setToysFilter] = useState('');
      const filteredDonationRequests = donationRequests.filter((request) => {
      
        const values = Object.values(request).map(value =>
          typeof value === 'string' ? value.toLowerCase() : ''
        );
       
        const categoryMatch = categoryFilter === '' || request.Category === categoryFilter;
        const genderMatch = categoryFilter !== 'Clothes' || genderFilter === '' || request.Gender === genderFilter || categoryFilter!=='Toys'|| toysFilter==='';
        const sizeMatch = categoryFilter!== 'Clothes' || sizeFilter === '' || request.Size === sizeFilter;
        const seasonMatch = categoryFilter!== 'Clothes' || seasonFilter === '' || request.Season === seasonFilter;
        const supplyMatch = categoryFilter !== 'School Supplies' || supplyFilter === '' || request.Type === supplyFilter;
    
        return (
            values.some(value => value.startsWith(searchQuery.toLowerCase())) &&
            categoryMatch &&
            genderMatch && sizeMatch && seasonMatch && supplyMatch 
        );
    });

      const [headers, setHeaders] = useState([]);
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

            else if (categoryFilter === 'Toys' && toysFilter !== '' ) {
                const filteredRequest = filteredDonationRequests.find(request =>
                    request.Category === categoryFilter && request.Gender === genderFilter
                );
                if (filteredRequest) {
                    setHeaders(Object.keys(filteredRequest).map(property => (
                        <th key={property}>{property}</th>
                    )));
                }
            }

        } else if (filteredDonationRequests.length > 0) {
            setHeaders(Object.keys(filteredDonationRequests.find(request => request.Category === categoryFilter)).map(property => (
                <th key={property}>{property}</th>
            )));
        }
    }, [categoryFilter, filteredDonationRequests, genderFilter, sizeFilter, seasonFilter, supplyFilter, toysFilter]);
    
      

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

  return(

    <Box sx={{ flexGrow: 1, backgroundColor: COLORS.white}} >
      <AppBar position="static" sx={{backgroundColor:COLORS.primaryLightLessOpacity , backgroundImage:`url(${ViewRequestedDonationImg})`,height:'100%', width:'100%',backgroundSize: 'contain'}}>
        <Toolbar>
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </Search >
          <select  value={categoryFilter} onChange={handleCategoryChange} onMouseEnter={handleCategoryMouseEnter} onMouseLeave={handleCategoryMouseLeave} style={{color: COLORS.black,backgroundColor: Categoryhovered ? 'rgba(230, 220, 211, 0.8)': COLORS.white, fontWeight:'bold'}}>
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
                        <select  value={genderFilter} onChange={(event) => setGenderFilter(event.target.value)}  onMouseEnter={handleGenderMouseEnter} onMouseLeave={handleGenderMouseLeave} style={{color: GenderHovered ? COLORS.black: COLORS.black, backgroundColor: GenderHovered ? 'rgba(230, 220, 211, 0.8)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All Genders</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                    )}
            {categoryFilter === 'Clothes' && (
                        <select  value={sizeFilter} onChange={(event) => setSizeFilter(event.target.value)}  onMouseEnter={handleSizeMouseEnter} onMouseLeave={handleSizeMouseLeave} style={{color:COLORS.black, backgroundColor: SizeHovered ? 'rgba(230, 220, 211, 0.8)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All sizes</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select>

                    )}
                        {categoryFilter === 'Clothes' && (
                        <select  value={seasonFilter} onChange={(event) => setSeasonFilter(event.target.value)}  onMouseEnter={handleSeasonMouseEnter} onMouseLeave={handleSeasonMouseLeave} style={{color: COLORS.black, backgroundColor: SeasonHovered ? 'rgba(230, 220, 211, 0.8)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All seasons</option>
                            <option value="Summer">Summer</option>
                            <option value="Automn">Automn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>

                        </select>

                    )}
          {categoryFilter === 'School Supplies' && (
                        <select  value={supplyFilter} onChange={(event) => setSupplyFilter(event.target.value)}  onMouseEnter={handleSupplyMouseEnter} onMouseLeave={handleSupplyMouseLeave} style={{color: COLORS.black, backgroundColor: SupplyHovered ? 'rgba(230, 220, 211, 0.8)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All Supplies</option>
                            <option value="Books">Books</option>
                            <option value="Stationary">Stationary</option>
                        </select>

                    )}
                          {categoryFilter === 'Toys' && (
                        <select  value={toysFilter} onChange={(event) => setToysFilter(event.target.value)}  onMouseEnter={handleGenderMouseEnter} onMouseLeave={handleGenderMouseLeave} style={{color: GenderHovered ? COLORS.black: COLORS.black, backgroundColor: GenderHovered ? 'rgba(230, 220, 211, 0.8)': COLORS.white, fontWeight:'bold'}}>
                            <option value="">All Genders</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                    )}

        </Toolbar>
      </AppBar>
      <table>
      {filteredDonationRequests.length > 0 && categoryFilter !== '' && (
          <thead>
          <tr>
              {headers}
          </tr>
      </thead>
         )}
       <tbody>
    
       {filteredDonationRequests.map((request, rowIndex) => (
        <React.Fragment key={request.RequestNo}>
   
            {categoryFilter === '' || categoryFilter === 'All Categories' ? (
                <tr>
                    {Object.keys(request).map(property => (
                        <th  key={property}>{property}</th>
                    ))}
                </tr>
            ) : null}
        
            <tr>
                {Object.values(request).map((value, index) => (
                    <td  key={index}>{value}</td>
                ))}
            </tr>
            
        </React.Fragment>
    ))}
</tbody>

     
    </table>


    </Box>
    );

}



export default ViewDonationRequest;