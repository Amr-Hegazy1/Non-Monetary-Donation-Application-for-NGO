import React, { useState } from 'react';
import { DatePicker, Space, Typography, Divider, Image, TimePicker, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Untitled from './Untitled.png'; 
import { message } from 'antd';
import NavBar from './NavBar';
const { Title } = Typography;
const dateFormat = 'YYYY-MM-DD';
const timeFormat = 'HH:mm';


const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

    const success = () => {
      message
        .loading('Sending date and time to admin..', 1.5)
        .then(() => {
          message.success('Submitted!', 1.5).then(() => {
            window.location.href = '/';
          });
          
          
        })
    };
    const handleSubmit = (event) => {
      
  
      if(!selectedDate){
        message.error('Please enter Date.');
      }
      else if (!selectedTime ) {
        message.error('Please enter Time.');
      }
      else {
       success();
      }
  
  };

  return (
    <>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Image width={450} src={Untitled} />
      </div>
      <Divider />
      <Row justify="center">
        <Col>
          <Space direction="vertical" align="center">
            <DatePicker style={{ width: '400px' }} value={selectedDate} onChange={(value) =>setSelectedDate(value)} />
            <p></p>
         
            <TimePicker style={{ width: '400px' }} format={timeFormat}
            value={selectedTime} onChange={(value) =>setSelectedTime(value)}/>
            <p></p>
            <Link>
              <Button type="primary" style={{ backgroundColor: '#620b37', borderColor: '#620b37' }} onClick={handleSubmit}>Submit</Button>
            </Link>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default App;
