import styled from 'styled-components';
import { HiFilm } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  padding: 5px;
  position: relative;
`;
export const StyledFilmIcon = styled(HiFilm)`
  padding: 5px 0 5px 0;
  // color: darkblue;
`;

export const LiDecor = styled.li`
  display: flex;
  align-items: start;
  gap: 5px;
`;
