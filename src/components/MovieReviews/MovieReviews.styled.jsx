import styled from 'styled-components';

export const ReviewTitle = styled.h3`
  margin: 5px 0 10px 20px;
  font-weight: 500;
`;
export const TextReview = styled.p`
  margin-left: 20px;
  font-weight: 400;
  font-size: small;
  column-gap: 5px;
  column-count: 1;

  @media (min-width: 550px) {
    column-count: 2;
  }
  @media (min-width: 900px) {
    column-count: 3;
  }
  @media (min-width: 1400px) {
    column-count: 4;
  }
`;
