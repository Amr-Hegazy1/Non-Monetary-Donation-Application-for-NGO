import React, { useState } from 'react';
import { DatePicker, Space, Typography, Divider, Image, TimePicker, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Untitled from './Untitled.png'; 
import { message } from 'antd';
const { Title } = Typography;
const dateFormat = 'YYYY-MM-DD';
const timeFormat = 'HH:mm';


const App = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setSelectedDateTime(date);
  };

  const [error, setError] = useState(null);
  const handleSubmit = () => {
    if (!error) {
      console.log('Submitted:', selectedDateTime.format(`${dateFormat} ${timeFormat}`));
      message.success('Details submitted');
    
      // Add your submission logic here
    } else {
      console.log('Please select a date and time before submitting.');
      message.error('Please enter Date/Time');
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Image width={450} src={Untitled} />
      </div>
      <Divider />
      <Row justify="center">
        <Col>
          <Space direction="vertical" align="center">
            <DatePicker style={{ width: '400px' }} onChange={onChange} />
            <p></p>
         
            <TimePicker style={{ width: '400px' }} format={timeFormat} onChange={onChange} />
            <p></p>
            <Link to="/HomePage">
              <Button type="primary" style={{ backgroundColor: '#620b37', borderColor: '#620b37' }} onClick={handleSubmit}>Submit</Button>
            </Link>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default App;
