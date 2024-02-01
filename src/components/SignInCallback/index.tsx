import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { useIsAuthenticated } from "@azure/msal-react";
import { Flex, Spin } from 'antd';

const SignInCallback: React.FC = () => {
  const logged = useIsAuthenticated();
  console.log('logged test', logged);

  return (
    <Flex justify='center' vertical style={{ height: '100vh' }}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    </Flex>
  );
};

export default SignInCallback;
