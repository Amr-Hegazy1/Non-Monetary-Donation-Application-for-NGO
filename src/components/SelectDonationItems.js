import React from 'react';
import { Divider, Select, Typography } from 'antd';

const { Title } = Typography;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '20vh' }}>
    <div style={{ textAlign: 'center' }}>
      <Title level={2} style={{ marginTop: '20px', fontSize: '40px', color: '#620b37', fontWeight:'bold' }}>Select an item to Donate</Title>
      <Divider/>
      <Select
        showSearch
        style={{ width: '500px', fontSize: '40px' ,height:'50px'}} 
        placeholder="Select donation items"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        dropdownStyle={{ fontSize: '30px' }} // Customize the dropdown style here
        options={[
          {
            value: 'Clothes',
            label: 'Clothes',
          },
          {
            value: 'School Supplies',
            label: 'School Supplies',
          },
          {
            value: 'Stationary Items',
            label: 'Stationary Items',
          },
          {
            value: 'Books',
            label: 'Books',
          },
          {
            value: 'Toys',
            label: 'Toys',
          },
          {
            value: 'Food',
            label: 'Food',
          },
          {
            value: 'Medical Supplies',
            label: 'Medical Supplies',
          }
        ]}
      />
    </div>
  </div>
);

export default App;
