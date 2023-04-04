import { Container, LiDecor } from 'pages/Home/Home.styled';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiFilm } from 'react-icons/hi';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { fetchData } from 'utils/fetchData';
import { API_KEY, basicURL } from 'utils/constants';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleSearchParams = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };
  const queryInput = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      query: queryInput,
    });
    const URL = `${basicURL}/search/movie?${searchParams}`;

    if (queryInput !== '' || queryInput !== null) {
      fetchData(URL, setMovies, setError);
    }
  }, [queryInput]);

  if (movies) {
    return (
      <Container>
        <SearchBar value={queryInput} onSearch={handleSearchParams} />
        <ul>
          {movies.results
            .sort((a, b) => b.release_date.localeCompare(a.release_date))
            .map(({ id, title, release_date }) => (
              <LiDecor key={id}>
                <HiFilm />
                <Link to={`${id}`} state={{ from: location }}>
                  {title} ({release_date?.slice(0, 4) || 'no data'})
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
