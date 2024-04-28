import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import OrganizationList from './components/OrganizationList';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#E7E3BE';
  }, []);

  return (
    <div className="App">
      <NavBar />
      <OrganizationList/>
    </div>
  );
}

export default App;