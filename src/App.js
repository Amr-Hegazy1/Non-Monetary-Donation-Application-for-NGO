import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import DonorList from './components/DonorList';



function App() {
  // useEffect(() => {
  //   document.body.style.backgroundColor = "white";
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <DonorList/>
    </div>
  );
}

export default App;