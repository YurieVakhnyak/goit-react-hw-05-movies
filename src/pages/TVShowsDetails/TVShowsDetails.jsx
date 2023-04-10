import { useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Title } from 'pages/Home/Home.styled';
import { BackLinkButton } from 'components/BackLinkButton/BackLinkButton';
import { fetchData, getImageUrl } from 'utils/fetchData';
import { formateDate, voteToPersent, getCountryName } from 'utils/functions';
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
    console.log('TV:', movie);

    const {
      backdrop_path,
      origin_country,
      number_of_episodes,
      number_of_seasons,
      name,
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
            <ImageFilm src={getImageUrl(backdrop_path)} alt={name} />
          </BoxInside>
          <InfoBox>
            <Title style={{ padding: '10px 0 10px 0' }}>{name}</Title>
            <div style={{ columnCount: 2 }}>
              <p>User score: {voteToPersent(vote_average)}</p>
              <p>Number of episodes: {number_of_episodes}</p>
              <p>Number of seasons: {number_of_seasons}</p>
              <p>First air date: {formateDate(first_air_date)}</p>
              <p>Last air date: {formateDate(last_air_date)}</p>
            </div>
            <MediumTitle>Overview</MediumTitle>
            <p>{overview}</p>
            <MediumTitle>Origin country</MediumTitle>
            <GenreList>
              {origin_country.map((country, index) => (
                <li key={index}>{getCountryName(country)}</li>
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
              to="get-tv-credits"
              state={{ from: location.state?.from }}
              activeclassname="active"
            >
              Cast
            </StyledNavLink>
            <StyledNavLink
              to="get-tv-reviews"
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
