import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { SharedLayout } from './SharedLayout/SharedLayout';
import MoviesDetails from '../pages/MoviesDetails/MoviesDetails';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path="somemovies" element={<div>Some Movies</div>} />
        </Route>
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="get-movie-credits" element={<MovieCast />} />
          <Route path="get-movie-reviews" element={<MovieReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
