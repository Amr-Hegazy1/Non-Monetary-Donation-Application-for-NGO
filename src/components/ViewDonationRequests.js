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
import { Select, Space } from 'antd';
import Container from '@mui/material/Container';
import NavBar from './NavBar';

const donationRequests = [
  { RequestNo: 1, OrganizationName: "Sunshine Foundation", Category: "Food", Item: "Fresh meals", name: "Chicken and rice", Area: "Smooha", Governorate: "Alexandria" },
  { RequestNo: 2, OrganizationName: "Hopeful Hearts Charity", Category: "Clothes", Item: "Pants", Size: "small", age: "17", Gender: "Female", Season: "Automn", Area: "Heliopolis", Governorate: "Cairo" },
  { RequestNo: 3, OrganizationName: "Serenity Aid Network", Category: "Food", Item: "Fruits and Vegetables", name: "Oranges and cucumbers", Area: "New Cairo", Governorate: "Cairo" },
  { RequestNo: 4, OrganizationName: "Bright Horizons Organization", Category: "Blood Donations", Hospital: "Queen", BloodType: 'A positive', Urgency: '4', Governorate: "Alexandria", Area: "Smooha" },
  { RequestNo: 5, OrganizationName: "Unity Outreach Initiative", Category: "Clothes", Item: "Tshirt", Size: "large", age: "20", Gender: "Male", Season: "Summer", Area: "Mohandesin", Governorate: "Giza" },
  { RequestNo: 6, OrganizationName: "Care4Kids Foundation", Category: "School Supplies", Type: "Stationary", GradeRange: "1-5", Area: "Nasr City", Governorate: "Cairo" },
  { RequestNo: 7, OrganizationName: "Helping Hands Alliance", Category: "Blood Donations", Hospital: "Cleopatra", BloodType: 'B positive', Urgency: '5', Governorate: "Cairo", Area: "Heliopolis" },
  { RequestNo: 8, OrganizationName: "Empowerment Foundation", Category: "School Supplies", Type: "Books", GradeRange: "6-10", Area: "New Cairo", Governorate: "Cairo" },
  { RequestNo: 9, OrganizationName: "Dream Builders Association", Category: "Toys", age: "5", Gender: "Male", Type: "Cars", Area: "Mohandesin", Governorate: "Giza" },
  { RequestNo: 10, OrganizationName: "Compassion Relief Group", Category: "Toys", age: "10", Gender: "Male", Type: "Board Games", Area: "Nasr City", Governorate: "Cairo" },
  { RequestNo: 11, OrganizationName: "Harmony Support Network", Category: "Food", Item: "Canned foods", Name: "Tuna", Area: "New Cairo", Governorate: "Cairo" },
  { RequestNo: 12, OrganizationName: "Renewal Assistance Program", Category: "Food", Item: "Baked Goods", Name: "croissants", Area: "Heliopolis", Governorate: "Cairo" },
  { RequestNo: 13, OrganizationName: "Lifeline Medical Foundation", Category: "Medical Supplies", Type: "Medical Equipment", name: "Xray Machine", Area: "Mohandesin", Governorate: "Giza" },
  { RequestNo: 14, OrganizationName: "Wellness Resources Network", Category: "Medical Supplies", Type: "Medical Device", name: "Ventilators", Area: "Smooha", Governorate: "Alexandria" },
  { RequestNo: 15, OrganizationName: "Education Empowerment Coalition", Category: "Teaching", Subject: "Math", Area: "New Cairo", Governorate: "Cairo" },
  { RequestNo: 16, OrganizationName: "Health Harmony Initiative", Category: "Medical Cases", Specialty: "Dermatologist", Area: "Mohandesin", Governorate: "Giza" },
  { RequestNo: 17, OrganizationName: "Wellness Resources Network", Category: "Medical Supplies", Type: "Medication", name: "Panadol", MedicalUse: "Headache", Area: "Heliopolis", Governorate: "Cairo" },
  { RequestNo: 18, OrganizationName: "Dar Al Shifa", Category: "Medical Cases", Specialty: "Psychiatrist", Area: "Nasr City", Governorate: "Cairo" },
  { RequestNo: 19, OrganizationName: "Education On Top", Category: "Teaching", Subject: "Science", Area: "Heliopolis", Governorate: "Cairo" },
  { RequestNo: 20, OrganizationName: "Faithful Foundations Church", Category: "Places of Worship", Area: "Smooha", Governorate: "Alexandria", Religion: "Christianity", itemNeeded: "Candles" },
  { RequestNo: 21, OrganizationName: "Taqwa Empowerment Council", Category: "Places of Worship", Area: "Nasr City", Governorate: "Cairo", Religion: "Islam", itemNeeded: "Prayer Mats" }
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
  color: COLORS.white,
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

  backgroundColor: COLORS.white,

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
  const [ReligionHovered, setReligionHovered] = useState(false);
  const value = useState('');

  const handleCategoryMouseEnter = () => {
    setCategoryHovered(true);
  };

  const handleCategoryMouseLeave = () => {
    setCategoryHovered(false);
  };


  const handleReligionMouseEnter = () => {
    setReligionHovered(true);
  };

  const handleReligionMouseLeave = () => {
    setReligionHovered(false);
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

  const handleUrgencyMouseEnter = () => {
    setUrgencyHovered(true);
  }

  const handleUrgencyMouseLeave = () => {
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




  const handleOrganizationNameMouseEnter = () => {
    setOrganizationNameHovered(true);
  }

  const handleOrganizationNameMouseLeave = () => {
    setOrganizationNameHovered(false);
  }


  const handleSpecialtyMouseEnter = () => {
    setSpecialtyHovered(true);
  }

  const handleSpecialtyMouseLeave = () => {
    setSpecialtyHovered(false);
  }

  const handleSubjectMouseEnter = () => {
    setSubjectHovered(true);
  }

  const handleSubjectMouseLeave = () => {
    setSubjectHovered(false);
  }

  const handleClothesAgeMouseEnter = () => {
    setClothesAgeHovered(true);
  }

  const handleClothesAgeMouseLeave = () => {
    setClothesAgeHovered(false);
  }
  const handleToysAgeMouseEnter = () => {
    setToysAgeHovered(true);
  }


  const handleToysAgeMouseLeave = () => {
    setToysAgeHovered(false);
  }


  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };





  const handleCategoryChange = (value) => {
    setCategoryFilter(value);
    logFilteredDonationRequests(value);
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
    setReligionFilter('');

  };


  const handleAreaChange = (value) => {
    setAreaFilter(value);
    logFilteredDonationRequestsArea(value);
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
    setReligionFilter('');

  };

  const handleGovChange = (value) => {
    setGovFilter(value);
    logFilteredDonationRequestsGov(value);
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
    setReligionFilter('');

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
  const [religionFilter, setReligionFilter] = useState('');

  const filteredDonationRequests = donationRequests.filter((request) => {

    const values = Object.values(request).map(value =>
      typeof value === 'string' ? value.toLowerCase() : ''
    );

    const categoryMatch = categoryFilter === '' || request.Category === categoryFilter;
    const areaMatch = areaFilter === '' || request.Area === areaFilter;
    const govMatch = govFilter === '' || request.Governorate === govFilter;
    const genderMatch = categoryFilter !== 'Clothes' || genderFilter === '' || request.Gender === genderFilter;
    const sizeMatch = categoryFilter !== 'Clothes' || sizeFilter === '' || request.Size === sizeFilter;
    const seasonMatch = categoryFilter !== 'Clothes' || seasonFilter === '' || request.Season === seasonFilter;
    const supplyMatch = categoryFilter !== 'School Supplies' || supplyFilter === '' || request.Type === supplyFilter;
    const toysMatch = categoryFilter !== 'Toys' || toysFilter === '' || request.Gender === toysFilter;
    const typeMatch = categoryFilter !== 'Toys' || typeFilter === '' || request.Type === typeFilter;
    const itemMatch = categoryFilter !== 'Food' || itemFilter === '' || request.Item === itemFilter;
    const medicalTypeMatch = categoryFilter !== 'Medical Supplies' || medicalTypeFilter === '' || request.Type === medicalTypeFilter;
    const medicalUseMatch = (categoryFilter !== 'Medical Supplies' || typeFilter !== 'Medication')
      && (medicalUseFilter === '' || request.MedicalUse === medicalUseFilter);
    const hospitalNameMatch = categoryFilter !== 'Blood Donations' || hospitalNameFilter === '' || request.Hospital === hospitalNameFilter;
    const specialtyMatch = categoryFilter !== 'Medical Cases' || specialtyFilter === '' || request.Specialty === specialtyFilter;
    const organizationNameMatch = categoryFilter !== 'Medical Cases' || organizationNameFilter === '' || request.OrganizationName === organizationNameFilter;
    const subjectMatch = categoryFilter !== 'Teaching' || subjectFilter === '' || request.Subject === subjectFilter;
    const clothesAgeMatch = categoryFilter !== 'Clothes' || clothesAgeFilter === '' || request.age === clothesAgeFilter;
    const toysAgeMatch = categoryFilter !== 'Toys' || toysAgeFilter === '' || request.age === toysAgeFilter;
    const bloodTypeMatch = categoryFilter !== 'Blood Donations' || bloodTypeFilter === '' || request.BloodType === bloodTypeFilter;
    const urgencyMatch = categoryFilter !== 'Blood Donations' || urgencyFilter === '' || request.Urgency === urgencyFilter;
    const religionMatch = categoryFilter !== 'Places of Worship' || religionFilter === '' || request.Religion === religionFilter;


    return (
      values.some(value => value.startsWith(searchQuery.toLowerCase())) &&
      categoryMatch && areaMatch && govMatch &&
      genderMatch && sizeMatch && seasonMatch && supplyMatch && toysMatch && typeMatch
      && itemMatch && medicalTypeMatch && medicalUseMatch && hospitalNameMatch
      && specialtyMatch && organizationNameMatch && subjectMatch && clothesAgeMatch && toysAgeMatch && bloodTypeMatch && urgencyMatch && religionMatch
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
          if (key !== 'RequestNo' && key !== 'OrganizationName' && key !== 'Category' && key !== 'Area' && key !== 'Governorate') {
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
          if (key !== 'RequestNo' && key !== 'OrganizationName' && key !== 'Category' && key !== 'Area' && key !== 'Governorate') {
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
          if (key !== 'RequestNo' && key !== 'OrganizationName' && key !== 'Category' && key !== 'Area' && key !== 'Governorate') {
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
          (categoryFilter === 'Teaching' && subjectFilter !== '' && request.Subject === subjectFilter)) ||
        (categoryFilter === 'Clothes' && clothesAgeFilter !== '' && request.age === clothesAgeFilter) ||
        (categoryFilter === 'Toys' && toysAgeFilter !== '' && request.age === toysAgeFilter) ||
        (categoryFilter === 'Blood Donations' && bloodTypeFilter !== '' && request.BloodType === bloodTypeFilter) ||
        (categoryFilter === 'Blood Donations' && urgencyFilter !== '' && request.Urgency === urgencyFilter) ||
        (categoryFilter === 'Places of Worship' && religionFilter !== '' && request.Religion === religionFilter)
      );

      if (filteredRequest) {
        setHeaders(Object.keys(filteredRequest).map(property => (
          <th key={property}>{property}</th>
        )));
        return;
      }
    }

    //   // If no filtered request found, set default headers
    //   setHeaders([]);
    // }, [categoryFilter, areaFilter, govFilter, filteredDonationRequests, genderFilter, sizeFilter, seasonFilter, supplyFilter, toysFilter, typeFilter, itemFilter, medicalTypeFilter, medicalUseFilter, hospitalNameFilter , subjectFilter,
    //    organizationNameFilter, specialtyFilter,toysAgeFilter,clothesAgeFilter, bloodTypeFilter,urgencyFilter,]
  });





  return (
    <>
      <NavBar />
      <AppBar position="static" sx={{ backgroundColor: '#620b37', height: '100%', width: '100%' }}>


        <Box sx={{ flexGrow: 1 }}>
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
                style={{ color: COLORS.black }}
              />
            </Search>
            <>
              <Space wrap>
                <Select defaultValue="All Categories" onChange={handleCategoryChange} onMouseEnter={handleCategoryMouseEnter} onMouseLeave={handleCategoryMouseLeave} style={{ color: Categoryhovered ? COLORS.white : COLORS.black, backgroundColor: Categoryhovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                  {[
                    { value: '', label: 'All Categories' },
                    { value: 'Food', label: 'Food' },
                    { value: 'Clothes', label: 'Clothes' },
                    { value: 'School Supplies', label: 'School Supplies' },
                    { value: 'Toys', label: 'Toys' },
                    { value: 'Medical Supplies', label: 'Medical Supplies' },
                    { value: 'Blood Donations', label: 'Blood Donations' },
                    { value: 'Teaching', label: 'Teaching' },
                    { value: 'Medical Cases', label: 'Medical Cases' },
                    { value: 'Places of Worship', label: 'Places of Worship' }
                  ].map(option => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </Select>

                <Select defaultValue="All Areas" onChange={handleAreaChange} onMouseEnter={handleAreaMouseEnter} onMouseLeave={handleAreaMouseLeave} style={{ color: AreaHovered ? COLORS.white : COLORS.black, backgroundColor: AreaHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                  {[
                    { value: '', label: 'All Areas' },
                    { value: 'Smooha', label: 'Smooha' },
                    { value: 'New Cairo', label: 'New Cairo' },
                    { value: 'Nasr City', label: 'Nasr City' },
                    { value: 'Heliopolis', label: 'Heliopolis' },
                    { value: 'Mohandesin', label: 'Mohandesin' }
                  ].map(option => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </Select>

                <Select value={govFilter} onChange={handleGovChange} onMouseEnter={handleGovernorateMouseEnter} onMouseLeave={handleGovernorateMouseLeave} style={{ color: GovernorateHovered ? COLORS.white : COLORS.black, backgroundColor: GovernorateHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                  {[
                    { value: '', label: 'All Governorates' },
                    { value: 'Cairo', label: 'Cairo' },
                    { value: 'Giza', label: 'Giza' },
                    { value: 'Alexandria', label: 'Alexandria' }
                  ].map(option => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </Select>

                {categoryFilter === 'Clothes' && (
                  <>
                    <Select value={genderFilter} onChange={(value) => setGenderFilter(value)} onMouseEnter={handleGenderMouseEnter} onMouseLeave={handleGenderMouseLeave} style={{ color: GenderHovered ? COLORS.white : COLORS.black, backgroundColor: GenderHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                      {[
                        { value: '', label: 'All Genders' },
                        { value: 'Male', label: 'Male' },
                        { value: 'Female', label: 'Female' }
                      ].map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Select>

                    <Select value={sizeFilter} onChange={(value) => setSizeFilter(value)} onMouseEnter={handleSizeMouseEnter} onMouseLeave={handleSizeMouseLeave} style={{ color: SizeHovered ? COLORS.white : COLORS.black, backgroundColor: SizeHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                      {[
                        { value: '', label: 'All sizes' },
                        { value: 'small', label: 'small' },
                        { value: 'medium', label: 'medium' },
                        { value: 'large', label: 'large' }
                      ].map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Select>

                    <Select value={seasonFilter} onChange={(value) => setSeasonFilter(value)} onMouseEnter={handleSeasonMouseEnter} onMouseLeave={handleSeasonMouseLeave} style={{ color: SeasonHovered ? COLORS.white : COLORS.black, backgroundColor: SeasonHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                      {[
                        { value: '', label: 'All seasons' },
                        { value: 'Summer', label: 'Summer' },
                        { value: 'Automn', label: 'Automn' },
                        { value: 'Winter', label: 'Winter' },
                        { value: 'Spring', label: 'Spring' }
                      ].map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Select>
                  </>
                )}


                {categoryFilter === 'School Supplies' && (
                  <Select value={supplyFilter} onChange={(value) => setSupplyFilter(value)} onMouseEnter={handleSupplyMouseEnter} onMouseLeave={handleSupplyMouseLeave} style={{ color: SupplyHovered ? COLORS.white : COLORS.black, backgroundColor: SupplyHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                    {[
                      { value: '', label: 'All Supplies' },
                      { value: 'Books', label: 'Books' },
                      { value: 'Stationary', label: 'Stationary' }
                    ].map(option => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </Select>
                )}

                {categoryFilter === 'Toys' && (
                  <>
                    <Select value={toysFilter} onChange={(value) => setToysFilter(value)} onMouseEnter={handleToyGenderMouseEnter} onMouseLeave={handleToyGenderMouseLeave} style={{ color: ToyGenderHovered ? COLORS.white : COLORS.black, backgroundColor: ToyGenderHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                      {[
                        { value: '', label: 'All Genders' },
                        { value: 'Male', label: 'Male' },
                        { value: 'Female', label: 'Female' }
                      ].map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Select>

                    <Select value={typeFilter} onChange={(value) => setTypeFilter(value)} onMouseEnter={handleTypeMouseEnter} onMouseLeave={handleTypeMouseLeave} style={{ color: TypeHovered ? COLORS.white : COLORS.black, backgroundColor: TypeHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                      {[
                        { value: '', label: 'All Toy Categories' },
                        { value: 'Board Games', label: 'Board Games' },
                        { value: 'Stuffed Toys', label: 'Stuffed Toys' },
                        { value: 'Dolls', label: 'Dolls' },
                        { value: 'Sports', label: 'Sports' },
                        { value: 'Cars', label: 'Cars' },
                        { value: 'Outdoor', label: 'Outdoor' }
                      ].map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Select>
                  </>
                )}


                {categoryFilter === 'Food' && (
                  <Select value={itemFilter} onChange={(value) => setItemFilter(value)} onMouseEnter={handleItemMouseEnter} onMouseLeave={handleItemMouseLeave} style={{ color: ItemHovered ? COLORS.white : COLORS.black, backgroundColor: ItemHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                    {[
                      { value: '', label: 'All Items' },
                      { value: 'Fresh meals', label: 'Fresh meals' },
                      { value: 'Fruits and Vegetables', label: 'Fruits and Vegetables' },
                      { value: 'Canned foods', label: 'Canned Foods' },
                      { value: 'Baked Goods', label: 'Baked Goods' }
                    ].map(option => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </Select>
                )}

                {categoryFilter === 'Medical Supplies' && (
                  <>
                    <Select defaultValue="All Medical Types" onChange={(value) => setMedicalTypeFilter(value)} onMouseEnter={handleMedicalTypeMouseEnter} onMouseLeave={handleMedicalTypeMouseLeave} style={{ color: MedicalTypeHovered ? COLORS.white : COLORS.black, backgroundColor: MedicalTypeHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold', width: "100%" }}>
                      {[
                        { value: '', label: 'All Types' },
                        { value: 'Medical Device', label: 'Medical Device' },
                        { value: 'Medical Equipment', label: 'Medical Equipment' },
                        { value: 'Medication', label: 'Medication' }
                      ].map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Select>
                    {(medicalTypeFilter === 'Medication') && (
                      <Select
                        
                        value={medicalUseFilter}
                        onChange={(value) => setMedicalUseFilter(value)}
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
                        
                      </Select>
                    )}
                  </>
                )}


                {categoryFilter === 'Blood Donations' && (
                  <>
                    <Select defaultValue="All Hospitals" onChange={(value) => setHospitalNameFilter(value)} onMouseEnter={handleHospitalNameMouseEnter} onMouseLeave={handleHospitalNameMouseLeave} style={{ color: HospitalNameHovered ? COLORS.white : COLORS.black, backgroundColor: HospitalNameHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                      {[
                        { value: '', label: 'All Hospitals' },
                        { value: 'Queen', label: 'Queen' },
                        { value: 'Cleopatra', label: 'Cleopatra' }
                      ].map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Select>

                    <Select defaultValue="All Blood Types" onChange={(value) => setBloodTypeFilter(value)} onMouseEnter={handleBloodTypeMouseEnter} onMouseLeave={handleBloodTypeMouseLeave} style={{ color: BloodTypeHovered ? COLORS.white : COLORS.black, backgroundColor: BloodTypeHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                      {[
                        { value: '', label: 'All Blood Types' },
                        { value: 'AB Positive', label: 'AB Positive' },
                        { value: 'AB Negative', label: 'AB Negative' },
                        { value: 'A Positive', label: 'A Positive' },
                        { value: 'A Negative', label: 'A Negative' },
                        { value: 'B Positive', label: 'B Positive' },
                        { value: 'B Negative', label: 'B Negative' },
                        { value: 'O Positive', label: 'O Positive' },
                        { value: 'O Negative', label: 'O Negative' }
                      ].map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Select>

                    <Select defaultValue="All Urgencies" onChange={(value) => setUrgencyFilter(value)} onMouseEnter={handleUrgencyMouseEnter} onMouseLeave={handleUrgencyMouseLeave} style={{ color: UrgencyHovered ? COLORS.white : COLORS.black, backgroundColor: UrgencyHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                      {[
                        { value: '', label: 'All Urgencies' },
                        { value: '1', label: 'Least Urgent' },
                        { value: '2', label: '2' },
                        { value: '3', label: '3' },
                        { value: '4', label: '4' },
                        { value: '5', label: 'Most Urgent' }
                      ].map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Select>
                  </>
                )}



                {categoryFilter === 'Medical Cases' && (
                  <>
                    <Select defaultValue="All Specialties" onChange={(value) => setSpecialtyFilter(value)} onMouseEnter={handleSpecialtyMouseEnter} onMouseLeave={handleSpecialtyMouseLeave} style={{ color: SpecialtyHovered ? COLORS.white : COLORS.black, backgroundColor: SpecialtyHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                      {[
                        { value: '', label: 'All Specialties' },
                        { value: 'Dermatologist', label: 'Dermatologist' },
                        { value: 'Psychiatrist', label: 'Psychiatrist' }
                      ].map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Select>

                    <Select defaultValue="All Organizations" onChange={(value) => setOrganizationNameFilter(value)} onMouseEnter={handleOrganizationNameMouseEnter} onMouseLeave={handleOrganizationNameMouseLeave} style={{ color: OrganizationNameHovered ? COLORS.white : COLORS.black, backgroundColor: OrganizationNameHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                      {[
                        { value: '', label: 'All Organizations' },
                        { value: 'Health Harmony Initiative', label: 'Health Harmony Initiative' },
                        { value: 'Dar Al Shifa', label: 'Dar Al Shifa' }
                      ].map(option => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Select>
                  </>
                )}

                {categoryFilter === 'Teaching' && (
                  <Select defaultValue="All Subjects" onChange={(value) => setSubjectFilter(value)} onMouseEnter={handleSubjectMouseEnter} onMouseLeave={handleSubjectMouseLeave} style={{ color: SubjectHovered ? COLORS.white : COLORS.black, backgroundColor: SubjectHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                    {[
                      { value: '', label: 'All Subjects' },
                      { value: 'Math', label: 'Math' },
                      { value: 'Science', label: 'Science' },
                      { value: 'English', label: 'English' },
                      { value: 'French', label: 'French' },
                      { value: 'Social Studies', label: 'Social Studies' }
                    ].map(option => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </Select>
                )}

                {categoryFilter === 'Clothes' && (
                  <Select defaultValue="All Ages" onChange={(value) => setClothesAgeFilter(value)} onMouseEnter={handleClothesAgeMouseEnter} onMouseLeave={handleClothesAgeMouseLeave} style={{ color: ClothesAgeHovered ? COLORS.white : COLORS.black, backgroundColor: ClothesAgeHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                    {[
                      { value: '', label: 'All Ages' },
                      { value: '17', label: 'From 13-17' },
                      { value: '20', label: 'From 18-22' }
                    ].map(option => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </Select>
                )}


                {categoryFilter === 'Toys' && (
                  <Select defaultValue="All Ages" onChange={(value) => setToysAgeFilter(value)} onMouseEnter={handleToysAgeMouseEnter} onMouseLeave={handleToysAgeMouseLeave} style={{ color: ToysAgeHovered ? COLORS.white : COLORS.black, backgroundColor: ToysAgeHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                    {[
                      { value: '', label: 'All Ages' },
                      { value: '5', label: 'From 0-7' },
                      { value: '10', label: 'From 8-14' }
                    ].map(option => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </Select>
                )}

                {categoryFilter === 'Places of Worship' && (
                  <Select defaultValue="All Religions" onChange={(value) => setReligionFilter(value)} onMouseEnter={handleReligionMouseEnter} onMouseLeave={handleReligionMouseLeave} style={{ color: ReligionHovered ? COLORS.white : COLORS.black, backgroundColor: ReligionHovered ? 'rgba(98, 11, 55, 0.4)' : COLORS.white, fontWeight: 'bold' }}>
                    {[
                      { value: '', label: 'All Religions' },
                      { value: 'Christianity', label: 'Christianity' },
                      { value: 'Islam', label: 'Islam' }
                    ].map(option => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </Select>
                )}
              </Space>

            </>

          </Toolbar>
        </Box>
      </AppBar>
      <Container component="main" maxWidth="md" disableGutters>
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
      </Container>
    </>
  );
}

export default ViewDonationRequest;
