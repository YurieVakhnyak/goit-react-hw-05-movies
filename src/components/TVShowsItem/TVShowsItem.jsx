import {
  LiDecor,
  StyledLink,
  StyledFilmIcon,
} from 'components/MovieItem/MovieItem.styled';
import { Modal } from 'components/Modal/Modal';
import { fetchImage } from 'utils/fetchData';
import { voteToPersent } from 'utils/functions';

export const TVShowsItem = ({
  movie,
  hoveredId,
  setHoveredId,
  hoveredImageUrl,
  setHoveredImageUrl,
  location,
}) => {
  const handleMouseEnter = (id, imageUrl) => {
    setHoveredId(id);
    fetchImage(imageUrl, setHoveredImageUrl);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const { id, name, first_air_date, overview, vote_average, backdrop_path } =
    movie;
  return (
    <LiDecor key={id}>
      <StyledFilmIcon />
      <StyledLink
        to={`/tv/${id}`}
        state={{ from: location }}
        onMouseEnter={() => handleMouseEnter(id, backdrop_path)}
        onMouseLeave={() => handleMouseLeave()}
      >
        {name}, ({first_air_date?.slice(0, 4) || 'no data'}),{' '}
        {voteToPersent(vote_average)}
      </StyledLink>

      {hoveredId === id && hoveredImageUrl && (
        <Modal
          hoveredImageUrl={hoveredImageUrl}
          title={name}
          overview={overview}
        />
      )}
    </LiDecor>
  );
};
