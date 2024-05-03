import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Select, Space } from 'antd';
import {COLORS} from '../values/colors';
// import {Menu} from 'antd';
import { Button} from 'antd';
import CreatePostImage from './CreatePostImage.jpg'



function CreateRequestPost() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div style={{ position: 'absolute', top: 290, left: '0', width: '100%', height: '70%', backgroundImage: `url(${CreatePostImage})`, backgroundSize: 'auto' }}>
      </div>
      <Container>
        <Row>
          <Col>
            <div style={{ backgroundColor: COLORS.primaryLight, padding: '50px', border: `1px solid COLORS.primaryLight`,width: '100%', height: '30%',position:'absolute', top: 45, right: 100,left:0 }}> </div>
            </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor:COLORS.primaryLight, padding: '5px', border: COLORS.primaryLight, borderRadius: '5px', position: 'absolute', top: 102, left:420, width:'50%'}}>
                        <h2 style={{ fontSize: 53 }}>CHOOSE CATEGORY</h2>
                        </div>
              <Space wrap>
                <Select

                  defaultValue="Click Here"

                  style={{padding: '5px', border: COLORS.primaryLight, width: 400,height:50, position: 'absolute', textAlign: 'center',top: 170, left:570} }
                  
                  onChange={handleChange}
                  options={[
                    { value: 'Food', label: 'Food' },
                    { value: 'School Supplies', label: 'School Supplies' },
                    { value: 'Clothes', label: 'Clothes' },
                    { value: 'Toys', label: 'Toys' },
                    { value: 'Medical Supplies', label: 'Medical Supplies' }
                  ]}
                />
              </Space>
              <div style={{ backgroundColor:COLORS.primaryLightLessOpacity, padding: '5px', border: '1px solid #ccc', borderRadius: '5px', position: 'absolute', top: 300, right: 320,width:'50%' }}>
                <h2 style={{ fontSize: 40 }}>Request Description</h2>
                <textarea
                  style={{ width: 300, height: 100, resize: 'none', border: '1px solid #ccc', borderRadius: '5px' }}
                  placeholder="Enter text here..."
                ></textarea>
                <Button type="primary" style={{backgroundColor:COLORS.primaryLight, position: 'absolute', bottom: 10, right: 10, color:'black' }}>Create Post</Button>
              </div>
            
 
    </>
  );
}

export default CreateRequestPost;


