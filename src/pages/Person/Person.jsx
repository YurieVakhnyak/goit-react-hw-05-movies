import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import hasNotPhotoImage from '../../components/MovieCast/NoPhoto.png';

export default function Person() {
  const [person, setPerson] = useState(null);
  const [personMoovies, setPersonMoovies] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const API_KEY = 'b30750fbe582936755a0930282f9befd';

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}`;
    const personURL = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`;

    setPerson(null);
    setPersonMoovies(null);

    fetch(personURL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Щось не так...'));
      })
      .then(person => {
        setPerson(person);
      })
      .catch(error => {
        setError(error);
      });

    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Щось не так...'));
      })
      .then(personMoovies => {
        setPersonMoovies(personMoovies);
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  if (personMoovies && person) {
    const basicImageURL = `https://image.tmdb.org/t/p/w500`;

    return (
      <div>
        <ButtonBox>
          <Button onClick={goBack}>
            <FaLongArrowAltLeft />
            Go back
          </Button>
        </ButtonBox>
        <PersonContainer>
          <PersonBox>
            <img
              src={
                person.profile_path
                  ? basicImageURL + person.profile_path
                  : hasNotPhotoImage
              }
              alt={person.name}
              height={281}
            />
            {person ? <Title>{person.name}</Title> : <Title>Person Name</Title>}
            {person.birthday ? (
              <MediumTitle>({person.birthday.slice(0, 4)})</MediumTitle>
            ) : (
              <MediumTitle> - - - - </MediumTitle>
            )}
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
                    {title} ({release_date.slice(0, 4)})
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
