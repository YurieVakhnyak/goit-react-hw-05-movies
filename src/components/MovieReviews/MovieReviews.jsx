import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Text } from 'components/MovieCast/MovieCast.styled';
import { ReviewTitle } from './MovieReviews.styled';

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
                <ReviewTitle>{author}</ReviewTitle>
                <Text>{content}</Text>
              </li>
            ))}
          </ul>
        </main>
      );
    } else {
      return (
        <main>
          <p>We don't have any reviews for this movie</p>
        </main>
      );
    }
  }
}
