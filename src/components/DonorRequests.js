import React, { useEffect, useState } from 'react';
import { List, Input, Button } from 'antd';
import VirtualList from 'rc-virtual-list';
import { Row, Col } from 'antd';
import './DonorRequests.css';
import { message } from 'antd';

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;

const DonorRequests = () => {
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
    setData(data.filter(item => item.email !== email));
    message.error('User deleted');
  };

  const filteredData = data.filter(item => item.name.last.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='DonorRequests'>
      <h1 className='DonorRequests-header'>Donor Requests</h1>
      <Row justify="center">
      <Col span={12}>
      <Input className='search-box' 
         placeholder="Search for a Donor Requester" 
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
                style={{marginLeft: '50px'}}
                title={item.name.last}
                description={item.email}
              />
              <Button className="views-button" type="link" size="small" href='/view-donor-request-info' >View Info</Button>
            </div>
          </List.Item>
          )}
        </VirtualList>
      </List>
    </div>
  );
};

export default DonorRequests;