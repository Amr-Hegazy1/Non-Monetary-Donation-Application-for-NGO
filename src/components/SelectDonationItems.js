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
  <>
    <Title level={2} style={{ marginBottom: '20px', fontSize: '40px', color: '#EAB1A0' }}>Select an item to Donate</Title>
    <Divider/>
    <Select
      showSearch
      style={{ width: '500px', fontSize: '40px' }} 
      placeholder="Select donation items"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
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
  </>
);

export default App;
