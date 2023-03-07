import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MovieCast() {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(null);

  console.log('MoviemovieCast');

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
        console.log(movieCast.id);
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  if (movieCast) {
    const { cast } = movieCast;

    return (
      <main>
        <ul>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
              <h1>{name}</h1>
              <p>Character: {character}</p>
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
