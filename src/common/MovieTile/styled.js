import { Link } from "react-router-dom";
import styled from "styled-components";

export const Movie = styled.article`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MovieDescription = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    height: auto;
    justify-content: flex-start;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.woodsmoke};
  display: block;
  height: 100%;

  &:hover article > div:first-child {
    opacity: 0.7;
  }
`;
