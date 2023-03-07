import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function MoviesDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'b30750fbe582936755a0930282f9befd';

  useEffect(() => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
    });

    const URL = `https://api.themoviedb.org/3/movie/${id}?${searchParams}`;

    setMovie(null);
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Щось не так...'));
      })
      .then(movie => {
        setMovie(movie);
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  if (movie) {
    const { backdrop_path, title, vote_average, overview, genres } = movie;
    const posterURL = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

    return (
      <main>
        <Link to="/">
          <button>Go back</button>
        </Link>
        <div>
          <img src={posterURL} alt={title} />
          <h1>{title}</h1>
          <p>User score: {Math.floor(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Additionals information</h2>
          <Link to="get-movie-credits"> Cast </Link>
          <Link to="get-movie-reviews"> Reviews </Link>
        </div>
        <Outlet />
      </main>
    );
  }
  return (
    <main>
      <p>Movie</p>
      <p>Searching...</p>
    </main>
  );
}
