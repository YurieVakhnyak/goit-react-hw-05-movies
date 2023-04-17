import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchData, getTrendsUrl } from 'utils/fetchData';
import { getSortedFilmography } from 'utils/functions';
import { SortButtons } from 'components/SortButtons/SortButtons';
import { Container, SortThumb } from 'pages/Home/Home.styled';
import { TVShowList } from 'components/TVShowList/TVShowList';
import { TrendingTitle } from 'components/TrendingTitle/TrendingTitle';

export default function TVShows() {
  const [trending, setTrending] = useState(null);
  const [fieldSorted, setFieldSorted] = useState(null);
  const [order, setOrder] = useState(true);
  const [period, setPeriod] = useState('day');
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredImageUrl, setHoveredImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  const type = 'tv';

  const toggleOrder = () => {
    setOrder(order ? false : true);
  };

  useEffect(() => {
    const URL = getTrendsUrl(type, period);
    fetchData(URL, setTrending, setError);
  }, [period]);
  const movieProps = {
    hoveredId,
    setHoveredId,
    hoveredImageUrl,
    setHoveredImageUrl,
    location,
  };

  const sortProps = {
    type,
    setFieldSorted,
    fieldSorted,
    toggleOrder,
    order,
  };

  if (trending) {
    const { results } = trending;

    const sortedFilmography = getSortedFilmography(fieldSorted, results, order);

    return (
      <Container>
        <SortThumb>
          <SortButtons sortProps={sortProps} />
        </SortThumb>
        <TrendingTitle setPeriod={setPeriod} period={period} type={type} />
        <TVShowList {...movieProps} movies={sortedFilmography} />
      </Container>
    );
  }
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
