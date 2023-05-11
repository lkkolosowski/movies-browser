import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Person = styled.article`
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;
  text-align: center;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 8px;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.color.woodsmoke};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 12px 0 8px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  max-height: 1.3em;

  ${({ list }) =>
    list &&
    css`
      -webkit-line-clamp: 2;
      max-height: 2.6em;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 14px;
    margin: 8px 0;
    margin: 8px 0;
  }
`;

export const Role = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  max-height: 1.5em;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 13px;
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
