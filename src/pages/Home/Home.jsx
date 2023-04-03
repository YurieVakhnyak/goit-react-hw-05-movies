import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchData } from 'utils/fetchData';
import { searchParams, basicURL } from 'utils/constants';
import { Container, ButtonsThumb, Title, LiDecor } from './Home.styled';
import { Button } from 'components/BackLinkButton/BackLinkButton.styled';
import { HiFilm } from 'react-icons/hi';

export default function Home() {
  const [trending, setTrending] = useState(null);
  const [period, setPeriod] = useState('day');
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const URL = `${basicURL}/trending/movie/${period}?${searchParams}`;
    fetchData(URL, setTrending, setError);
  }, [period]);

  if (trending) {
    return (
      <Container>
        <ButtonsThumb>
          <Button onClick={() => setPeriod('day')}>Day</Button>
          <Button onClick={() => setPeriod('week')}>Week</Button>
        </ButtonsThumb>
        <Title>{period === 'week' ? 'Trending week' : 'Trending today'}</Title>
        <ul>
          {trending.results.map(({ id, title, release_date }) => (
            <LiDecor key={id}>
              <HiFilm />
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title} ({release_date.slice(0, 4)})
              </Link>
            </LiDecor>
          ))}
        </ul>
      </Container>
    );
  }
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
