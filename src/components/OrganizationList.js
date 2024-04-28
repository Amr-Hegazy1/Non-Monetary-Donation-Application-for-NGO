import React, { useEffect, useState } from 'react';
import { List, Input } from 'antd';
import VirtualList from 'rc-virtual-list';
import { Row, Col } from 'antd';
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

  const filteredData = data.filter(item => item.name.last.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>Registered Organizations</h1>
      <Row justify="center">
      <Col span={12}>
      <Input 
         placeholder="Search for an organization" 
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
              <List.Item.Meta
                title={item.name.last}
                description={item.email}
              />
            </List.Item>
          )}
        </VirtualList>
      </List>
    </div>
  );
};

export default OrganizationList;