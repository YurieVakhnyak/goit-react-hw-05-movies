import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchData, getTrendsUrl } from 'utils/fetchData';
import { getSortedFilmography } from 'utils/functions';
import { SortButtons } from 'components/SortButtons/SortButtons';
import { Container, SortThumb } from './Home.styled';
import { MoviesList } from 'components/MovieList/MovieList';

// import { MovieItem } from 'components/MovieItem/MovieItem';
import { TrendingTitle } from 'components/TrendingTitle/TrendingTitle';
// import { Button } from 'components/BackLinkButton/BackLinkButton.styled';

export default function Home() {
  const [trending, setTrending] = useState(null);
  const [fieldSorted, setFieldSorted] = useState(null);
  // const [language, setLanguage] = useState('en');
  const [order, setOrder] = useState(true);
  const [period, setPeriod] = useState('day');
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredImageUrl, setHoveredImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  const toggleOrder = () => {
    setOrder(order ? false : true);
  };

  // const toggleLanguage = () => {
  //   setLanguage(language === 'en' ? 'ru' : 'en');
  // };
  const type = 'movie';

  useEffect(() => {
    const URL = getTrendsUrl(
      type,
      period
      // language
    );
    fetchData(URL, setTrending, setError);
  }, [
    period,
    // language
  ]);
  // console.log(language);
  const sortProps = { type, setFieldSorted, fieldSorted, toggleOrder, order };
  const movieProps = {
    hoveredId,
    setHoveredId,
    hoveredImageUrl,
    setHoveredImageUrl,
    location,
    order,
  };

  if (trending) {
    const { results } = trending;
    const sortedFilmography = getSortedFilmography(fieldSorted, results, order);

    return (
      <Container>
        {/* <Button onClick={toggleLanguage}>
          {language === 'en' ? 'English' : 'Ворожа'}
        </Button> */}
        <SortThumb>
          <SortButtons sortProps={sortProps} />
        </SortThumb>
        <TrendingTitle setPeriod={setPeriod} period={period} type={type} />
        <MoviesList {...movieProps} movies={sortedFilmography} />
      </Container>
    );
  }
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
