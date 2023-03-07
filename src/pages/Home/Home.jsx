import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [trending, setTrending] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'b30750fbe582936755a0930282f9befd';

  useEffect(() => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
    });

    setTrending(null);
    fetch(`https://api.themoviedb.org/3/trending/movie/day?${searchParams}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Щось не так...'));
      })
      .then(trending => {
        setTrending(trending);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (trending) {
    return (
      <main>
        <p>Trending today</p>

        <ul>
          {trending.results.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  return (
    <main>
      <p>Trending today</p>
      <p>Searching...</p>
    </main>
  );
}
