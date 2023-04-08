import { Button } from 'components/BackLinkButton/BackLinkButton.styled';
import { ButtonsThumb } from './PeriodButtons.styled';

export const PeriodButtons = ({ setPeriod, period }) => {
  const togglePeriod = () => {
    setPeriod(period === 'day' ? 'week' : 'day');
  };
  return (
    <ButtonsThumb>
      <Button onClick={togglePeriod}>
        {period === 'week' ? 'Week' : 'Day'}
      </Button>
    </ButtonsThumb>
  );
};
