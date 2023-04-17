import { MovieItem } from 'components/MovieItem/MovieItem';
import { sortByField } from 'utils/functions';

export const MoviesList = ({ movies, ...movieProps }) => {
  const sortedMovies = sortByField(movies.results, 'release_date');
  return (
    <ul>
      {sortedMovies.map((movie, index) => (
        <MovieItem {...movieProps} key={movie.id} movie={movie} index={index} />
      ))}
    </ul>
  );
};
