import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    gap: 16px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  transition: transform 0.15s ease-out;

  &:hover {
    transform: translateY(-12px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    &:hover {
      transform: translateY(-8px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    &:hover {
      transform: translateY(0);
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
