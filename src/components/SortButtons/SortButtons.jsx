import { FaSortAmountDown, FaSortAmountUpAlt } from 'react-icons/fa';
import { Button } from 'components/BackLinkButton/BackLinkButton.styled';
import { SortBox } from 'pages/Person/Person.styled';
export function SortButtons({
  setFieldSorted,
  toggleOrder,
  fieldSorted,
  order,
}) {
  const buttonClass = field => (field === fieldSorted ? 'active' : 'inactive');

  return (
    <SortBox>
      <p style={{ marginRight: '10px' }}>Sort by:</p>
      <Button
        className={buttonClass('Rating')}
        onClick={() => {
          setFieldSorted('Rating');
          toggleOrder();
        }}
      >
        Rating
        {fieldSorted === 'Rating' &&
          (order ? <FaSortAmountUpAlt /> : <FaSortAmountDown />)}
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
          (order ? <FaSortAmountUpAlt /> : <FaSortAmountDown />)}
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
          (order ? <FaSortAmountDown /> : <FaSortAmountUpAlt />)}
      </Button>
    </SortBox>
  );
}
