import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "../../icons/star.svg";

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
  height: 24px;
  width: auto;

  ${({ backdrop }) =>
    backdrop &&
    css`
      height: 40px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    height: 16px;

    ${({ backdrop }) =>
      backdrop &&
      css`
        height: 40px;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    ${({ backdrop }) =>
      backdrop &&
      css`
        height: 16px;
      `}
  }
`;

export const BackdropRatingWrapper = styled.div`
  color: ${({ theme }) => theme.color.white};
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  font-size: 16px;
  line-height: 1.2;
  grid-gap: 16px 8px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 12px 0 4px;
  }
`;

export const DetailsRatingWrapper = styled.div`
  display: inline-flex;
  font-size: 14px;
  line-height: 1.2;
  gap: 8px;
  align-items: center;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 12px 0 4px;
  }
`;

export const Average = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  ${({ backdrop }) =>
    backdrop &&
    css`
      font-size: 30px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    ${({ backdrop }) =>
      backdrop &&
      css`
        font-size: 22px;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
  }
`;

export const Total = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    ${({ backdrop }) =>
      !backdrop &&
      css`
        display: none;
      `}
  }
`;

export const Count = styled.span`
  margin-right: 4px;

  ${({ backdrop }) =>
    backdrop &&
    css`
      grid-area: 2 / 1 / 3 / 4;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
    line-height: 1.3;
    color: ${({ theme }) => theme.color.waterloo};
    ${({ backdrop }) =>
      backdrop &&
      css`
        grid-area: auto / auto / auto / auto;
        color: ${({ theme }) => theme.color.white};
      `}
  }
`;
