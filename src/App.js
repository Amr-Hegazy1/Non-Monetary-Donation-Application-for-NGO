import './App.css';
import NavBar from './components/NavBar';
// import ViewDonationRequests from './components/ViewDonationRequests';
import ViewEstimatedArrival from './components/ViewEstimatedArrival';
//  import CreatePost from './components/CreatePost';
//  import ViewRequestImage from './components/ViewRequestImage.jpg';
 import React from 'react';
//  import {Button} from 'antd';
//  import  { useState} from 'react';


function App() {
  const [buttonClicked, setButtonClicked] = useState(false);


  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };  
   const handleButtonClick = () => {
     setButtonClicked(true);
 }
  return (
  

    <div className="App">
    <NavBar />
    {/* <ViewEstimatedArrival/> */}
    {/* <CreatePost/>  */}

    {!buttonClicked && (
      <Button
        type="primary"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleButtonClick} 
        style={{ backgroundColor: hovered ? 'rgba(230, 220, 211, 0.8)' : '#620B37', color: 'white', position: 'absolute', top: 140, left: 625, padding: '28px', display: 'flex', fontSize: 25, alignItems: 'center', justifyContent: 'center' }}>
        VIEW DONATION REQUESTS
      </Button>
    )}

    {buttonClicked && <ViewDonationRequests />}
    
    <header className="App-header"></header>
  </div>
);
}

export default App;
