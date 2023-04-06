import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewTitle, TextReview } from './MovieReviews.styled';
import { fetchData } from 'utils/fetchData';
import { removeDuplicates } from 'utils/functions';
import { searchParams, basicURL } from 'utils/constants';
import { nanoid } from 'nanoid';

export default function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const URL = `${basicURL}/movie/${id}/reviews?${searchParams}`;
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
