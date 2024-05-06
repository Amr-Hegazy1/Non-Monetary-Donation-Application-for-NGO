import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import OrganizationList from './components/OrganizationList';
import './OrganizationSubmissions.css';



function OrganizationSubmissions() {
  return (
    <div className="OrganizationSubmissions">
      <NavBar />
      <OrganizationList />
    </div>
  );
}

export default OrganizationSubmissions;