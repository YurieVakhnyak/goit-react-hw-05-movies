import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation, StyledNavLink } from './SharedLayout.styled';

export const SharedLayout = () => {
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
        </Navigation>
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
