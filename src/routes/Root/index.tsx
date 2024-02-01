import React from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import { Outlet } from 'react-router';
import { useIsAuthenticated } from '@azure/msal-react';
import Login from '../Login';

const Root: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? (
    <>
      <DefaultLayout />
      <Outlet />
    </>
  ) : <Login />;
}

export default Root;