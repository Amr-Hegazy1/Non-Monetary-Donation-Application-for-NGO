import React from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import { Flex } from 'antd';
import { Divider } from 'antd';
import { Button } from 'antd';


const data = Array.from({
  length: 1,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `Warmth for All Foundation`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: 'Winter Clothes Donation',
 

  content: (
    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', marginLeft: '35px' }}>
      Donate warm winter clothing items like coats, sweaters, hats, gloves, and scarves to keep individuals warm.
      <p>All donations will be distributed to those in need within our community.</p>
       
    </p>
  ),
  
}));

const IconText = ({ icon, text }) => (
  <Space style={{ marginLeft: '35px' }}>
    {React.createElement(icon)}
    {text}
  </Space>
);

const App = () => (
  <>

    <List
      itemLayout="vertical"
      size="large"
      marginCentre= '35px'
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={data}
      footer={
        <div style={{ 
          fontSize: '20px', 
          fontFamily: 'Arial, sans-serif', 
          color: '#666', 
          marginRight: '35px', 
          textAlign: 'right' 
        }}>
        
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
   
    
   
  </div>
        </div>
      }      renderItem={(item) => (
        <><List.Item
          key={item.title}
          actions={[
            <IconText icon={StarOutlined} text="156" style={{ fontSize: '1000px', width: '300px', marginLeft: '50px' }} key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text="156" style={{ fontSize: '1000px', width: '300px', marginLeft: '50px' }} key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="2" style={{ fontSize: '1000px', width: '300px', marginLeft: '50px' }} key="list-vertical-message" />,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} style={{ size: 800 }} />}
            title={<a href={item.href} style={{ fontFamily: 'Arial, sans-serif', fontSize: '28px', color: '#620b37', fontWeight: 'bold', textDecoration: 'none' }}>{item.title}</a>}
            description={<span style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', color: '#666', fontStyle: 'italic' }}>{item.description}</span>} />
          <Divider />
          {<span style={{ fontSize: '24px', fontFamily: 'Times New Roman, sans-serif', color: '#333', lineHeight: '1.6' }}>{item.content}</span>}

        </List.Item><Flex gap="small" wrap="wrap" style={{ justifyContent: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
 
        <div style={{ marginLeft: '30px', fontSize: '19px', marginBottom: '10px' }}>
      <b>Status: Fulfilled</b>
    </div>
</Flex>
<Button type="primary" style={{ backgroundColor: '#620b37', borderColor: '#620b37', marginLeft: '50px', marginBottom: '10px' }}>View Donor Details</Button>
</>

      )}
    />
  </>
);

export default App;
