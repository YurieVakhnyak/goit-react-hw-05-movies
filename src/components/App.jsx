import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);
const TVShowsDetails = lazy(() =>
  import('../pages/TVShowsDetails/TVShowsDetails')
);
const TVShows = lazy(() => import('pages/TVShows/TVShows'));
const Person = lazy(() => import('pages/Person/Person'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const TVReviews = lazy(() => import('./TVReviews/TVReviews'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const TVCast = lazy(() => import('./TVCast/TVCast'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="person/:id" element={<Person />}></Route>

        <Route path="movies" element={<Movies />}></Route>
        <Route path="tv-shows" element={<TVShows />}></Route>

        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="get-movie-credits" element={<MovieCast />} />
          <Route path="get-movie-reviews" element={<MovieReviews />} />
        </Route>
        <Route path="tv-shows/:id" element={<TVShowsDetails />}>
          <Route path="get-tv-credits" element={<TVCast />} />
          <Route path="get-tv-reviews" element={<TVReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
