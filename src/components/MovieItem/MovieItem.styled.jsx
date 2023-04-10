import styled from 'styled-components';
import { HiFilm } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  padding: 5px;
  position: relative;
  vertical-align: middle;
`;
export const StyledFilmIcon = styled(HiFilm)`
  vertical-align: middle;
`;

export const LiDecor = styled.li`
  min-height: 30px;
  text-indent: -12px;
`;
