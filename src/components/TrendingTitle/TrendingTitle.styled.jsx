import styled from 'styled-components';
import { Button } from 'components/BackLinkButton/BackLinkButton.styled';

export const TitleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 50px;
  justify-content: space-around;
  align-items: center;
  min-width: 400px;
  max-width: 480px;
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: xx-large;
  vertical-align: super;
`;
export const ButtonThumb = styled.div`
  margin-top: 10px;
`;
export const ButtonsChanged = styled(Button)`
  min-width: 100px;
  &:focus {
    color: black;
  }
`;
