import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';

import { SortBox, SortStyledButton } from './SortButtons.styled';
export function SortButtons({ sortProps }) {
  const { type, setFieldSorted, toggleOrder, fieldSorted, order } = sortProps;
  const buttonClass = field => (field === fieldSorted ? 'active' : 'inactive');

  return (
    <SortBox>
      <SortStyledButton
        className={buttonClass('Trends')}
        onClick={() => {
          setFieldSorted('Trends');
        }}
      >
        Trends
      </SortStyledButton>
      <SortStyledButton
        className={buttonClass('Rating')}
        onClick={() => {
          setFieldSorted('Rating');
          toggleOrder();
        }}
      >
        Rating
        {fieldSorted === 'Rating' &&
          (order ? <FaLongArrowAltUp /> : <FaLongArrowAltDown />)}
      </SortStyledButton>

      <SortStyledButton
        className={buttonClass('Date')}
        onClick={() => {
          setFieldSorted(type === 'tv' ? 'AirDate' : 'Date');
          toggleOrder();
        }}
      >
        Date
        {(fieldSorted === 'Date' || fieldSorted === 'AirDate') &&
          (order ? <FaLongArrowAltUp /> : <FaLongArrowAltDown />)}
      </SortStyledButton>
      <SortStyledButton
        className={buttonClass('Title')}
        onClick={() => {
          setFieldSorted(type === 'tv' ? 'Name' : 'Title');
          toggleOrder();
        }}
      >
        Title
        {(fieldSorted === 'Title' || fieldSorted === 'Name') &&
          (order ? <FaLongArrowAltDown /> : <FaLongArrowAltUp />)}
      </SortStyledButton>
    </SortBox>
  );
}
