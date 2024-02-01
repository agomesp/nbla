import React from 'react';
import { Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="error"
    title="Something Went Wrong"
    subTitle="Please contact and administrator."
  // extra={[
  //   <Button type="primary" key="back">
  //     Go Back
  //   </Button>,
  // ]}
  >
  </Result>
);

export default App;
