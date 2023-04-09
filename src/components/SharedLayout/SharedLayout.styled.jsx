import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;

  background-color: darkcyan;

  height: 40px;
  padding-left: 20px;
  font-size: x-large;
  text-align: center;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    font-weight: 500;
    position: relative;

    ::after {
      content: '';
      display: block;
      height: 3px;
      width: 100%;
      background-color: darkblue;
      border-radius: 3px;
      position: absolute;
      bottom: -3px;
      left: 0;
    }
  }

  // &.active {
  //   border-bottom: 5px solid darkblue;
  //   font-weight: 500;
  //   border-radius: 5px;
  //   line-height: 1.2;
  //   padding-bottom: 5px;
  // }
`;
