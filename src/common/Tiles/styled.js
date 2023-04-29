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

export const Description = styled.div`
  height: 272px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    height: auto;
    justify-content: flex-start;
  }
`;
