import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navigation } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/tv-shows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
