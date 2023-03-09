import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, LiDecor } from './Home.styled';
import { HiFilm } from 'react-icons/hi';

export default function Home() {
  const [trending, setTrending] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'b30750fbe582936755a0930282f9befd';

  useEffect(() => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
    });

    setTrending(null);
    fetch(`https://api.themoviedb.org/3/trending/movie/day?${searchParams}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Щось не так...'));
      })
      .then(trending => {
        setTrending(trending);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (trending) {
    return (
      <Container>
        <Title>Trending today</Title>
        <ul>
          {trending.results.map(({ id, title }) => (
            <LiDecor key={id}>
              <HiFilm />
              <Link to={`movies/${id}`}>{title}</Link>
            </LiDecor>
          ))}
        </ul>
      </Container>
    );
  }
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
