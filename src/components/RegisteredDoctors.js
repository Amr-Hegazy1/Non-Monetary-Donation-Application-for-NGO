import React, { useEffect, useState } from 'react';
import { List, Input, Button } from 'antd';
import VirtualList from 'rc-virtual-list';
import { Row, Col } from 'antd';
import { message } from 'antd';
import { Modal } from 'antd';
import './RegisteredDoctors.css';
import Container from '@mui/material/Container';
import { Popconfirm } from 'antd';


const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = window.innerHeight - window.innerHeight * 0.16;

const RegisteredDoctors = () => {
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
    message.success('Account deleted successfully');
  };

  const filteredData = data.filter(item => item.name.last.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='RegisteredDoctors'>
      <h1 className='RegisteredDoctors-header'>Registered Doctors</h1>
      <Row justify="center">
        <Col span={12}>
          <Input className='search-box'
            placeholder="Search for a Doctor"
            onChange={e => setSearchTerm(e.target.value)}
            style={{ width: '100%' }}
          />
        </Col>
      </Row>
      <Container component="main" maxWidth="md">
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
                <div >
                  <div className="spacer"></div>
                  <List.Item.Meta
                    avatar={<img src={item.picture.thumbnail} alt="avatar" style={{
                      borderRadius: '50%', border: '2px solid #000',
                      padding: '5px'
                    }} />}
                    title={item.name.last}
                    description={item.email}
                  />
                </div>
                <Button className="view-button" type="link" size="small" href='/view-doctor-registered-info' >View Info</Button>
                <Popconfirm
                  title="Delete account?"
                  description="Are you sure to delete this account?"
                  onConfirm={() => handleDelete(item.email)}
                  okText="Yes"
                  cancelText="No"
                  okButtonProps={{ style: { width: "auto" } }}
                  cancelButtonProps={{ style: { width: "auto" } }}
                  style={{ width: "20%", marginLeft: 'auto', marginRight: '30%', margin: 7 }}
                >
                  <Button style={{ width: "20%" }}>Delete</Button>
                </Popconfirm>
              </List.Item>
            )}
          </VirtualList>
        </List>
      </Container>
    </div>
  );
};

export default RegisteredDoctors;