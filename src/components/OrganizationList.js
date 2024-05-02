import React, { useEffect, useState } from 'react';
import { List, Input } from 'antd';
import VirtualList from 'rc-virtual-list';
import { Row, Col } from 'antd';
import { message } from 'antd';


const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;


const OrganizationList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e) => {
    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
      appendData();
    }
  };

  const handleDelete = (key) => {
    // Remove the row from the data array
    const newData = data.filter(item => item.key != key);
  
    // Update the state
    setData(newData);
  
    // Display a confirmation message
    message.success('Row deleted successfully');
  };

  
  const filteredData = data.filter(item => item.name.last.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div text-align ='center'>
      <h1>Registered Organizations</h1>
      <Row justify ="center">
      <Col span={12}>
      <Input  
         placeholder="Search for an organization" 
         onChange={e => setSearchTerm(e.target.value)} 
         style={{ maxWidth: '500px', width: '100%' }}
        />
        </Col>
        </Row>
      <List >
        <VirtualList
          data={filteredData}
          height={ContainerHeight}
          itemHeight={60}
          itemKey="email"
          onScroll={onScroll}
        >
          {(item) => (
            <List.Item key={item.email}>
             <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div style={{flex:1}}>
              <List.Item.Meta
                title={item.name.last}
                description={item.email}
              />
              </div>
              <button style={{
                width: '35px', 
                height: '30px', 
                background: 'red', 
                fontSize: '10px', 
                padding: '2px'
                            }} 
                onClick={() => handleDelete(item)}>
                  Delete
              </button>
             </div>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </div>
  );
};

export default OrganizationList;