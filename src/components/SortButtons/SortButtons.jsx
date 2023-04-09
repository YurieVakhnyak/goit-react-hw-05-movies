import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';

import { Button } from 'components/BackLinkButton/BackLinkButton.styled';
import { SortBox } from 'pages/PersonDetails/PersonDetails.styled';
export function SortButtons({
  setFieldSorted,
  toggleOrder,
  fieldSorted,
  order,
}) {
  const buttonClass = field => (field === fieldSorted ? 'active' : 'inactive');

  return (
    <SortBox>
      <Button
        className={buttonClass('Trends')}
        onClick={() => {
          setFieldSorted('Trends');
        }}
      >
        Trends
      </Button>
      <Button
        className={buttonClass('Rating')}
        onClick={() => {
          setFieldSorted('Rating');
          toggleOrder();
        }}
      >
        Rating
        {fieldSorted === 'Rating' &&
          (order ? <FaLongArrowAltUp /> : <FaLongArrowAltDown />)}
      </Button>

      <Button
        className={buttonClass('Date')}
        onClick={() => {
          setFieldSorted('Date');
          toggleOrder();
        }}
      >
        Date
        {fieldSorted === 'Date' &&
          (order ? <FaLongArrowAltUp /> : <FaLongArrowAltDown />)}
      </Button>
      <Button
        className={buttonClass('Title')}
        onClick={() => {
          setFieldSorted('Title');
          toggleOrder();
        }}
      >
        Title
        {fieldSorted === 'Title' &&
          (order ? <FaLongArrowAltDown /> : <FaLongArrowAltUp />)}
      </Button>
    </SortBox>
  );
}
