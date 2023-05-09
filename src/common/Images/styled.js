import styled, { css } from "styled-components";
import video from "../../icons/video.svg";
import person from "../../icons/person.svg";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.silver};
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  aspect-ratio: 2 / 3;
  border-radius: 5px;
  transition: opacity 0.15s ease-out;

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

  ${({ person }) =>
    person &&
    css`
      aspect-ratio: 3 / 4;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    ${({ movieDetails, person }) =>
      !(movieDetails || person) &&
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

  ${({ reveal }) =>
    reveal &&
    css`
      opacity: 0;
      animation: reveal 0.75s ease-in-out 0.25s;
      animation-fill-mode: forwards;

      @keyframes reveal {
        100% {
          opacity: 1;
        }
      }
    `}

  ${({ noMovie }) =>
    noMovie &&
    css`
      background-size: 50%;
      background-image: url(${video});
      opacity: 0.6;
    `}

  ${({ noPerson }) =>
    noPerson &&
    css`
      background-size: 33%;
      background-image: url(${person});
      opacity: 0.6;
    `}
`;
