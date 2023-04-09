import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchData, getTrendsUrl } from 'utils/fetchData';
import { getSortedFilmography } from 'utils/functions';
import { SortButtons } from 'components/SortButtons/SortButtons';
import { Container, SortThumb } from './Home.styled';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { TrendingTitle } from 'components/TrendingTitle/TrendingTitle';

export default function Home() {
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
    const URL = getTrendsUrl('movie', period);
    fetchData(URL, setTrending, setError);
  }, [period]);

  if (trending) {
    const { results } = trending;
    const sortedFilmography = getSortedFilmography(fieldSorted, results, order);

    return (
      <Container>
        <SortThumb>
          <SortButtons
            setFieldSorted={setFieldSorted}
            toggleOrder={toggleOrder}
            fieldSorted={fieldSorted}
            order={order}
          />
        </SortThumb>
        <TrendingTitle setPeriod={setPeriod} period={period} type={'movie'} />
        <ul>
          {sortedFilmography.map((movie, index) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              index={index}
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
