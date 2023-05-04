import styled from "styled-components";

export const Person = styled.article`
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    padding: 8px;
  }
`;

export const FullName = styled.p`
  color: ${({ theme }) => theme.color.woodsmoke};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 12px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 14px;
    margin: 8px 0;
  }
`;

export const Role = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 13px;
  }
`;
