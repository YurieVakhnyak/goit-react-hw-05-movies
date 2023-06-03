import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation, StyledNavLink } from './SharedLayout.styled';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { Button } from 'components/BackLinkButton/BackLinkButton.styled';

const clientId =
  '676815062993-8gpaproudnitoljc2665jgnm7mrmamci.apps.googleusercontent.com';

export const SharedLayout = () => {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <div>
      <header>
        <Navigation>
          <StyledNavLink to="/" activeclassname="active">
            Home
          </StyledNavLink>
          <StyledNavLink to="/tv-shows" activeclassname="active">
            TV Shows
          </StyledNavLink>
          <StyledNavLink to="/person" activeclassname="active">
            Person
          </StyledNavLink>
          <StyledNavLink to="/movies" activeclassname="active">
            Movies
          </StyledNavLink>

          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            {Object.keys(user).length != 0 && (
              <Button onClick={e => handleSignOut(e)}>Sign out</Button>
            )}
            {user && (
              <div>
                <img
                  style={{ borderRadius: '50%', width: '35px' }}
                  src={user.picture}
                ></img>
                <div src={user.name}></div>
              </div>
            )}
          </div>

          <div style={{ marginLeft: 'auto' }} id="signInDiv"></div>
        </Navigation>
      </header>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
