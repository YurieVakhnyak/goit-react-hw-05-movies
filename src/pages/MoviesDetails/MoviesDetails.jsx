import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
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
    const { backdrop_path, title, vote_average, overview, genres } = movie;
    const posterURL = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

    return (
      <Container>
        <Box>
          <BoxInside>
            <Link to="/">
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
            <Link to="get-movie-credits"> Cast </Link>
            <Link to="get-movie-reviews"> Reviews </Link>
          </Thumb>
        </MoreInfoBox>

        <Outlet />
      </Container>
    );
  }
  return (
    <Container>
      <p>Movie</p>
      <p>Searching...</p>
    </Container>
  );
}
