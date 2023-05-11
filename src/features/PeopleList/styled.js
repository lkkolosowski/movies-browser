import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(218px, 1fr));
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(178px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Item = styled.li`
  transition: transform 0.15s ease-out;

  &:hover {
    transform: translateY(-6px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    &:hover {
      transform: translateY(-4px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    &:hover {
      transform: translateY(0);
    }
  }
`;
