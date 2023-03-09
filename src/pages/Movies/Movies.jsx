import { Container, LiDecor } from 'pages/Home/Home.styled';
import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiFilm } from 'react-icons/hi';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryInput, setQueryInput] = useState('');

  const handleSearch = value => {
    setSearchParams(value !== '' ? { query: value } : {});
    setQueryInput(value);
    // console.log(value);
  };

  const handleSearchParams = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const API_KEY = 'b30750fbe582936755a0930282f9befd';

  useEffect(() => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      query: queryInput,
    });

    // console.log(`queryInput ${queryInput}`);

    setMovies(null);
    if (queryInput !== '') {
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
    }
  }, [queryInput]);

  if (movies) {
    return (
      <Container>
        <SearchBar
          onSearch={handleSearch}
          onSearchParams={handleSearchParams}
        />
        <ul>
          {movies.results.map(({ id, title }) => (
            <LiDecor key={id}>
              <HiFilm />
              <Link to={`${id}`}>{title}</Link>
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
        <SearchBar
          onSearch={handleSearch}
          onSearchParams={handleSearchParams}
        />
      )}
    </Container>
  );
};
