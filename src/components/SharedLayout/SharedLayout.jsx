import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation, StyledNavLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <Navigation>
          <StyledNavLink exact to="/" activeClassName="active">
            Home
          </StyledNavLink>
          <StyledNavLink to="/tv-shows" activeClassName="active">
            TV Shows
          </StyledNavLink>
          <StyledNavLink to="/person" activeClassName="active">
            Person
          </StyledNavLink>
          <StyledNavLink to="/movies" activeClassName="active">
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
