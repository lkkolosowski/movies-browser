import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../images/star.svg";

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  line-height: 1.5;
  font-size: 16px;
  height: 100%;
  align-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 13px;
    gap: 7px;
    height: auto;
  }
`;

export const Vote = styled.span`
  color: ${({ theme }) => theme.color.woodsmoke};
  font-weight: bold;
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Star = styled(StarIcon)`
  width: 24px;
  margin-top: -6px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    width: 16px;
    margin-top: -4px;
  }
`;
