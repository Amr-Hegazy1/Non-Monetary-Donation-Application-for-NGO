import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import './Requests.css';
import RequestInfo from './components/RequestInfo';

function Requests() {
  return (
    <div className="Requests">
      <NavBar />
      <div className="content-container">
      <RequestInfo />
      </div>
    </div>
  );
}

export default Requests;