import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  padding: 3px;
  position: relative;

  &:hover {
    // styles for hover state
  }
`;

export const Container = styled.main`
  padding-left: 20px;
  padding-top: 5px;
  background-color: cadetblue;
`;

export const Title = styled.h1`
  padding: 10px 0 10px 0;
  font-size: xx-large;
`;

export const LiDecor = styled.li`
  display: flex;
  align-items: start;
  gap: 5px;
`;

export const ButtonsThumb = styled.div`
  display: flex;
  gap: 15px;
  margin: 0 0 10px 5px;
`;
