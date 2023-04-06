import { Container, LiDecor, StyledLink } from 'pages/Home/Home.styled';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { StyledFilmIcon } from 'pages/Home/Home.styled';
import { Modal } from 'components/Modal/Modal';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { fetchData, fetchImage } from 'utils/fetchData';
import { sortByField } from 'utils/functions';
import { API_KEY, basicURL } from 'utils/constants';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredImageUrl, setHoveredImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleMouseEnter = (id, imageUrl) => {
    setHoveredId(id);
    fetchImage(imageUrl, setHoveredImageUrl);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

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
          {sortedMovies.map(
            ({ id, title, release_date, backdrop_path, overview }) => (
              <LiDecor key={id}>
                <StyledFilmIcon />
                <StyledLink
                  to={`${id}`}
                  state={{ from: location }}
                  onMouseEnter={() => handleMouseEnter(id, backdrop_path)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  {title} ({release_date?.slice(0, 4) || 'no data'})
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
