import { useState, useEffect } from 'react';
import { fetchData, getTrendsUrl } from 'utils/fetchData';
import { getSortedFilmography } from 'utils/functions';
import { SortButtons } from 'components/SortButtons/SortButtons';
import { Container, SortThumb } from './Home.styled';
import { MoviesList } from 'components/MovieList/MovieList';
import { TrendingTitle } from 'components/TrendingTitle/TrendingTitle';

export default function Home() {
  const [trending, setTrending] = useState(null);
  const [fieldSorted, setFieldSorted] = useState(null);
  const [order, setOrder] = useState(true);
  const [period, setPeriod] = useState('day');
  const [error, setError] = useState(null);
  // const [language, setLanguage] = useState('en');

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
        <MoviesList movies={sortedFilmography} />
      </Container>
    );
  }
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
