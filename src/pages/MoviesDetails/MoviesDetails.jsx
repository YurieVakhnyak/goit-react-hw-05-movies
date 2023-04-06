import { useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Container, Title } from 'pages/Home/Home.styled';
import { BackLinkButton } from 'components/BackLinkButton/BackLinkButton';
import { fetchData } from 'utils/fetchData';
import { formateDate, voteToPersent } from 'utils/functions';
import { searchParams, basicURL, basicBigImageURL } from 'utils/constants';
import {
  MediumTitle,
  GenreList,
  BoxInside,
  ImageFilm,
  Box,
  Thumb,
  InfoBox,
  MoreInfoBox,
} from './MoviesDetails.styled';
import hasNotPosterImage from '../../images/NoFilmImage.png';

export default function MoviesDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const URL = `${basicURL}/movie/${id}?${searchParams}`;
    fetchData(URL, setMovie, setError);
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
    const posterURL = `${basicBigImageURL}${backdrop_path}`;

    return (
      <Container>
        <Box>
          <BoxInside>
            <BackLinkButton backLinkHref={backLinkHref} />
            <ImageFilm
              src={backdrop_path ? posterURL : hasNotPosterImage}
              alt={title}
            />
          </BoxInside>
          <InfoBox>
            <Title>{title}</Title>
            <p>User score: {voteToPersent(vote_average)}</p>
            <p>Release date: {formateDate(release_date)}</p>
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
            <Link to="get-movie-credits" state={{ from: location.state?.from }}>
              Cast
            </Link>
            <Link to="get-movie-reviews" state={{ from: location.state?.from }}>
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
