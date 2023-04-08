import { useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Container, Title } from 'pages/Home/Home.styled';
import { BackLinkButton } from 'components/BackLinkButton/BackLinkButton';
import { fetchData, getImageUrl } from 'utils/fetchData';
import { formateDate, voteToPersent } from 'utils/functions';
import { searchParams, basicURL } from 'utils/constants';
import {
  MediumTitle,
  GenreList,
  BoxInside,
  ImageFilm,
  Box,
  Thumb,
  InfoBox,
  MoreInfoBox,
} from '../MoviesDetails/MoviesDetails.styled';

export default function TVShowsDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const URL = `${basicURL}/tv/${id}?${searchParams}`;
    fetchData(URL, setMovie, setError);
  }, [id]);

  if (movie) {
    console.log(movie);

    const {
      backdrop_path,
      title,
      first_air_date,
      last_air_date,
      vote_average,
      overview,
      genres,
    } = movie;

    return (
      <Container>
        <Box>
          <BoxInside>
            <BackLinkButton backLinkHref={backLinkHref} />
            <ImageFilm src={getImageUrl(backdrop_path)} alt={title} />
          </BoxInside>
          <InfoBox>
            <Title>{title}</Title>
            <p>User score: {voteToPersent(vote_average)}</p>
            <p>First air date: {formateDate(first_air_date)}</p>
            <p>Last air date: {formateDate(last_air_date)}</p>
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
            <Link to="get-tv-credits" state={{ from: location.state?.from }}>
              Cast
            </Link>
            <Link to="get-tv-reviews" state={{ from: location.state?.from }}>
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
