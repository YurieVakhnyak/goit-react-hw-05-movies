import { MovieItem } from 'components/MovieItem/MovieItem';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie, index) => (
        <MovieItem key={movie.id} movie={movie} index={index} />
      ))}
    </ul>
  );
};
