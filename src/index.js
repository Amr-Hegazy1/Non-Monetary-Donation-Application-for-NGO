import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donors from './Donors';
import AdminDashboard from './DonorSubmission';
import DonorList from './components/DonorList';
import VerifyCodePage from './components/Verify';
import AdminHome from './AdminHome';
import DonorSubmission from './DonorSubmission';
import Password from 'antd/es/input/Password';
import PasswordManagement from './PasswordManagement';
import OrganizationList from './components/OrganizationList';
import Organizations from './Organizations';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Organizations/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
