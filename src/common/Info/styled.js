import styled, { css } from "styled-components";

export const Title = styled.h2`
  margin: 16px 0 8px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  max-height: 2.6em;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 16px;
    margin: 0;
    max-height: 5.2em;
    -webkit-line-clamp: 4;
  }
`;

export const Subtitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 13px;
  }
`;

export const TitleDetails = styled.h2`
  margin: 8px 0 24px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0 0 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-weight: 500;
    line-height: 1.3;
    font-size: 16px;
    margin: 0 0 4px;
  }
`;

export const SubtitleDetails = styled.span`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    line-height: 1.3;
    font-size: 13px;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 8px 0;
  }
`;

export const Paragraph = styled.div`
  line-height: 1.2;
  display: inline-flex;
  font-size: 18px;
  gap: 10px;
`;

export const Attribute = styled.span`
  color: ${({ theme }) => theme.color.stormGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    ${({ mobile }) =>
      mobile &&
      css`
        display: none;
      `}
  }
`;

export const Value = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    line-height: 1.3;
    font-size: 12px;
  }
`;
