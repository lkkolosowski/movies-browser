import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0;
  padding: 0;
  list-style-type: none;

  & > li {
    transition: transform 0.15s ease-out;
  }

  & > li:hover {
    transform: translateY(-12px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: 1fr;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
