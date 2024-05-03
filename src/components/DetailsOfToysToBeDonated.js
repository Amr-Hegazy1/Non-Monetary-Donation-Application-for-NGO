import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  message,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const DetailsOfClothesToBeDonated = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const handleSubmit = () => {
    console.log('Form submitted');
    message.success('Details submitted');
  };

  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#EAB1A0' }}>Details of Toy to be Donated</h2>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <Form.Item label="Type:"style={{fontWeight:'bold'}} >
          <Input />
        </Form.Item>
        <Form.Item label="Age:" style={{fontWeight:'bold'}}>
          <InputNumber />
        </Form.Item>
        <Form.Item label="Gender" style={{fontWeight:'bold'}}>
          <Radio.Group>
            <Radio value="female" style={{fontWeight:'normal'}}> Female </Radio>
            <Radio value="male" style={{fontWeight:'normal'}} > Male </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Category:" style={{fontWeight:'bold'}}>
          <Input />
        </Form.Item>
        <Form.Item label="Quantity:" style={{fontWeight:'bold'}}>
          <InputNumber />
        </Form.Item>
        <Form.Item label="Color:" style={{fontWeight:'bold'}}>
          <ColorPicker />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
          <Button type="primary" htmlType="submit" style={{backgroundColor: '#EAB1A0', borderColor: '#EAB1A0', marginLeft:'160px'}} onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default DetailsOfClothesToBeDonated;
