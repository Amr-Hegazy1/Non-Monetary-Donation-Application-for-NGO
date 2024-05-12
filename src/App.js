import React, { useEffect } from 'react';
import './App.css';

//import DetailsOfClothesToBeDonated from './components/DetailsOfClothesToBeDonated';
import { Divider } from 'antd';
import NotificationForChosenPosts from './components/NotificationForChosenPosts';
//import DetailsOfMedicalSuppToBeDonated from './components/DetailsOfMedicalSuppToBeDonated';
//import DetailsOfBooksToBeDonated from './components/DetailsOfBooksToBeDonated';
//import DetailsOfClothesToBeDonated from './components/DetailsOfClothesToBeDonated';
//import DetailsOfFoodToBeDonated from './components/DetailsOfFoodToBeDonated';
//import DetailsOfMedicalSuppToBeDonated from './components/DetailsOfMedicalSuppToBeDonated';
//import DetailsOfStationaryToBeDonated from './components/DetailsOfStationaryToBeDonated';
import DetailsOfToysToBeDonated from './components/DetailsOfToysToBeDonated';
//import OrgCoordinateDonationPickup from './components/OrgCoordinateDonationPickup';
import ViewDetailsOfFulfilledPosts from './components/ViewDetailsOfFulfilledPosts';
//import ViewDonorDetailsForFulfilledPosts from './components/ViewDonorDetailsForFulfilledPosts';
//import NotificationForDriverArrival from './components/NotificationForDriverArrival';
import NavBar from './components/NavBar';
import AdminHome from './AdminHome';
import NotificationsOrg from './components/AdminHomePage/TopNav/NotificationsOrg';
import DeliveryPersonSignUp from './components/DeliveryPersonSignUp';

//import FulfilledDonations from './components/FulfilledDonations';
//import DetailsOfToysToBeDonated from './components/DetailsOfToysToBeDonated';


function App() {
  return (
    <div className="App">
     <NotificationsOrg/>

    <NavBar />
    <DeliveryPersonSignUp/>
 
  
  </div>
);
}

export default App;