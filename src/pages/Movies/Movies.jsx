import { Container, LiDecor } from 'pages/Home/Home.styled';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiFilm } from 'react-icons/hi';
import { SearchBar } from '../../components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const handleSearchParams = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };
  const queryInput = searchParams.get('query') ?? '';
  const API_KEY = 'b30750fbe582936755a0930282f9befd';

  useEffect(() => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      query: queryInput,
    });

    setMovies(null);
    if (queryInput !== '' || queryInput !== null) {
      fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error('Something happened...'));
        })
        .then(movies => {
          setMovies(movies);
        })
        .catch(error => {
          setError(error);
        });
    }
  }, [queryInput]);

  if (movies) {
    return (
      <Container>
        <SearchBar value={queryInput} onSearch={handleSearchParams} />
        <ul>
          {movies.results.map(({ id, title, release_date }) => (
            <LiDecor key={id}>
              <HiFilm />
              <Link to={`${id}`} state={{ from: location }}>
                {title} ({release_date.slice(0, 4)})
              </Link>
            </LiDecor>
          ))}
        </ul>
      </Container>
    );
  }
  return (
    <Container>
      {error ? (
        error.message
      ) : (
        <SearchBar onSearch={queryInput} onSearchParams={handleSearchParams} />
      )}
    </Container>
  );
};

export default Movies;
