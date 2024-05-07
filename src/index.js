import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from '../src/components/AdminHomePage/theme';


import PasswordManagement from './PasswordManagement';

import RequestInfo from './components/RequestInfo';
import AdminLogin from './LoginAmin';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';
import DetailsOfClothesToBeDonated from './components/DetailsOfClothesToBeDonated';
import AdminApp from './components/AdminHomePage/AdminApp';
import VerifyCodePage from './components/Verify';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
           {/* Your application components here */}
      {/* This Link component will now have access to the router context */}
      <HelmetProvider>
        <BrowserRouter>
          <Suspense>
              <AdminApp/>
           {/* <Routes>
              <Route path="/" element={<App/>} />
              <Route path="/donateClothes" element={<DetailsOfClothesToBeDonated/>} />
              <Route path="/view-donor-request-info" element={<RequestInfo/>} />
              <Route path="/AdminLogin" element={<AdminLogin/>} />
              <Route path="/AdminHome" element={<AdminApp/>} />
              <Route path="/ChangePassword" element={<PasswordManagement/>} />
              <Route path="/Verify" element={<VerifyCodePage/>} />   
                </Routes> */}
             
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>

  </React.StrictMode>
);    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
