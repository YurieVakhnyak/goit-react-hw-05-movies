import { ModalThumb, ModalText, ImageStyled } from './Modal.styled';
import hasNotPosterImage from '../../images/NoFilmImage.png';

export function Modal({ hoveredImageUrl, title, overview }) {
  return (
    <ModalThumb>
      <ImageStyled
        src={hoveredImageUrl}
        alt={title}
        onError={e => {
          e.target.onerror = null;
          e.target.src = hasNotPosterImage;
        }}
      />
      <ModalText>{overview}</ModalText>
    </ModalThumb>
  );
}
