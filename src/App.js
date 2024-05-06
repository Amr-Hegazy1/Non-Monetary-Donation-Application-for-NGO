
import './App.css';
import NavBar from './components/NavBar';

import FulfilledDonations from './components/FulfilledDonations';
import SchedulePickup from './components/SchedulePickup';
import OrganizationSignUp from './components/OrganizationSignUp';
import DonorSignUp from './components/DonorSignUp';
import Homepage from './components/Homepage.js';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src="logo.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
