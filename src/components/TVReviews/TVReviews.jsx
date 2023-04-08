import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  ReviewTitle,
  TextReview,
} from 'components/MovieReviews/MovieReviews.styled';
import { fetchData, getExtraInfoUrl } from 'utils/fetchData';
import { removeDuplicates } from 'utils/functions';
import { nanoid } from 'nanoid';

export default function TVReviews() {
  const [movieReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const URL = getExtraInfoUrl(id, 'tv', 'reviews');
    fetchData(URL, setMovieReviews, setError);
  }, [id]);

  if (movieReviews) {
    const { results } = movieReviews;
    const uniqueResults = removeDuplicates(results);

    if (uniqueResults.length > 0) {
      return (
        <div>
          <ul>
            {uniqueResults.map(({ author, content }) => (
              <li key={nanoid()}>
                <ReviewTitle>{author}</ReviewTitle>
                <TextReview>{content}</TextReview>
              </li>
            ))}
          </ul>
        </div>
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
