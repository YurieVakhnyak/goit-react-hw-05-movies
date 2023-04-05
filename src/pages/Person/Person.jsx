import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { BackLinkButton } from 'components/BackLinkButton/BackLinkButton';
import { Container, LiDecor, Title } from 'pages/Home/Home.styled';
import { MediumTitle } from 'pages/MoviesDetails/MoviesDetails.styled';
import {
  PersonContainer,
  FilmBox,
  PersonBox,
  PersonList,
  ButtonBox,
  SortBox,
} from './Person.styled';
import {
  sortByField,
  makeWithoutLowVotes,
  formateDate,
  voteToPersent,
} from 'utils/functions';
import { HiFilm } from 'react-icons/hi';
import { fetchData } from 'utils/fetchData';
import { searchParams, basicURL, basicBigImageURL } from 'utils/constants';
import hasNotPhotoImage from '../../components/MovieCast/NoPhoto.png';
import { Button } from 'components/BackLinkButton/BackLinkButton.styled';

export default function Person() {
  const [person, setPerson] = useState(null);
  const [personMoovies, setPersonMoovies] = useState(null);
  const [fieldSorted, setFieldSorted] = useState(null);
  const [order, setOrder] = useState('desc');
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  let sortedFilmography;

  const toggleOrder = () => {
    setOrder(order === 'asc' ? 'desc' : 'asc');
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
    switch (fieldSorted) {
      case 'vote':
        const withoutLowVotes = makeWithoutLowVotes(cast);
        console.log(withoutLowVotes);

        sortedFilmography = sortByField(withoutLowVotes, 'vote_average', order);

        break;
      case 'date':
        sortedFilmography = sortByField(cast, 'release_date', order);
        break;
      case 'title':
        sortedFilmography = sortByField(cast, 'title', order);

        break;
      default:
        sortedFilmography = personMoovies.cast;
    }

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
            <SortBox>
              <p style={{ marginRight: '10px' }}>Sort by:</p>
              <Button onClick={() => setFieldSorted('vote')}>Rating</Button>
              <Button onClick={() => setFieldSorted('date')}>Date</Button>
              <Button onClick={() => setFieldSorted('title')}>Title</Button>
              <Button onClick={toggleOrder}>
                Order
                <RiArrowUpDownFill />
              </Button>
            </SortBox>
            <MediumTitle style={{ textAlign: 'center', marginBottom: '20px' }}>
              Filmography
            </MediumTitle>

            <PersonList>
              {sortedFilmography.map(
                ({ id, title, release_date, vote_average }) => (
                  <LiDecor key={id}>
                    <HiFilm />
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                      {title}, ({release_date?.slice(0, 4) || 'no data'}),{' '}
                      {voteToPersent(vote_average)}
                    </Link>
                  </LiDecor>
                )
              )}
            </PersonList>
          </FilmBox>
        </PersonContainer>
      </div>
    );
  }
  return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
}
