import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchParams, basicURL } from 'utils/constants';
import { fetchData } from 'utils/fetchData';
import { getSortedFilmography } from 'utils/functions';
import { SortButtons } from 'components/SortButtons/SortButtons';
import { PeriodButtons } from 'components/PeriodButtons/PeriodButtons';
import { Container, Title, TitleBox } from './Home.styled';
import { MovieItem } from 'components/MovieItem/MovieItem';

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
    const URL = `${basicURL}/trending/movie/${period}?${searchParams}`;
    fetchData(URL, setTrending, setError);
  }, [period]);

  if (trending) {
    const { results } = trending;
    const sortedFilmography = getSortedFilmography(fieldSorted, results, order);

    return (
      <Container>
        <SortButtons
          setFieldSorted={setFieldSorted}
          toggleOrder={toggleOrder}
          fieldSorted={fieldSorted}
          order={order}
        />
        <TitleBox>
          <Title>
            {period === 'week'
              ? 'Movies trending week'
              : 'Movies trending today'}
          </Title>

          <PeriodButtons setPeriod={setPeriod} period={period} />
        </TitleBox>
        <ul>
          {sortedFilmography.map(movie => (
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
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
