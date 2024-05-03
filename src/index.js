import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import FulfilledDonations from './components/FulfilledDonations';
import SchedulePickup from './components/SchedulePickup';
import OrganizationSignUp from './components/OrganizationSignUp';
import DonorSignUp from './components/DonorSignUp';
import Homepage from './components/Homepage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FulfilledDonations />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
