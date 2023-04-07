import { Container } from 'pages/Home/Home.styled';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { fetchData } from 'utils/fetchData';
import { sortByField } from 'utils/functions';
import { API_KEY, basicURL } from 'utils/constants';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredImageUrl, setHoveredImageUrl] = useState(null);
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
    const sortedMovies = sortByField(movies.results, 'release_date');
    return (
      <Container>
        <SearchBar value={queryInput} onSearch={handleSearchParams} />
        <ul>
          {sortedMovies.map(movie => (
            <MovieItem
              key={movie.id}
              movie={movie}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              hoveredImageUrl={hoveredImageUrl}
              setHoveredImageUrl={setHoveredImageUrl}
              location={location}
            />
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
