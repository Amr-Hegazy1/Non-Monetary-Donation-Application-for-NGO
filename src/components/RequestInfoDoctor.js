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
    <h1 className="request-info-title" style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px', color: '#620b37', fontWeight: 'bold', textAlign: 'center'}}>Doctor Request Information</h1>
    <h3 className="donor-type-header" style={{ fontFamily: 'Arial, sans-serif', fontSize: '22px', color: '#620b37', fontWeight: 'bold', textAlign: 'center'}}>Donor Type: Doctor</h3>
      <label>
        Request Notes:
        <textarea
          className="request-info-textarea"  
          name="postContent"
          defaultValue="I hope this message finds you well. My name is Paul, and I am a  am a board-certified Psychiatrist interested in offering my medical services to support your commendable initiatives.
          I am reaching out to express my genuine interest in volunteering with your organization to provide medical assistance to those in need. As a doctor committed to making a positive impact in the community, I am eager to contribute my skills and expertise towards the valuable work that your organization undertakes. Could you please provide me with more information about the medical services needed and the specific ways in which I can assist? I am open to participating in health clinics, providing telemedicine consultations, conducting health education workshops, or any other activities that align with your organization's mission and goals.
          I am fully committed to offering my services pro bono (free of charge) as a volunteer to support your organization's efforts in promoting health and well-being within the community.
          Please let me know how I can best contribute and how we can proceed further. I am looking forward to the opportunity to collaborate with your team and make a meaningful difference in the lives of individuals in need.
          Thank you for considering my offer, and I eagerly await your response.
          Best regards,
          Dr. Paul"
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