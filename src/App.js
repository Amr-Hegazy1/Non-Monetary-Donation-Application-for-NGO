import React, { useEffect } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import AdminHome from './AdminHome';
import NotificationsOrg from './components/AdminHomePage/TopNav/NotificationsOrg';
import DeliveryPersonSignUp from './components/DeliveryPersonSignUp';



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