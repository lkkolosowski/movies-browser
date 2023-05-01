import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin: 0 0 24px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 18px;
    margin: 0 0 12px;
  }
`;
