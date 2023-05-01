import styled from "styled-components";

export const PageWrapper = styled.section`
  max-width: 1400px;
  margin: 64px auto;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 16px auto;
  }
`;
