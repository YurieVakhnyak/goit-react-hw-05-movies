import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Text, Card, CastList, Image } from './MovieCast.styled';
import { fetchData } from 'utils/fetchData';
import { searchParams, basicURL, basicSmallImageURL } from 'utils/constants';
import hasNotPhotoImage from './NoPhoto.png';

export default function MovieCast() {
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const URL = `${basicURL}/movie/${id}/credits?${searchParams}`;
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
                  <Image
                    src={
                      profile_path
                        ? basicSmallImageURL + profile_path
                        : hasNotPhotoImage
                    }
                    alt={name}
                  />
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
