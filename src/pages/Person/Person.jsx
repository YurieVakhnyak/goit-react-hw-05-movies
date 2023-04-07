import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { BackLinkButton } from 'components/BackLinkButton/BackLinkButton';
import { Container, Title } from 'pages/Home/Home.styled';
import { MediumTitle } from 'pages/MoviesDetails/MoviesDetails.styled';
import {
  PersonContainer,
  FilmBox,
  PersonBox,
  PersonList,
  ButtonBox,
} from './Person.styled';
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
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredImageUrl, setHoveredImageUrl] = useState(null);
  const { id } = useParams();
  const location = useLocation();

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

  if (personMoovies && person) {
    const { cast } = personMoovies;
    const { name, profile_path, birthday, deathday } = person;

    const formattedBirthday = formateDate(birthday);
    const formattedDeathday = formateDate(deathday);
    const sortedFilmography = getSortedFilmography(fieldSorted, cast, order);

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
            <SortButtons
              setFieldSorted={setFieldSorted}
              toggleOrder={toggleOrder}
              fieldSorted={fieldSorted}
              order={order}
            />
            <MediumTitle style={{ textAlign: 'center', marginBottom: '20px' }}>
              Filmography
            </MediumTitle>
            <PersonList>
              {sortedFilmography.map(movie => (
                <MovieItem
                  key={movie.id}
                  movie={movie}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                  hoveredImageUrl={hoveredImageUrl}
                  setHoveredImageUrl={setHoveredImageUrl}
                  location={location}
                />
              ))}
            </PersonList>
          </FilmBox>
        </PersonContainer>
      </div>
    );
  }
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
