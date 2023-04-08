import { ButtonsThumb, ButtonsChanged } from './PeriodButtons.styled';

export const PeriodButtons = ({ setPeriod, period }) => {
  const togglePeriod = () => {
    setPeriod(period === 'day' ? 'week' : 'day');
  };
  return (
    <ButtonsThumb>
      <ButtonsChanged onClick={togglePeriod}>Change timeframe</ButtonsChanged>
    </ButtonsThumb>
  );
};
