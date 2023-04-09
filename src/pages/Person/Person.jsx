import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchData, getTrendsUrl } from 'utils/fetchData';
import { Container } from 'pages/Home/Home.styled';
import { CastList } from 'components/MovieCast/MovieCast.styled';
import { PersonItem } from 'components/PersonItem/PersonItem';
import { TrendingTitle } from 'components/TrendingTitle/TrendingTitle';

export default function Person() {
  const [trending, setTrending] = useState(null);
  const [period, setPeriod] = useState('day');
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const URL = getTrendsUrl('person', period);
    fetchData(URL, setTrending, setError);
  }, [period]);

  if (trending) {
    const { results } = trending;
    console.log(results);

    return (
      <Container>
        <TrendingTitle setPeriod={setPeriod} period={period} type={'person'} />
        <CastList>
          {results.map(person => (
            <PersonItem key={person.id} person={person} location={location} />
          ))}
        </CastList>
      </Container>
    );
  }
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
