import styled from 'styled-components';

export const InfoBox = styled.div`
  max-width: 500px;
  margin-left: 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 5px;
`;

export const MoreInfoBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: lightseagreen;
  padding: 5px 0 10px 20px;
`;

export const ImageFilm = styled.img`
  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 350px;
  }
`;

export const Thumb = styled.div`
  display: flex;
  gap: 50px;
`;
export const GenreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const BoxInside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MediumTitle = styled.h2`
  padding-left: 0px;
  margin: 7px 0 7px 0;
  font-size: x-large;
`;
