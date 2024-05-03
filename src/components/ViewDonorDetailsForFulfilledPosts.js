import React from 'react';
import { Avatar, List, } from 'antd';
import { Flex } from 'antd';
import { Divider } from 'antd';



const data = Array.from({
  length: 1,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `Selena Adams`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: 'Donor',
 

  content: (
    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', marginLeft: '35px' }}>
   <p style={{ fontFamily: 'Arial, sans-serif', fontWeight:'bold',fontSize: '20px', color: '#333', lineHeight: '1.6', marginLeft: '35px' }}> Profession:</p>
    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', marginLeft: '35px' }}> Teacher</p>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', fontWeight:'bold',marginLeft: '35px' }}>Contact Information: </p>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', marginLeft: '35px' }}>selena.adams@gmail.com</p>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6',fontWeight:'bold', marginLeft: '35px' }}> Qualifications:</p>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', marginLeft: '35px' }}>Bachelor's degree in Mathematics Education from American University in Cairo</p>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', marginLeft: '35px' }}>State teaching certification with a specialization in middle school education</p>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', marginLeft: '35px' }}>Additional training in differentiated instruction and inclusive teaching methods</p>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', fontWeight:'bold', marginLeft: '35px' }}>Contributions:</p>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333', lineHeight: '1.6', marginLeft: '35px' }}>Established a tutoring program for English language learners, helping people in need to improve their reading and writing skills</p>
       
    </p>
  ),
}));



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
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} style={{ size: 800 }} />}
            title={<a href={item.href} style={{ fontFamily: 'Arial, sans-serif', fontSize: '28px', color: '#EAB1A0', fontWeight: 'bold', textDecoration: 'none' }}>{item.title}</a>}
            description={<span style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', color: '#666', fontStyle: 'italic' }}>{item.description}</span>} />
          <Divider />
          {<span style={{ fontSize: '24px', fontFamily: 'Times New Roman, sans-serif', color: '#333', lineHeight: '1.6' }}>{item.content}</span>}

        </List.Item><Flex gap="small" wrap="wrap" style={{ justifyContent: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
 
</Flex>
</>

      )}
    />
  </>
);

export default App;
