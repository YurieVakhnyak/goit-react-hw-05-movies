import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Text } from 'components/MovieCast/MovieCast.styled';
import { ReviewTitle } from './MovieReviews.styled';
import { fetchData } from 'utils/fetchData';
import { searchParams, basicURL } from 'utils/constants';

export default function MovieReviews() {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL = `${basicURL}/movie/${id}/reviews?${searchParams}`;
    fetchData(URL, setMovieReviews, setError);
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
          {error ? error.message : <p>We couldn't find any reviews</p>}
        </main>
      );
    }
  }
}
