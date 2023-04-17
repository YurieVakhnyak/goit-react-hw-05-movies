import styled from 'styled-components';

export const PersonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  text-align: center;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const PersonBox = styled.div`
  max-width: 450px;
  min-width: 300px;
  @media (min-width: 900px) {
    padding-top: 80px;
  }
`;
export const ButtonBox = styled.div`
  padding: 5px;
`;

export const FilmBox = styled.div`
  text-align: left;
  min-width: 300px;
`;
export const PersonSortBox = styled.div`
  display: flex;
  justify-content: center;
`;
