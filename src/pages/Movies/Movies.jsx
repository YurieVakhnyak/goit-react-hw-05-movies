import { Container } from 'pages/Home/Home.styled';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { MoviesList } from '../../components/MovieList/MovieList';
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

  const movieProps = {
    hoveredId,
    setHoveredId,
    hoveredImageUrl,
    setHoveredImageUrl,
    location,
  };

  if (movies) {
    const sortedMovies = sortByField(movies.results, 'release_date');
    return (
      <Container>
        <SearchBar value={queryInput} onSearch={handleSearchParams} />
        <MoviesList {...movieProps} movies={sortedMovies} />
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
