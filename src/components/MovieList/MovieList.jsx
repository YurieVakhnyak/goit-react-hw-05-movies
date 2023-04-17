import { MovieItem } from 'components/MovieItem/MovieItem';

export const MoviesList = ({ movies, ...movieProps }) => {
  return (
    <ul>
      {movies.map((movie, index) => (
        <MovieItem {...movieProps} key={movie.id} movie={movie} index={index} />
      ))}
    </ul>
  );
};
