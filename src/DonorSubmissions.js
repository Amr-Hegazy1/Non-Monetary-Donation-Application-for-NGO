import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import DonorList from './components/DonorList';
import './DonorSubmissions.css';


function DonorSubmissions() {
  return (
    <div className="DonorSubmissions">
      <NavBar />
      <DonorList />
    </div>
  );
}

export default DonorSubmissions;