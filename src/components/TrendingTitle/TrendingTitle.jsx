import {
  ButtonsChanged,
  Title,
  TitleBox,
  ButtonThumb,
} from './TrendingTitle.styled';
import { useState } from 'react';
import { getTrendingTitle } from 'utils/functions';

export const TrendingTitle = ({ setPeriod, period, type }) => {
  const [isHovered, setIsHovered] = useState(false);

  const togglePeriod = () => {
    setPeriod(period === 'day' ? 'week' : 'day');
  };
  return (
    <TitleBox>
      <Title>{getTrendingTitle(period, type, isHovered)}</Title>
      <ButtonThumb>
        <ButtonsChanged
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={togglePeriod}
        >
          Timeframe
        </ButtonsChanged>
      </ButtonThumb>
    </TitleBox>
  );
};
