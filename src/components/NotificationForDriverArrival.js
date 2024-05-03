import React, { useState } from 'react';
import { Alert, Space } from 'antd';
const App = () => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: '25%',
        position: 'fixed', bottom: '20px', right: '20px'
      }}
    >
      {visible && (
        <Alert message="Driver has arrived!" type="success" closable afterClose={handleClose} />
      )}
    </Space>
  );
};
export default App;