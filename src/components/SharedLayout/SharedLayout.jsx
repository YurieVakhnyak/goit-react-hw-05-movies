import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation, StyledNavLink } from './SharedLayout.styled';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { Button } from 'components/BackLinkButton/BackLinkButton.styled';
import { Text } from 'components/MovieCast/MovieCast.styled';

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
    const initializeGoogleSignIn = async () => {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCallbackResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        {
          theme: 'outline',
          size: 'large',
        }
      );
    };

    initializeGoogleSignIn();
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
              marginRight: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            {Object.keys(user).length !== 0 && (
              <Button onClick={e => handleSignOut(e)}>Sign out</Button>
            )}
            {user && (
              <div>
                <img
                  style={{ borderRadius: '50%', width: '35px' }}
                  src={user.picture}
                  alt={user.name}
                ></img>
                <Text>{user.name}</Text>
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
