import React, { useState } from 'react';
import { DatePicker, TimePicker, Space, Select, Typography, Divider, Button } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const { Option } = Select;
const { Title } = Typography;

const dateFormat = 'YYYY-MM-DD';
const timeFormat = 'HH:mm';

const PickerWithType = ({ type, onChange }) => {
  if (type === 'time') return <TimePicker format={timeFormat} picker="time" onChange={onChange} style={{ fontSize: '50px', width: '220px' }} />;
  return <DatePicker format={dateFormat} picker="large" onChange={onChange} style={{ fontSize: '50px', width: '220px' }} />;
};

const App = () => {
  const [type, setType] = useState('time');
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDone = () => {
    // Handle the "Done" button click event
    console.log('Selected Date and Time:', selectedDateTime);
  };

  const handleDateTimeChange = (value) => {
    setSelectedDateTime(value);
  };

  return (
    <>
      <Title level={2} style={{ marginBottom: '50px', fontSize: '40px', color: '#EAB1A0' }}>Coordinate Donation Pickup</Title>
      <Divider />
      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Choose a Suitable Date and Time</p>
      <Space>
        <Select value={type} onChange={setType} style={{ fontSize: '40px' }}>
          <Option value="time">Time</Option>
          <Option value="date">Date</Option>
        </Select>
        <PickerWithType
          type={type}
          onChange={handleDateTimeChange}
          style={{ fontSize: '50px' }}
        />
      </Space>

      <Space>
      </Space>
      {selectedDateTime && (
        <p style={{ fontSize: '15px', fontStyle: 'italic', marginTop: '20px' }}>Selected Date and Time: {selectedDateTime.format(`${dateFormat} ${timeFormat}`)}</p>
      )}
    </>
  );
};

export default App;
