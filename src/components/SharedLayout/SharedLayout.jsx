import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

import css from '../App.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav className={css.header}>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
