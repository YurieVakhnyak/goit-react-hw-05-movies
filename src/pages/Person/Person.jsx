import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, LiDecor, Title } from 'pages/Home/Home.styled';
import { Button, MediumTitle } from 'pages/MoviesDetails/MoviesDetails.styled';
import {
  PersonContainer,
  FilmBox,
  PersonBox,
  PersonList,
  ButtonBox,
} from './Person.styled';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { HiFilm } from 'react-icons/hi';
import { fetchData } from 'utils/fetchData';
import { formateDate } from 'utils/functions';
import { searchParams, basicURL, basicBigImageURL } from 'utils/constants';
import hasNotPhotoImage from '../../components/MovieCast/NoPhoto.png';

export default function Person() {
  const [person, setPerson] = useState(null);
  const [personMoovies, setPersonMoovies] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';
  console.log(backLinkHref);

  useEffect(() => {
    const URL = `${basicURL}/person/${id}/movie_credits?${searchParams}`;
    const personURL = `${basicURL}/person/${id}?${searchParams}`;

    fetchData(URL, setPersonMoovies, setError);
    fetchData(personURL, setPerson, setError);
  }, [id]);

  if (personMoovies && person) {
    const { name, profile_path, birthday, deathday } = person;

    const formattedBirthday = formateDate(birthday);
    const formattedDeathday = formateDate(deathday);

    return (
      <div>
        <ButtonBox>
          <Link to={backLinkHref}>
            <Button>
              <FaLongArrowAltLeft />
              Go back
            </Button>
          </Link>
        </ButtonBox>
        <PersonContainer>
          <PersonBox>
            <img
              src={
                profile_path
                  ? basicBigImageURL + profile_path
                  : hasNotPhotoImage
              }
              alt={name}
              height={281}
            />
            {<Title>{name}</Title>}
            <MediumTitle>
              {deathday
                ? `(${formattedBirthday} - ${formattedDeathday})`
                : `(${formattedBirthday})`}
            </MediumTitle>
          </PersonBox>
          <FilmBox>
            <MediumTitle style={{ textAlign: 'center', marginBottom: '20px' }}>
              Filmography
            </MediumTitle>
            <PersonList>
              {personMoovies.cast.map(({ id, title, release_date }) => (
                <LiDecor key={id}>
                  <HiFilm />
                  <Link to={`/movies/${id}`} state={{ from: location }}>
                    {title} ({release_date?.slice(0, 4) ?? '- - - -'})
                  </Link>
                </LiDecor>
              ))}
            </PersonList>
          </FilmBox>
        </PersonContainer>
      </div>
    );
  }

  <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
