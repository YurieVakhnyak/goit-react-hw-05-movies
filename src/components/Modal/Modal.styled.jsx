import styled from 'styled-components';

export const ModalThumb = styled.div`
  position: absolute;
  width: 250px;
  transform: translate(30%, -100%);
  z-index: 99;
  background-color: cadetblue;
  color: white;
`;

export const ModalText = styled.p`
  font-size: small;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* Альтернативні стилі */
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-lines: 3;
`;
export const ImageStyled = styled.img`
  width: 220px;
  height: 110px;
`;
