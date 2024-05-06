import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/AdminHomePage/app';
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
import Requests from './Requests';
import RequestInfo from './components/RequestInfo';
import AdminLogin from './LoginAmin';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavConfig from './components/AdminHomePage/Navigations/config-navigation';
import DashboardLayout from './components/AdminHomePage/Navigations/index';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Chart from './components/AdminHomePage/charts/chart';
import Main from './components/AdminHomePage/Navigations/main';
import UseChart from './components/AdminHomePage/charts/use-chart';
import AppConversionRates from './components/AdminHomePage/Views/app-conversion-rates';
import AppWebsiteVisits from './components/AdminHomePage/Views/app-website-visits';
import AppView from './components/AdminHomePage/App/app-view';
import ThemeProvider from '../src/components/AdminHomePage/theme';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
           {/* Your application components here */}
      {/* This Link component will now have access to the router context */}
      <HelmetProvider>
        <BrowserRouter>
          <Suspense>
            <App />
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>

  </React.StrictMode>
);    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
