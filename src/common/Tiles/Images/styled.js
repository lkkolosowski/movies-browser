import styled from "styled-components";
import { ReactComponent as VideoIcon } from "../../../images/video.svg";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.silver};
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 2 / 3;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin-right: 16px;
  }
`;

export const Poster = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ background }) => `url(${background})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

export const NoPoster = styled(VideoIcon)`
  width: 50%;
  height: auto;
  opacity: 0.6;
`;
