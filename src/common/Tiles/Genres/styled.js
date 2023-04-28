import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  gap: 8px;
  margin: 8px 0 16px;
`;

export const Genre = styled.p`
  background-color: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
  margin: 0;
  padding: 8px 16px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-self: flex-start;
    font-size: 10px;
    padding: 4px 8px;
  }
`;
