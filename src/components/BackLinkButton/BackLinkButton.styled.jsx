import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
  min-width: 90px;
  background-color: lightseagreen;
  border-radius: 5px;
  border-color: lightseagreen;
  &: hover {
    cursor: pointer;
    color: darkblue;
  }
`;
