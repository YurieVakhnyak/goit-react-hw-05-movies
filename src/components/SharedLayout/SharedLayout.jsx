import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
      <Outlet />
    </div>
  );
};
