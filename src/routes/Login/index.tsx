import React from 'react';

import * as S from './styled';
import nebulaLogo from '../../assets/nebula-logo.png';

import stefaniniLogo from '../../assets/stefanini-logo.png';
import { Button } from 'antd';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../authConfig';

const Login: React.FC = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  }

  return (
    <S.Wrapper>
      <S.StefaniniLogo src={stefaniniLogo} alt="Stefanini" />
      <S.Container>
        <img src={nebulaLogo} alt="nebula" />
        <S.FlexContainer>
          <p>Welcome. Please sign in</p>
          <Button onClick={() => handleLogin()} type='primary'>
            Sign In
          </Button>
        </S.FlexContainer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Login;