import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import './Requests.css';
import RequestInfoTeacher from './components/RequestInfoTeacher';

function Requests() {
  return (
    <div className="Requests">
      <NavBar/>
      <div className="content-container">
      <RequestInfoTeacher />
      </div>
    </div>
  );
}

export default Requests;