import React, { useEffect, useState } from 'react';
import { List, Input, Button } from 'antd';
import VirtualList from 'rc-virtual-list';
import { Row, Col } from 'antd';
import { message } from 'antd';
import { Modal } from 'antd';
import './RegisteredDonors.css';

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = window.innerHeight - window.innerHeight * 0.16;

const RegisteredDonors = () => {
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

  const handleDelete = (email) => {
    Modal.confirm({
    title: 'Are you sure you want to delete this item?',
    okText: 'Yes',
    cancelText: 'Cancel',
    centered: true,
    okButtonProps: { style: { backgroundColor: 'green', borderColor: 'green', color: 'white' } },
    cancelButtonProps: { style: { backgroundColor: 'red', borderColor: 'red', color: 'white' } },
      onOk() {
        // Remove the item from the data array
  
        // Update the state
        setData(data.filter(item => item.email !== email));
  
        // Display a confirmation message
        message.success('Item deleted successfully');
      },
      onCancel() {
        // Do nothing
      },
    });
  };

  const filteredData = data.filter(item => item.name.last.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='RegisteredDonors'>
      <h1 className='RegisteredDonors-header'>Registered Donors</h1>
      <Row justify="center">
      <Col span={12}>
      <Input className='search-box' 
         placeholder="Search for a Donor" 
         onChange={e => setSearchTerm(e.target.value)} 
         style={{ maxWidth: '500px', width: '100%' }}
        />
        </Col>
        </Row>
      <List>
        <VirtualList
          data={filteredData}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="email"
          onScroll={onScroll}
        >
          {(item) => (
            <List.Item key={item.email}>
            <div className="list-item-container">
              <div className="spacer"></div>
              <List.Item.Meta
                style={{marginLeft: '150px'}}
                title={item.name.last}
                description={item.email}
              />
              </div>
              <Button className="view-button" type="link" size="small" href='/view-donor-registered-info' >View Info</Button>
              <Button className="delete-button" type="link" size="small" onClick={() => handleDelete(item.email)}>Delete</Button>
          </List.Item>
          )}
        </VirtualList>
      </List>
    </div>
  );
};

export default RegisteredDonors;