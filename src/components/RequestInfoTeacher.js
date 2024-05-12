import './RequestInfo.css';
import { Button } from 'antd';
import { useState } from 'react';
import { message } from 'antd';

export default function RequestInfo() {
    const [pdfUrl, setPdfUrl] = useState(process.env.PUBLIC_URL + '/dummy.pdf'); // Replace 'yourfile.pdf' with your file name
    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'Donor Resume.pdf'; // The name of the downloaded file
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
    <h1 className="request-info-title" style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px', color: '#620b37', fontWeight: 'bold', textAlign: 'center'}}>Teacher Request Information</h1>
<h3 className="donor-type-header" style={{ fontFamily: 'Arial, sans-serif', fontSize: '22px', color: '#620b37', fontWeight: 'bold', textAlign: 'center'}}>Donor Type: Teacher</h3>
      <label>
        Request Notes:
        <textarea
          className="request-info-textarea"  
          name="postContent"
          defaultValue="I am writing to express my interest in volunteering as a teacher with your esteemed organization. My name is John and I am passionate about education and giving back to the community.I have PhD in Mathematics. Teaching has always been a fulfilling endeavor for me, and I am eager to contribute my skills to support your organization's mission. I believe in the transformative power of education and its ability to empower individuals and communities. I have experience teaching students of all ages and backgrounds, and I am committed to creating a positive and inclusive learning environment. Please find attached my resume for your review. Thank you for considering my application. I look forward to the opportunity to contribute to your organization and make a positive difference through education. I am excited about the potential to collaborate and support your mission.
          
          Warm regards,
          John Doe
          287908810
          john.brown@gmail.com"
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