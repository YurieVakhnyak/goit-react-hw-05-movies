import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BackLinkButton } from 'components/BackLinkButton/BackLinkButton';
import { Container, Title } from 'pages/Home/Home.styled';
import { MediumTitle } from 'pages/MoviesDetails/MoviesDetails.styled';
import {
  PersonContainer,
  FilmBox,
  PersonBox,
  PersonSortBox,
  ButtonBox,
} from './PersonDetails.styled';

import { MoviesList } from 'components/MovieList/MovieList';
import { fetchData, getImageUrl } from 'utils/fetchData';
import { getSortedFilmography, formateDate } from 'utils/functions';
import { searchParams, basicURL } from 'utils/constants';
import { SortButtons } from 'components/SortButtons/SortButtons';

export default function Person() {
  const [person, setPerson] = useState(null);
  const [personMoovies, setPersonMoovies] = useState(null);
  const [fieldSorted, setFieldSorted] = useState(null);
  const [order, setOrder] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const { id } = useParams();

  const toggleOrder = () => {
    setOrder(order ? false : true);
  };

  const backLinkHref = location.state?.from ?? '/';
  // console.log(backLinkHref);

  useEffect(() => {
    const URL = `${basicURL}/person/${id}/movie_credits?${searchParams}`;
    const personURL = `${basicURL}/person/${id}?${searchParams}`;

    fetchData(URL, setPersonMoovies, setError);
    fetchData(personURL, setPerson, setError);
  }, [id]);

  const type = 'movie';

  if (personMoovies && person) {
    const { cast } = personMoovies;
    const sortProps = { type, setFieldSorted, fieldSorted, toggleOrder, order };
    const sortedFilmography = getSortedFilmography(fieldSorted, cast, order);
    const { name, profile_path, birthday, deathday } = person;

    const formattedBirthday = formateDate(birthday);
    const formattedDeathday = formateDate(deathday);

    return (
      <div>
        <ButtonBox>
          <BackLinkButton backLinkHref={backLinkHref} />
        </ButtonBox>

        <PersonContainer>
          <PersonBox>
            <img src={getImageUrl(profile_path)} alt={name} height={281} />
            {<Title>{name}</Title>}
            <MediumTitle>
              {deathday
                ? `(${formattedBirthday} - ${formattedDeathday})`
                : `(${formattedBirthday})`}
            </MediumTitle>
          </PersonBox>

          <FilmBox>
            <PersonSortBox>
              <SortButtons sortProps={sortProps} />
            </PersonSortBox>
            <MediumTitle style={{ textAlign: 'center', marginBottom: '20px' }}>
              Filmography
            </MediumTitle>
            <MoviesList movies={sortedFilmography} />
          </FilmBox>
        </PersonContainer>
      </div>
    );
  }
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
