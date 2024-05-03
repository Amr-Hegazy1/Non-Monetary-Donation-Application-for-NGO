import React , {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Select, Space } from 'antd';
import {COLORS} from '../values/colors';
import { Button, message} from 'antd';



function CreateRequestPost() {

  

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
      messageApi
        .open({
          type: 'loading',
          content: 'Sending request to admin..',
          duration: 1.5,
        })
        .then(() => message.success('Request sent to Admin, wait for approval :)', 2.5))
    };
  
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [requestText, setRequestText] = useState('');
  
    const handleChange = (value) => {
      console.log(`selected ${value}`);
      setSelectedCategory(value);
    };
  
    const handleTextChange = (event) => {
      setRequestText(event.target.value);
    };
  
    const handleSubmit = () => {
      if (!selectedCategory) {
        message.error('Please choose a category');
      } else if (requestText.trim() === '') {
        message.error('Please enter text');
      } else {
        success();
      }
    };
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };



  return (
    <>

      <Container>
        <Row>
          <Col>
            <div style={{ padding: '50px', border: `1px solid COLORS.primaryLight`,width: '100%', height: '10%',position:'absolute', top: 45, right: 100,left:0 }}> </div>
            </Col>
        </Row>
      </Container>
      <div  style={{ color:'#620B37', padding: '5px', border: COLORS.primaryLight, borderRadius: '5px', position: 'absolute', top: 80, left:420, width:'50%'}}>
                        <h2 style={{ fontSize: 43, fontWeight:'bold' }}>CHOOSE CATEGORY</h2>
                        </div>
              <Space wrap>
                <Select

                defaultValue="Click Here to Choose"           

                 style={{ padding: '5px', border: COLORS.primaryLight, width: 400,height:50, position: 'absolute', textAlign: 'center',top: 150, left:590, color:COLORS.yellow} }
                  
                  onChange={handleChange}
                  options={[
                    { value: 'Food', label: 'Food' },
                    { value: 'School Supplies', label: 'School Supplies' },
                    { value: 'Clothes', label: 'Clothes' },
                    { value: 'Toys', label: 'Toys' },
                    { value: 'Medical Supplies', label: 'Medical Supplies' },
                    { value: 'Blood Donations', label: 'Blood Donations' } ,
                    { value: 'Teaching', label: 'Teaching' } , 
                    { value: 'Medical Cases', label: 'Medical Cases' } 


                  ]}
                />
              </Space>
              <div style={{ backgroundColor:'rgba(98, 11, 55, 0.1)', padding: '5px', border: '1px solid #ccc', borderRadius: '5px', position: 'absolute', top: 240, right: 320,width:'50%' , height:'50%', color:'#620B37'}}>
                <h2 style={{ fontSize: 30,  }}>Request Description</h2>
                <textarea
                  style={{ width: 500, height: 250, resize: 'none', border: '1px solid #ccc', borderRadius: '5px' }}
                  onChange={handleTextChange}
                  placeholder="Enter text here..."
                ></textarea>

                <>
                  {contextHolder}

                  <Button  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleSubmit} style={{backgroundColor: hovered ? 'rgba(98, 11, 55, 0)' :'rgba(98, 11, 55, 0.6)', position: 'absolute', bottom: 10, right: 10, color:'black' }}>Create Post</Button>
                </>
              </div>

            
 
    </>
  );
}

export default CreateRequestPost;


