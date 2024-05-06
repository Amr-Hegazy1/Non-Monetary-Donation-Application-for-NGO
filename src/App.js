import './App.css';
import NavBar from './components/NavBar';
//import DetailsOfClothesToBeDonated from './components/DetailsOfClothesToBeDonated';

import NotificationForChosenPosts from './components/NotificationForChosenPosts';
import SelectDonationItems from './components/SelectDonationItems';
//import DetailsOfMedicalSuppToBeDonated from './components/DetailsOfMedicalSuppToBeDonated';
//import DetailsOfBooksToBeDonated from './components/DetailsOfBooksToBeDonated';
//import DetailsOfClothesToBeDonated from './components/DetailsOfClothesToBeDonated';
//import DetailsOfFoodToBeDonated from './components/DetailsOfFoodToBeDonated';
//import DetailsOfMedicalSuppToBeDonated from './components/DetailsOfMedicalSuppToBeDonated';
//import DetailsOfStationaryToBeDonated from './components/DetailsOfStationaryToBeDonated';
//import DetailsOfToysToBeDonated from './components/DetailsOfToysToBeDonated';
//import OrgCoordinateDonationPickup from './components/OrgCoordinateDonationPickup';
//import ViewDetailsOfFulfilledPosts from './components/ViewDetailsOfFulfilledPosts';
import ViewDonorDetailsForFulfilledPosts from './components/ViewDonorDetailsForFulfilledPosts';
import NotificationForDriverArrival from './components/NotificationForDriverArrival';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NotificationForChosenPosts/>
      <ViewDonorDetailsForFulfilledPosts/>
      <NotificationForDriverArrival/>
    </div>
  );
}

export default App;
