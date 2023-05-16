import styled, { css } from "styled-components";
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
  position: relative;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  --margin: 24px;
  width: 102px;
  text-align: center;

  &:after {
    display: block;
    content: "";
    position: absolute;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
    bottom: 0;
    width: calc(100% - (var(--margin) * 2));
    margin: 0 var(--margin);
    transform: rotateY(90deg);
    transition: transform 0.15s;
  }

  &:hover:after {
    transform: rotateY(0deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 12px;
    width: 70px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  padding: 14px 24px;
  border-radius: 33px;
  outline: 1px solid transparent;

  ${({ movie }) =>
    movie &&
    css`
      &:before {
        transition: transform 0.6s;
        display: block;
        content: "";
        position: absolute;
        inset: 0;
        border: 1px solid ${({ theme }) => theme.color.white};
        border-radius: 33px;
        transform: translateX(calc(100% + 10px));
      }

      &.active:before {
        transform: translateX(0%);
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    padding: 8px 12px;
  }
`;
