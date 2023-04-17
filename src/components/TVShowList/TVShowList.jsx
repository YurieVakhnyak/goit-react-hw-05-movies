import { TVShowsItem } from 'components/TVShowsItem/TVShowsItem';

export const TVShowList = ({ movies, ...movieProps }) => {
  return (
    <ul>
      {movies.map((movie, index) => (
        <TVShowsItem
          {...movieProps}
          key={movie.id}
          movie={movie}
          index={index}
        />
      ))}
    </ul>
  );
};
