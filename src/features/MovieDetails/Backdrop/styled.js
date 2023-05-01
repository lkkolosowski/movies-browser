import styled from "styled-components";

export const BackdropWrapper = styled.div`
  justify-content: center;
  animation: eclipse 0.75s ease-in-out;
  animation-fill-mode: forwards;

  @keyframes eclipse {
    100% {
      background-color: ${({ theme }) => theme.color.black};
    }
  }
`;

export const Wrapper = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
  position: relative;
`;

export const BackdropBody = styled.div`
  position: relative;
  padding: 0 16px;
  aspect-ratio: 16 / 9;
  background-image: ${({ background }) => `url(${background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: reveal 2s ease-in-out 0.75s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes reveal {
    100% {
      opacity: 1;
    }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 8px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  aspect-ratio: 16 / 9;
  background: linear-gradient(
      270deg,
      #000000 0%,
      rgba(0, 0, 0, 0.873268) 0.97%,
      rgba(0, 0, 0, 0.720529) 2.4%,
      rgba(0, 0, 0, 0.294577) 5.8%,
      rgba(0, 0, 0, 0.159921) 7.77%,
      rgba(0, 0, 0, 0) 14.11%
    ),
    linear-gradient(
      90deg,
      #000000 0%,
      rgba(0, 0, 0, 0.984059) 0.98%,
      rgba(0, 0, 0, 0.967732) 1.84%,
      rgba(0, 0, 0, 0.865569) 2.7%,
      rgba(0, 0, 0, 0.230315) 9.27%,
      rgba(0, 0, 0, 0) 13.04%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    );

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    background: linear-gradient(
        270deg,
        #000000 14.11%,
        rgba(0, 0, 0, 0.873268) 15.08%,
        rgba(0, 0, 0, 0.720529) 16.51%,
        rgba(0, 0, 0, 0.294577) 19.99%,
        rgba(0, 0, 0, 0.159921) 21.88%,
        rgba(0, 0, 0, 0) 25.68%
      ),
      linear-gradient(
        90deg,
        #000000 13.6%,
        rgba(0, 0, 0, 0.984059) 14.58%,
        rgba(0, 0, 0, 0.967732) 15.44%,
        rgba(0, 0, 0, 0.865569) 16.3%,
        rgba(0, 0, 0, 0.230315) 22.87%,
        rgba(0, 0, 0, 0) 26.64%
      ),
      linear-gradient(
        180deg,
        #000000 0%,
        rgba(0, 0, 0, 0.689555) 4.66%,
        rgba(0, 0, 0, 0.439033) 9.34%,
        rgba(0, 0, 0, 0.20628) 15.16%,
        rgba(0, 0, 0, 0) 24.22%
      ),
      linear-gradient(
        189.44deg,
        rgba(0, 0, 0, 0) 58.48%,
        rgba(0, 0, 0, 0.106473) 63.17%,
        rgba(0, 0, 0, 0.235359) 68.85%,
        rgba(0, 0, 0, 0.492821) 78.08%,
        rgba(0, 0, 0, 0.740286) 85.86%,
        #000000 92.87%
      );
  }
`;
