import styled from "styled-components";

export const MovieDetails = styled.article`
  color: ${({ theme }) => theme.color.black};
  padding: 40px;
  display: grid;
  gap: 0 40px;
  grid-template-columns: minmax(auto, 312px) 1fr;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow};
  grid-template-rows: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    gap: 0 28px;
    grid-template-columns: minmax(auto, 215px) 1fr;
    padding: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: minmax(auto, 114px) 1fr;
    gap: 0 16px;
    padding: 16px;
  }
`;

export const MovieDetailsDescription = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-row: span 2;
  }
`;

export const Overview = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 17px;
    grid-row: 3;
    grid-column: span 2;
    margin-top: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
    margin-top: 16px;
  }
`;
