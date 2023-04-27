import styled from "styled-components";

export const StyledTile = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 3 / 4.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-right: calc(100% - 16px);
  }
`;

export const Title = styled.h2`
  margin: 16px 0 8px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 16px;
  }
`;

export const Year = styled.span`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
  }
`;

export const Information = styled.div`
  height: 225px;
`;
