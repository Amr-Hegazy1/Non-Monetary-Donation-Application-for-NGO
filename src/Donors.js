import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import DonorList from './components/DonorList';
import "./Donors.css";

function Donors() {
  return (
    <div className="Donors">
      <NavBar />
      <DonorList />
    </div>
  );
}

export default Donors;