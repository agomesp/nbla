import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './themes/light';
import { ConfigProvider } from 'antd';
import GlobalStyle from './styles/global'
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { Toast } from './components/Toast';


const Wrapper: React.FC = () => {

  const antdConfig = {
    components: {
      Button: {
        borderRadius: 22,
        paddingContentHorizontal: 25,
        paddingContentVertical: 40,
      }
    },
    token: {
      colorPrimary: light.palette.PRIMARY.MAIN,
      fontFamily: "'Open Sans', sans-serif",
      borderRadiusSM: 22,
      colorBorder: light.palette.BACKGROUND.BORDER,
    },
  }

  return (
    <ThemeProvider theme={light}>
      <ConfigProvider
        theme={antdConfig}
      >
        <Toast />
        <RouterProvider router={router}>
        </RouterProvider>
        <GlobalStyle />
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default Wrapper;