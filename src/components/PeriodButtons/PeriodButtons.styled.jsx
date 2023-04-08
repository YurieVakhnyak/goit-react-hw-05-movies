import styled from 'styled-components';
import { Button } from 'components/BackLinkButton/BackLinkButton.styled';

export const ButtonsThumb = styled.div`
  display: flex;
  gap: 15px;
  margin: 5px 0 10px 5px;
`;
export const ButtonsChanged = styled(Button)`
  display: flex;
  gap: 15px;
  margin: 5px 0 10px 5px;
  &:focus {
    color: black;
  }
`;
