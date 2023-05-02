import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import video from "../../../icons/video.svg";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.silver};
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  aspect-ratio: 2 / 3;
  border-radius: 5px;

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      width: 312px;
      grid-row: span 2;

      @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
        width: 215px;
      }
      @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        width: 114px;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    ${({ movieDetails }) =>
      !movieDetails &&
      css`
        margin-right: 16px;
      `}
  }
`;

export const Poster = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-size: cover;
  background-image: ${({ background }) => `url(${background})`};

  ${({ noPoster }) =>
    noPoster &&
    css`
      background-size: 50%;
      background-image: url(${video});
      opacity: 0.6;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.woodsmoke};
  transition: opacity 0.15s ease-out;

  &:hover {
    opacity: 0.7;
  }
`;
