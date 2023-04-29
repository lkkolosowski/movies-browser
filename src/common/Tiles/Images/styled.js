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

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin-right: 16px;
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
