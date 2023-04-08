import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchParams, basicURL } from 'utils/constants';
import { fetchData } from 'utils/fetchData';
import { getSortedFilmography } from 'utils/functions';
import { SortButtons } from 'components/SortButtons/SortButtons';
import { PeriodButtons } from 'components/PeriodButtons/PeriodButtons';
import { Container, Title } from 'pages/Home/Home.styled';
import { TVShowsItem } from 'components/TVShowsItem/TVShowsItem';

export default function TVShows() {
  const [trending, setTrending] = useState(null);
  const [fieldSorted, setFieldSorted] = useState(null);
  const [order, setOrder] = useState(true);
  const [period, setPeriod] = useState('day');
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredImageUrl, setHoveredImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  const toggleOrder = () => {
    setOrder(order ? false : true);
  };

  useEffect(() => {
    const URL = `${basicURL}/trending/tv/${period}?${searchParams}`;
    fetchData(URL, setTrending, setError);
  }, [period]);

  if (trending) {
    const { results } = trending;
    console.log(results);

    const sortedFilmography = getSortedFilmography(fieldSorted, results, order);

    return (
      <Container>
        <SortButtons
          setFieldSorted={setFieldSorted}
          toggleOrder={toggleOrder}
          fieldSorted={fieldSorted}
          order={order}
        />
        <PeriodButtons setPeriod={setPeriod} />
        <Title>{period === 'week' ? 'Trending week' : 'Trending today'}</Title>
        <ul>
          {sortedFilmography.map(movie => (
            <TVShowsItem
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
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
