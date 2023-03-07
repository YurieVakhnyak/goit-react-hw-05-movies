import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MovieReviews() {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'b30750fbe582936755a0930282f9befd';

  useEffect(() => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
    });

    const URL = `https://api.themoviedb.org/3/movie/${id}/reviews?${searchParams}`;

    setMovieReviews(null);
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Щось не так...'));
      })
      .then(movieReviews => {
        setMovieReviews(movieReviews);
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  if (movieReviews) {
    const { results } = movieReviews;
    if (results.length > 0) {
      return (
        <main>
          <ul>
            {results.map(({ author, content }) => (
              <li key={author}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </main>
      );
    } else {
      return (
        <main>
          <p>No reviews finding</p>
        </main>
      );
    }
  }
}
