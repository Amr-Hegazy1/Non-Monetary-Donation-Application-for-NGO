import React from 'react';
import { notification, Space } from 'antd';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from 'antd';
s

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
        <Link to="/coordinatePickup">
        <Button
          style={{ backgroundColor: '#620b37', borderColor: '#620b37' }}
          type="primary"
          size="small"
          onClick={() => api.destroy(key)}
        >
          Confirm
        </Button>
        </Link>
        <Button
          style={{
            backgroundColor: '#620b37',
            borderColor: '#620b37',
            color: 'white',
          }}
          type="link"
          size="small"
          onClick={() => api.destroy()}
        >
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
      <NotificationsIcon
        onClick={openNotification}
        style={{ position: 'absolute', top: '50px', right: '20px', cursor: 'pointer' }}
      />
    </>
  );
};

export default App;
