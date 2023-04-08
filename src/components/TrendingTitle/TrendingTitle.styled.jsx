import styled from 'styled-components';
import { Button } from 'components/BackLinkButton/BackLinkButton.styled';

export const TitleBox = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-around;
  align-items: center;
  max-width: 480px;
`;

export const Title = styled.h1`
  font-size: xx-large;
  vertical-align: super;
`;
export const ButtonThumb = styled.h1`
  margin-top: 10px;
`;
export const ButtonsChanged = styled(Button)`
  min-width: 100px;
  &:focus {
    color: black;
  }
`;
