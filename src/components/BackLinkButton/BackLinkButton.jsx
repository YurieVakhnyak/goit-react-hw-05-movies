import { Link } from 'react-router-dom';
import { Button } from './BackLinkButton.styled';
import { FaLongArrowAltLeft } from 'react-icons/fa';

export const BackLinkButton = ({ backLinkHref }) => {
  return (
    <Link to={backLinkHref}>
      <Button>
        <FaLongArrowAltLeft />
        Go back
      </Button>
    </Link>
  );
};
