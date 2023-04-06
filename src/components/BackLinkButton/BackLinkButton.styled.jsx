import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
  min-width: 90px;
  height: 25px;
  background-color: lightseagreen;
  border-radius: 5px;
  border-color: lightseagreen;
  font-size: medium;
  &: hover {
    cursor: pointer;
    color: darkblue;
  }
`;
