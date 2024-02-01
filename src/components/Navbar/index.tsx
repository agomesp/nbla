import React from 'react';
import nebulaLogo from '../../assets/nebula-logo.png'
import { FiLogOut } from 'react-icons/fi'

import * as S from './styled';
import { NavLink } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const Navbar: React.FC = () => {
  const { instance, accounts } = useMsal();
  const userName = accounts[0]?.name;

  const handleSignOut = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  }

  return (
    <S.Container>
      <section>
        <NavLink to={'/'}><img src={nebulaLogo} alt="nebula" /></NavLink>
        <div>
          <span>{userName}</span>
          <FiLogOut onClick={() => handleSignOut()} />
        </div>
      </section>
    </S.Container>
  );
}

export default Navbar;