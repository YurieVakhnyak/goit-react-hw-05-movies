import { useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Title } from 'pages/Home/Home.styled';
import { BackLinkButton } from 'components/BackLinkButton/BackLinkButton';
import { fetchData, getImageUrl } from 'utils/fetchData';
import { formateDate, voteToPersent } from 'utils/functions';
import { searchParams, basicURL } from 'utils/constants';
import { StyledNavLink } from 'components/SharedLayout/SharedLayout.styled';
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
      production_countries,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = movie;

    return (
      <Container>
        <Box>
          <BoxInside>
            <BackLinkButton backLinkHref={backLinkHref} />
            <ImageFilm
              src={getImageUrl(backdrop_path, false, 'media')}
              alt={title}
            />
          </BoxInside>
          <InfoBox>
            <Title>{title}</Title>
            <p>User score: {voteToPersent(vote_average)}</p>
            <p>Release date: {formateDate(release_date)}</p>
            <MediumTitle>Overview</MediumTitle>
            <p>{overview}</p>
            <MediumTitle>Origin country</MediumTitle>
            <GenreList>
              {production_countries.map((country, index) => (
                <li key={index}>{country.name}</li>
              ))}
            </GenreList>
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
            <StyledNavLink
              to="get-movie-credits"
              state={{ from: location.state?.from }}
              activeclassname="active"
            >
              Cast
            </StyledNavLink>
            <StyledNavLink
              to="get-movie-reviews"
              state={{ from: location.state?.from }}
              activeclassname="active"
            >
              Reviews
            </StyledNavLink>
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
