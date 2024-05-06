import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import OrganizationList from './components/OrganizationList';
import './Organizations.css';


function Organizations() {
  return (
    <div className="Organizations">
      <NavBar />
      <OrganizationList />
    </div>
  );
}

export default Organizations;