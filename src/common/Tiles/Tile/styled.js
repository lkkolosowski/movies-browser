import styled from "styled-components";

export const StyledTile = styled.article`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 16px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin: 16px 0 8px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const Year = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Information = styled.div`
  height: 225px;
`;
