import { Link } from 'react-router-dom';
import { Text, Card, Image } from 'components/MovieCast/MovieCast.styled';
import { getImageUrl } from 'utils/fetchData';

export const PersonItem = ({ person, location }) => {
  const {
    id,
    name,
    // known_for,
    profile_path,
  } = person;
  return (
    <li key={id}>
      <Link to={`/person/${id}`} state={{ from: location }}>
        <Card>
          <Image src={getImageUrl(profile_path, true)} alt={name} />
          <p>{name}</p>
          <Text></Text>
        </Card>
      </Link>
    </li>
  );
};
