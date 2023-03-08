import { Container, LiDecor } from 'pages/Home/Home.styled';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiFilm } from 'react-icons/hi';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'b30750fbe582936755a0930282f9befd';
  const Query = 'batman';

  useEffect(() => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      query: Query,
    });

    setMovies(null);
    //api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
    fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Щось не так...'));
      })
      .then(movies => {
        setMovies(movies);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (movies) {
    return (
      <Container>
        <ul>
          {movies.results.map(({ id, title }) => (
            <LiDecor key={id}>
              <HiFilm />
              <Link to={`movies/${id}`}>{title}</Link>
            </LiDecor>
          ))}
        </ul>
      </Container>
    );
  }
  return (
    <Container>
      <form action="">
        <input type="text" placeholder="Enter movies name" />
      </form>
    </Container>
  );
};
