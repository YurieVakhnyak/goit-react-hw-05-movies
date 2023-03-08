import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Text, Card, CastList, Image } from './MovieCast.styled';
import myImage from './NoPhoto.png';

export default function MovieCast() {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'b30750fbe582936755a0930282f9befd';

  useEffect(() => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
    });

    const URL = `https://api.themoviedb.org/3/movie/${id}/credits?${searchParams}`;

    setMovieCast(null);
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Щось не так...'));
      })
      .then(movieCast => {
        setMovieCast(movieCast);
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  if (movieCast) {
    const { cast } = movieCast;
    const basicImageURL = 'https://image.tmdb.org/t/p/w200';

    return (
      <div>
        <CastList>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <Card>
                <Image
                  src={
                    profile_path !== null
                      ? basicImageURL + profile_path
                      : myImage
                  }
                  alt={name}
                />
                <p>{name}</p>
                <Text>
                  Character: {character !== '' ? character : 'No results'}
                </Text>
              </Card>
            </li>
          ))}
        </CastList>
      </div>
    );
  }
  return (
    <div>
      <p>Cast</p>
      <p>Searching...</p>
    </div>
  );
}
