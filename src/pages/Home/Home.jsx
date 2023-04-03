import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchData } from 'utils/fetchData';
import { searchParams, basicURL } from 'utils/constants';
import { Container, Title, LiDecor } from './Home.styled';
import { HiFilm } from 'react-icons/hi';

export default function Home() {
  const [trending, setTrending] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const URL = `${basicURL}//trending/movie/day?${searchParams}`;
    fetchData(URL, setTrending, setError);
  }, []);

  if (trending) {
    return (
      <Container>
        <Title>Trending today</Title>
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
