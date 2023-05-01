import styled from "styled-components";

export const BackdropWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  justify-content: center;
  animation: eclipse 0.75s ease-in-out;
  animation-fill-mode: forwards;

  @keyframes eclipse {
    100% {
      background-color: ${({ theme }) => theme.color.black};
    }
  }
`;

export const Backdrop = styled.div`
  position: relative;
  max-width: 1400px;
  padding: 0 16px;
  aspect-ratio: 16 / 9;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ background }) => `url(${background})`};
  animation: reveal 2s ease-in-out 0.75s;
  animation-fill-mode: forwards;
  opacity: 0;
  box-shadow: inset 0 0 40px 40px ${({ theme }) => theme.color.black};

  @keyframes reveal {
    100% {
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    box-shadow: inset 0 0 20px 20px ${({ theme }) => theme.color.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    box-shadow: inset 0 0 15px 15px ${({ theme }) => theme.color.black};
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 24px;
    margin: 4px 0;
  }
`;

export const BackdropContent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 8px;
  }
`;
