import { LiDecor, StyledLink, StyledFilmIcon } from './MovieItem.styled';
import { Modal } from 'components/Modal/Modal';
import { fetchImage } from 'utils/fetchData';
import { voteToPersent } from 'utils/functions';

export const MovieItem = ({
  movie,
  index,
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

  const { id, title, release_date, overview, vote_average, backdrop_path } =
    movie;
  return (
    <LiDecor key={id}>
      {/* <div style={{ height: '24px', width: '16px' }}> */}
      <StyledFilmIcon />
      {/* </div> */}
      <StyledLink
        to={`/movies/${id}`}
        state={{ from: location }}
        onMouseEnter={() => handleMouseEnter(id, backdrop_path)}
        onMouseLeave={() => handleMouseLeave()}
      >
        {index + 1}. {title}, ({release_date?.slice(0, 4) || 'no data'}),{' '}
        {voteToPersent(vote_average)}
      </StyledLink>

      {hoveredId === id && hoveredImageUrl && (
        <Modal
          hoveredImageUrl={hoveredImageUrl}
          title={title}
          overview={overview}
        />
      )}
    </LiDecor>
  );
};
