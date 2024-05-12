import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import VerifyCodePage from './components/Verify';
import AdminHome from './components/AdminHomePage/AdminHome';

import PasswordManagement from './PasswordManagement';
import OrgCoordinateDonationPickup from './components/OrgCoordinateDonationPickup';
import DetailsOfMedicalSuppToBeDonated from './components/DetailsOfMedicalSuppToBeDonated';
import DetailsOfToysToBeDonated from './components/DetailsOfToysToBeDonated';
import DetailsOfBooksToBeDonated from './components/DetailsOfBooksToBeDonated';
import DetailsOfStationaryToBeDonated from './components/DetailsOfStationaryToBeDonated';
import DetailsOfFoodToBeDonated from './components/DetailsOfFoodToBeDonated';
import ViewDonorDetailsForFulfilledPosts from './components/ViewDonorDetailsForFulfilledPosts';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';
import DetailsOfClothesToBeDonated from './components/DetailsOfClothesToBeDonated';

import OrganizationRequestInfo from './components/OrganizationRequestInfo';
import OrganizationDetails from './components/OrganizationDetails';

import RequestClothes from './components/RequestClothes';
import RequestBooks from './components/RequestBooks.';
import RequestFood from './components/RequestFood';
import RequestMedicalSupplies from './components/RequestMedicalSup';
import RequestStationary from './components/RequestStationary';
import RequestToys from './components/RequestToys';
import RequestBloodDonations from './components/RequestBloodDonations';
import RequestTeaching from './components/RequestTeaching';
import RequestMedicalCases from './components/RequestMedicalCases';
import ViewDonationRequests from './components/ViewDonationRequests';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import FulfilledDonations from './components/FulfilledDonations';
import SchedulePickup from './components/SchedulePickup';
import DonorMyDonations from './components/DonorMyDonations';
import DonorMyDonationDetails from './components/DonorMyDonationDetails';
import Dashboard from './components/DeliveryPerson/Dashboard';
import DeliveryDonationDetails from './components/DeliveryPerson/DeliveryDonationDetails';
import { ConfigProvider } from 'antd';
import { createTheme, ThemeProvider } from '@mui/material';
import RequestInfoDoctor from './components/RequestInfoDoctor';
import TeacherDetails from './components/TeacherDetails';
import DoctorDetails from './components/DoctorDetails';
import ViewDetailsOfFulfilledPosts from './components/ViewDetailsOfFulfilledPosts';


import Login from './Login';
import RequestInfoTeacher from './components/RequestInfoTeacher';
import DonorProfile from './components/DonorProfile';
import OrganizationProfile from './components/OrganizationProfile';
import AdminProfile from './components/AdminProfile';
import DeliveryPersonProfile from './components/DeliveryPersonProfile';
import AdminFilterOrganization from './components/AdminFilterOrganization';
import OrganizationRegisteredDetails from './components/OrganizationRegisteredDetails';
import DoctorRegisteredInfo from './components/DoctorRegisteredInfo';
import TeacherRegisteredInfo from './components/TeacherRegisteredInfo';




const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    primary: {
      main: '#620b37',
    },
    secondary: {
      main: '#620b37',
    },
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#620b37',
            borderRadius: 2,

            // Alias Token
            colorBgContainer: '#ffffff',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
