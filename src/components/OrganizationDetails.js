import React, { useState } from 'react';
import { Avatar, List, Button, message } from 'antd';
import { Flex } from 'antd';
import { Divider } from 'antd';
import { saveAs } from 'file-saver';
import MapComponent from './MapComponent';
import { Container } from '@mui/material';
import Header from './AdminHomePage/Navigations/header';


const data = [
  {
    title: `Kevin Phillips`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=1`,
    description: 'Male',
    content: (
      <ul style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', marginLeft: '35px', listStyleType: 'disc' }}>
        <li><p style={{ fontWeight: 'bold' }}>Email:</p>ak.64@gmail.com</li>
        <p></p>
        <li><p style={{ fontWeight: 'bold' }}>Contact Number:</p>+201234567890</li>
        <p></p>
        <li><p style={{ fontWeight: 'bold' }}>Organization Name:</p>My Organization</li>
        <p></p>
        <li><p style={{ fontWeight: 'bold' }}>Organization Type:</p>Educational</li>
        <p></p>
        <li><p style={{ fontWeight: 'bold' }}>Organization Address:</p>1234 Elm St</li>
        <p></p>
        <li><p style={{ fontWeight: 'bold' }}>Area:</p>Springfield</li>
        <p></p>
        <li><p style={{ fontWeight: 'bold' }}>Governorate:</p>IL</li>
      </ul>

    ),

  },
];

const OrganizationDetails = () => {
  const [pdfUrl, setPdfUrl] = useState(process.env.PUBLIC_URL + '/dummy.pdf'); // Example PDF URL

  const handleAccept = () => {
    // Confirm accept action
    message.success('User accepted');
    setTimeout(() => {
      window.location.href = '/AdminHome?path=%2FAdminHome%2Forganizations';
    }, 1000); // Delay of 1 seconds
  };
  
  const handleReject = () => {
    // Confirm reject action
    message.error('User rejected');
    setTimeout(() => {
      window.location.href = '/AdminHome?path=%2FAdminHome%2Forganizations';
    }, 1000); // Delay of 1 seconds
  };
  const handleDownload = () => {
    // Trigger file download when the button is clicked
    saveAs(pdfUrl, 'organization_document.pdf');
  };
  return (

    <>
      <Header width="100%"/>
      <Container component="main" maxWidth="md">
        <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px', color: '#620b37', fontWeight: 'bold', textAlign: 'center', marginTop: '15%' }}>Organization Details</h1>
        <List
          itemLayout="vertical"
          size="large"
          marginCentre='35px'
          dataSource={data}
          footer={
            <div style={{
              fontSize: '20px',
              fontFamily: 'Arial, sans-serif',
              color: '#666',
              marginRight: '35px',
              textAlign: 'right'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}></div>
            </div>
          }
          renderItem={(item) => (
            <>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '22px', color: '#620b37', fontWeight: 'bold', textAlign: 'center',position: 'absolute', top: '17%',left:'60%'}}>Organizaion Location</h3>
              <MapComponent style={{ height: '500px', width: '500px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-10%, -50%)' }} />
              <List.Item
                key={item.title}
              >

                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} style={{ size: 800 }} />}
                  title={<a href={item.href} style={{ fontFamily: 'Arial, sans-serif', fontSize: '28px', color: '#620b37', fontWeight: 'bold', textDecoration: 'none' }}>{item.title}</a>}
                  description={<span style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', color: '#666', fontStyle: 'italic' }}>{item.description}</span>} />
                <Divider />
                {<span style={{ fontSize: '24px', fontFamily: 'Times New Roman, sans-serif', color: '#333', lineHeight: '1.6' }}>{item.content}</span>}
              </List.Item>
              <Flex gap="small" wrap="wrap" style={{ justifyContent: 'flex-start', marginLeft: '20px', marginTop: '20px' }} />
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                <Button type="primary" onClick={handleAccept} style={{ width: '120px', backgroundColor: '#620b37', borderColor: '#620b37' }}>Accept</Button>
                <Button type="primary" onClick={handleReject} style={{ width: '120px', backgroundColor: '#620b37', borderColor: '#620b37' }}>Reject</Button>
                <Button type="primary" onClick={handleDownload} style={{ width: '120px', backgroundColor: '#620b37', borderColor: '#620b37' }}>Download</Button>
              </div>
            </>
          )}
        />
        </Container >
      </>
    
);
  
  };

export default OrganizationDetails;