import styled from "styled-components";

export const Tile = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Title = styled.h2`
  margin: 16px 0 8px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  max-height: 2.6em;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 16px;
    margin: 0;
    max-height: 5.2em;
    -webkit-line-clamp: 4;
  }
`;

export const Year = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 13px;
  }
`;

export const Info = styled.div`
  height: 226px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    height: auto;
    justify-content: flex-start;
  }
`;
