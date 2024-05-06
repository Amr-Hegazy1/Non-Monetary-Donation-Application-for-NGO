import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
 import ViewDonationRequests from './components/ViewDonationRequests';
import ViewEstimatedArrival from './components/ViewEstimatedArrival';
  import CreatePost from './components/CreatePost';
//  import ViewRequestImage from './components/ViewRequestImage.jpg';
 import React from 'react';
  import {Button} from 'antd';
  import  { useState} from 'react';
//import FulfilledDonations from './components/FulfilledDonations';
//import DetailsOfToysToBeDonated from './components/DetailsOfToysToBeDonated';


function App() {
  return (
  

    <div className="App">
    <NavBar />
    {/* <CreatePost/> */}
    <CreatePost/>
    {/* <ViewDonationRequests/>  */}

    {/* {!buttonClicked && (
      <Button
        type="primary"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleButtonClick} 
        style={{ backgroundColor: hovered ? 'rgba(98, 11, 55, 0.3)' : '#620B37', color: 'white', position: 'absolute', top: 140, left: 605, padding: '28px', display: 'flex', fontSize: 25, alignItems: 'center', justifyContent: 'center' }}>
        VIEW DONATION REQUESTS
      </Button>
    )}

    {buttonClicked && <ViewDonationRequests />} */}
    
    <header className="App-header"></header>
  </div>
);
}

export default App;