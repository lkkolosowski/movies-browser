import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 10px;
`;

export const Item = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 12px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  padding: 14px 24px;
  border-radius: 33px;

  &.active {
    outline: 1px solid ${({ theme }) => theme.color.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    padding: 8px 12px;
  }
`;
