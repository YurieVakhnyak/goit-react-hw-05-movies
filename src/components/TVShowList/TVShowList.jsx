import { TVShowsItem } from 'components/TVShowsItem/TVShowsItem';

export const TVShowList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie, index) => (
        <TVShowsItem key={movie.id} movie={movie} index={index} />
      ))}
    </ul>
  );
};
