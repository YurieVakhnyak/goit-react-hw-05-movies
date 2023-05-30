import styled from 'styled-components';
import { Button } from 'components/BackLinkButton/BackLinkButton.styled';

export const TitleBox = styled.div`
  display: flex;
  gap: 30px;

  min-height: 50px;
  justify-content: space-around;
  align-items: center;
  min-width: 350px;
  max-width: 530px;
  @media (max-width: 520px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

export const Title = styled.h1`
  font-size: xx-large;
  vertical-align: super;
  @media (max-width: 520px) {
    font-size: 28px;
  }
`;
export const ButtonThumb = styled.div`
  margin-top: 10px;
  @media (max-width: 421px) {
    margin-bottom: 5px;
  }
  @media (max-width: 520px) {
    margin-top: 0px;
  }
`;
export const ButtonsChanged = styled(Button)`
  min-width: 100px;
  &:focus {
    // color: darkblue;
  }
  &:hover {
    color: blue;
  }
  &:hover + span {
    text-decoration: underline;
  }
`;
