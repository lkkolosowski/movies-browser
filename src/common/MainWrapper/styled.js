import styled, { css } from "styled-components";

export const PageWrapper = styled.section`
  max-width: 1400px;
  margin: 56px auto;
  padding: 0 16px;

  ${({ backdrop }) =>
    backdrop &&
    css`
      margin-top: 0;
    `}
`;
