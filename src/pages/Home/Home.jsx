import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchData, fetchImage } from 'utils/fetchData';
import { searchParams, basicURL } from 'utils/constants';
import {
  Container,
  ButtonsThumb,
  Title,
  LiDecor,
  StyledLink,
  StyledFilmIcon,
} from './Home.styled';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/BackLinkButton/BackLinkButton.styled';

export default function Home() {
  const [trending, setTrending] = useState(null);
  const [period, setPeriod] = useState('day');
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredImageUrl, setHoveredImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (id, imageUrl) => {
    setHoveredId(id);
    fetchImage(imageUrl, setHoveredImageUrl);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  useEffect(() => {
    const URL = `${basicURL}/trending/movie/${period}?${searchParams}`;
    fetchData(URL, setTrending, setError);
  }, [period]);

  if (trending) {
    return (
      <Container>
        <Title>{period === 'week' ? 'Trending week' : 'Trending today'}</Title>
        <ButtonsThumb>
          <Button onClick={() => setPeriod('day')}>Day</Button>
          <Button onClick={() => setPeriod('week')}>Week</Button>
        </ButtonsThumb>
        <ul>
          {trending.results.map(
            ({ id, title, release_date, overview, backdrop_path }) => (
              <LiDecor key={id}>
                <StyledFilmIcon />
                <StyledLink
                  to={`movies/${id}`}
                  state={{ from: location }}
                  onMouseEnter={() => handleMouseEnter(id, backdrop_path)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  {title} ({release_date.slice(0, 4)})
                </StyledLink>
                {hoveredId === id && hoveredImageUrl && (
                  <Modal
                    hoveredImageUrl={hoveredImageUrl}
                    title={title}
                    overview={overview}
                  />
                )}
              </LiDecor>
            )
          )}
        </ul>
      </Container>
    );
  }
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
