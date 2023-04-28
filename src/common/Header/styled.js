import styled from "styled-components";
import { ReactComponent as VideoIcon } from "../../images/video.svg";
import { ReactComponent as LoupeIcon } from "../../images/loupe.svg";

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.woodsmoke};
  color: ${({ theme }) => theme.color.white};
`;

export const StyledHeader = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    flex-direction: column;
    padding: 24px 16px 16px;
    gap: 24px;
  }
`;

export const MovieBrowser = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  margin-left: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 13px;
    margin-left: 8px;
  }
`;

export const HeaderButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 60px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    justify-content: space-between;
    gap: 10px;
  }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 33px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  padding: 12px 23px 12px 51px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    padding: 12px 23px 12px 31px;
    font-size: 13px;
  }
`;

export const Search = styled.div`
  position: relative;
  width: 100%;
  max-width: 432px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    max-width: none;
  }
`;

export const Video = styled(VideoIcon)`
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    width: 16px;
  }
`;

export const Loupe = styled(LoupeIcon)`
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    left: 12px;
  }
`;
