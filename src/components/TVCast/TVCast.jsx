import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Text,
  Card,
  CastList,
  Image,
} from 'components/MovieCast/MovieCast.styled';
import { fetchData, getImageUrl, getExtraInfoUrl } from 'utils/fetchData';

export default function TVCast() {
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  console.log('movieCast:', location);

  useEffect(() => {
    const URL = getExtraInfoUrl(id, 'tv', 'cast');
    fetchData(URL, setMovieCast, setError);
  }, [id]);

  if (movieCast) {
    const { cast } = movieCast;

    return (
      <div>
        <CastList>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <Link to={`/person/${id}`} state={{ from: location }}>
                <Card>
                  <Image src={getImageUrl(profile_path, true)} alt={name} />
                  <p>{name}</p>
                  <Text>
                    Character: {character !== '' ? character : 'No results'}
                  </Text>
                </Card>
              </Link>
            </li>
          ))}
        </CastList>
      </div>
    );
  }
  return <div>{error ? error.message : <p>Searching...</p>}</div>;
}
