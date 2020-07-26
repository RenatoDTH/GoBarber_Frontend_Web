import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications/index';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-purple.svg';

function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png'
              }
              alt="Diego"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
