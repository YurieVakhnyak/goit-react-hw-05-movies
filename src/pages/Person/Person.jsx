import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import { BackLinkButton } from 'components/BackLinkButton/BackLinkButton';
import { Container, LiDecor, Title } from 'pages/Home/Home.styled';
import { MediumTitle } from 'pages/MoviesDetails/MoviesDetails.styled';
import {
  PersonContainer,
  FilmBox,
  PersonBox,
  PersonList,
  ButtonBox,
} from './Person.styled';
import {
  getSortedFilmography,
  formateDate,
  voteToPersent,
} from 'utils/functions';
import { HiFilm } from 'react-icons/hi';
import { fetchData, fetchImage } from 'utils/fetchData';
import { searchParams, basicURL, basicBigImageURL } from 'utils/constants';
import { SortButtons } from 'components/SortButtons/SortButtons';
import hasNotPhotoImage from '../../images/NoPhoto.png';

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

  const handleMouseEnter = (id, imageUrl) => {
    setHoveredId(id);
    fetchImage(imageUrl, setHoveredImageUrl);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
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
              {sortedFilmography.map(
                ({
                  id,
                  title,
                  release_date,
                  vote_average,
                  backdrop_path,
                  overview,
                }) => (
                  <LiDecor key={id}>
                    <HiFilm style={{ padding: '4px 0 4px 0' }} />
                    <Link
                      style={{ padding: '4px', position: 'relative' }}
                      to={`/movies/${id}`}
                      state={{ from: location }}
                      onMouseEnter={() => handleMouseEnter(id, backdrop_path)}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      {title}, ({release_date?.slice(0, 4) || 'no data'}),{' '}
                      {voteToPersent(vote_average)}
                    </Link>

                    {hoveredId === id && hoveredImageUrl && (
                      <Modal
                        hoveredImageUrl={hoveredImageUrl}
                        title={title}
                        overview={overview}
                      />
                    )}
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
