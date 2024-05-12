import './OrganizationRequestInfo.css';
import { Button } from 'antd';
import { useState } from 'react';
import { message } from 'antd';

export default function OrganizationRequestInfo() {
    const [pdfUrl, setPdfUrl] = useState(process.env.PUBLIC_URL + '/dummy.pdf'); // Replace 'yourfile.pdf' with your file name
    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'organization_document.pdf'; // The name of the downloaded file
        a.click();
    };
    const handleAccept = () => {
        // Confirm accept action
        message.success('Request accepted');
      };
    
      const handleReject = () => {
        // Confirm reject action
        message.error('Request rejected');
      };

    return (
    <div className="request-info-container"> 
    <h1 className="request-info-title">Request Information</h1>
    <h3 className="donor-type-header">Organization Type: Educational</h3>
      <label>
        Request Notes:
        <textarea
          className="request-info-textarea"  
          name="postContent"
          defaultValue="I hope this message finds you well. My name is Kevin Phillips and I am reaching out on behalf of My Organization. We are interested in exploring opportunities to register with your nonprofit organization for potential donation initiatives.Our organization is committed to supporting meaningful causes and contributing to the betterment of our community. We believe in the importance of giving back and want to collaborate with established nonprofits like yours to make a positive impact.Additionally, if there are any upcoming events, projects, or campaigns where our organization's support could be of value, we would greatly appreciate receiving details on how we can get involved.Thank you for considering our interest in supporting your nonprofit's mission. We look forward to your guidance on how we can proceed with registering and participating in your donation programs.Please feel free to contact me directly at ak.64@gmail.com if you require any further information from our end.Thank you for your time and consideration. We eagerly await your response."
        />
      </label>
        <div className="button-container">
            <Button className="action-button" type="primary" size="large" onClick={handleAccept}>Accept</Button>
            <Button className="action-button" type="primary" size="large" onClick={handleReject}>Reject</Button>
            <Button className="action-button" type="primary" size="large" onClick={handleDownload}>Download</Button>
        </div>
    </div>
    );
  }