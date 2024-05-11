import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donors from './Donors';
import AdminDashboard from './DonorSubmission';
import DonorList from './components/DonorList';
import VerifyCodePage from './components/Verify';
import AdminHome from './components/AdminHomePage/AdminHome';
import DonorSubmission from './DonorSubmission';
import Password from 'antd/es/input/Password';
import PasswordManagement from './PasswordManagement';

import RequestInfo from './components/RequestInfo';
import Login from './Login';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';
import DetailsOfClothesToBeDonated from './components/DetailsOfClothesToBeDonated';
import AdminApp from './components/AdminHomePage/AdminApp';
import OrganizationRequestInfo from './components/OrganizationRequestInfo';
import OrganizationDetails from './components/OrganizationDetails';
import UserDetails from './components/UserDetails';
import OrganizationList from './components/OrganizationList';
import OrgCoordinateDonationPickup from './components/OrgCoordinateDonationPickup';
import RequestClothes from './components/RequestClothes';
import RequestBooks from './components/RequestBooks.';
import RequestFood from './components/RequestFood';
import RequestMedicalSupplies from './components/RequestMedicalSup';
import RequestStationary from './components/RequestStationary';
import RequestToys from './components/RequestToys';
import RequestBloodDonations from './components/RequestBloodDonations';
import RequestTeaching from './components/RequestTeaching';
import RequestMedicalCases from './components/RequestMedicalCases';
import ViewDonationRequests from './components/ViewDonationRequests'; import Homepage from './components/Homepage';
import Signup from './components/Signup';
import FulfilledDonations from './components/FulfilledDonations';
import SchedulePickup from './components/SchedulePickup';
import DetailsOfMedicalSuppToBeDonated from './components/DetailsOfMedicalSuppToBeDonated';
import DetailsOfToysToBeDonated from './components/DetailsOfToysToBeDonated';
import DetailsOfBooksToBeDonated from './components/DetailsOfBooksToBeDonated';
import DetailsOfStationaryToBeDonated from './components/DetailsOfStationaryToBeDonated';
import DetailsOfFoodToBeDonated from './components/DetailsOfFoodToBeDonated';
import ViewDonorDetailsForFulfilledPosts from './components/ViewDonorDetailsForFulfilledPosts';
import { CookiesProvider } from 'react-cookie';
import DonorMyDonations from './components/DonorMyDonations';
import DonorMyDonationDetails from './components/DonorMyDonationDetails';
import Dashboard from './components/DeliveryPerson/Dashboard';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CookiesProvider>
        <BrowserRouter>
          <Suspense>
            <Routes>
              <Route index element={<Homepage/>} />
              <Route path="/donateClothes" element={<DetailsOfClothesToBeDonated/>} />
              <Route path="/view-donor-request-info" element={<RequestInfo/>} />
              <Route path="/view-org-request-info" element={<OrganizationRequestInfo/>} />
              <Route path="/view-org-submission-info" element={<OrganizationDetails/>} />
              <Route path="/view-donor-submission-info" element={<UserDetails/>} />
              <Route path="/view-org-registered-info" element={<OrganizationDetails/>} />
              <Route path="/view-donor-registered-info" element={<UserDetails/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/AdminHome" element={<AdminHome/>} />
              <Route path="/ChangePassword" element={<PasswordManagement/>} />
              <Route path="/Verify" element={<VerifyCodePage/>} />   
             <Route path = "/RequestClothes" element={<RequestClothes/>} />
             <Route path = "/RequestBooks" element={<RequestBooks/>} />
             <Route path = "/RequestFood" element={<RequestFood/>} />
             <Route path = "/RequestMedicalSupplies" element={<RequestMedicalSupplies/>} />
             <Route path = "/RequestStationary" element={<RequestStationary/>} />
             <Route path = "/RequestToys" element={<RequestToys/>} />
             <Route path = "/RequestBloodDonations" element={<RequestBloodDonations/>} />
             <Route path = "/RequestTeaching" element={<RequestTeaching/>} />
             <Route path = "/RequestMedicalCases" element={<RequestMedicalCases/>} />
             <Route path = "/ViewDonationRequests" element={<ViewDonationRequests/>}/>
              <Route path="/donateMedicalSupplies" element={<DetailsOfMedicalSuppToBeDonated/>} />
              <Route path="/donateToys" element={<DetailsOfToysToBeDonated/>} />
              <Route path="/donateBooks" element={<DetailsOfBooksToBeDonated/>} />
              <Route path="/donateStationary" element={<DetailsOfStationaryToBeDonated/>} />
              <Route path="/donateFood" element={<DetailsOfFoodToBeDonated/>} />
              <Route path="/coordinatePickup" element={<OrgCoordinateDonationPickup/>} />
              <Route path="/donorDetails" element={<ViewDonorDetailsForFulfilledPosts/>} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/fullfilledDonations" element={<FulfilledDonations />} />
              <Route path="/schedulePickup" element={<SchedulePickup />} />
              <Route path="/donorViewAllDonations" element={<DonorMyDonations />} />
              <Route path="/donorMyDonationDetails" element={<DonorMyDonationDetails />} />
              <Route path="/delieveyPersonDashboard" element={<Dashboard />} />


            </Routes>
          </Suspense>
        </BrowserRouter>
      </CookiesProvider>
    </HelmetProvider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
