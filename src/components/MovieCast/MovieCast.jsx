import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
    const avatarNoImage =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3Ct05TQbMP8-OQs3kIZny_cQd3UyUsn6GA&usqp=CAU';

    return (
      <main>
        <ul>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path !== null
                    ? basicImageURL + profile_path
                    : avatarNoImage
                }
                alt={name}
                width={200}
              />
              <h1>{name}</h1>
              <p>Character: {character !== '' ? character : 'No results'}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  return (
    <main>
      <p>Cast</p>
      <p>Searching...</p>
    </main>
  );
}
