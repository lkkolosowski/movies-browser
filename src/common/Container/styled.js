import styled from "styled-components";

export const Container = styled.main`
  max-width: 1368px;
  margin: 56px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.full}) {
    padding: 0 16px;
  }

`;