import styled from 'styled-components';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';

import { Button } from 'components/BackLinkButton/BackLinkButton.styled';

export const SortBox = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 430px) {
    gap: 10px;
    margin-bottom: 5px;
  }
`;
export const SortStyledButton = styled(Button)`
  position: relative;
  @media (max-width: 430px) {
    min-width: 80px;
  }
`;
export const StyledFaLongArrowAltDown = styled(FaLongArrowAltDown)`
  position: absolute;
 right: 5%;
  }
`;
export const StyledFaLongArrowAltUp = styled(FaLongArrowAltUp)`
  position: absolute; 
  right: 5%;
  }
`;
