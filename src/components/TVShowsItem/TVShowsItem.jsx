import {
  LiDecor,
  StyledLink,
  StyledFilmIcon,
} from 'components/MovieItem/MovieItem.styled';
import { Modal } from 'components/Modal/Modal';
import { fetchImage } from 'utils/fetchData';
import { voteToPersent } from 'utils/functions';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const TVShowsItem = ({
  movie,
  index,
  // hoveredId,
  // setHoveredId,
  // hoveredImageUrl,
  // setHoveredImageUrl,
  // location,
}) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredImageUrl, setHoveredImageUrl] = useState(null);
  const location = useLocation();

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
        to={`/tv-shows/${id}`}
        state={{ from: location }}
        onMouseEnter={() => handleMouseEnter(id, backdrop_path)}
        onMouseLeave={() => handleMouseLeave()}
      >
        {index + 1}. {name}, ({first_air_date?.slice(0, 4) || 'no data'}),{' '}
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
