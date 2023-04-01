import { useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Container, Title } from 'pages/Home/Home.styled';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import {
  MediumTitle,
  GenreList,
  BoxInside,
  Box,
  Thumb,
  InfoBox,
  MoreInfoBox,
  Button,
} from './MoviesDetails.styled';

export default function MoviesDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';

  const API_KEY = 'b30750fbe582936755a0930282f9befd';

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

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
    const {
      backdrop_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = movie;
    const posterURL = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

    const date = new Date(release_date);
    const formattedDate = date.toUTCString().slice(5, 16);

    return (
      <Container>
        <Box>
          <BoxInside>
            <Link to={backLinkHref}>
              <Button>
                <FaLongArrowAltLeft />
                Go back
              </Button>
            </Link>
            <img src={posterURL} alt={title} />
          </BoxInside>
          <InfoBox>
            <Title>{title}</Title>
            <p>User score: {Math.floor(vote_average * 10)}%</p>
            <p>Release date: {formattedDate}</p>
            <MediumTitle>Overview</MediumTitle>
            <p>{overview}</p>
            <MediumTitle>Genres</MediumTitle>
            <GenreList>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </GenreList>
          </InfoBox>
        </Box>
        <MoreInfoBox>
          <MediumTitle>Additionals information</MediumTitle>
          <Thumb>
            <Link to="get-movie-credits" state={{ from: location.state.from }}>
              Cast
            </Link>
            <Link to="get-movie-reviews" state={{ from: location.state.from }}>
              Reviews
            </Link>
          </Thumb>
        </MoreInfoBox>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    );
  }
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
