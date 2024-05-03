import React from 'react';
import { Button, notification, Space } from 'antd';
const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
         <Button style= {{backgroundColor: '#EAB1A0', borderColor: '#EAB1A0'}} type="primary" size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
        <Button style= {{backgroundColor: '#EAB1A0', borderColor: '#EAB1A0', color:'white'}} type="link" size="small" onClick={() => api.destroy()}>
          Decline
        </Button>
       
      </Space>
    );
    api.open({
      message: 'New Notification',
      description:
        'A donation post has been chosen, coordinate donation pickup now?',
      btn,
      key,
      onClose: close,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}
      style={{ backgroundColor: '#EAB1A0', borderColor: '#EAB1A0',position: 'absolute', top: '20px', right: '20px' }}>
        View New Notifications
      </Button>

    </>
  );
};
export default App;