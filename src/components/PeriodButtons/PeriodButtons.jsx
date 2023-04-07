import { Button } from 'components/BackLinkButton/BackLinkButton.styled';
import { ButtonsThumb } from './PeriodButtons.styled';

export const PeriodButtons = ({ setPeriod }) => {
  return (
    <ButtonsThumb>
      <Button onClick={() => setPeriod('day')}>Day</Button>
      <Button onClick={() => setPeriod('week')}>Week</Button>
    </ButtonsThumb>
  );
};
