import {
  ButtonsChanged,
  Title,
  TitleBox,
  ButtonThumb,
} from './TrendingTitle.styled';
import { getTrendingTitle } from 'utils/functions';

export const TrendingTitle = ({ setPeriod, period, type }) => {
  const togglePeriod = () => {
    setPeriod(period === 'day' ? 'week' : 'day');
  };
  return (
    <TitleBox>
      <Title>{getTrendingTitle(period, type)}</Title>
      <ButtonThumb>
        <ButtonsChanged onClick={togglePeriod}>Timeframe</ButtonsChanged>
      </ButtonThumb>
    </TitleBox>
  );
};
