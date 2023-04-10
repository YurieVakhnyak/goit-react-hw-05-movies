import styled from 'styled-components';
import { Button } from 'components/BackLinkButton/BackLinkButton.styled';

export const SortBox = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 430px) {
    gap: 10px;
    margin-bottom: 5px;
  }
`;
export const SortStyledButton = styled(Button)`
  @media (max-width: 430px) {
    min-width: 80px;
  }
`;
