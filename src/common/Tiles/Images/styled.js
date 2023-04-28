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

export const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 2 / 3;
  object-fit: cover;
`;

export const Video = styled(VideoIcon)`
  width: 50%;
  height: auto;
  opacity: 0.6;
`;
