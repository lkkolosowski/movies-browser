import styled from "styled-components";
import { ReactComponent as LoaderIcon } from "../../icons/loader.svg";

export const Wrapper = styled.div`
  margin: 120px auto 0 auto;
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-top: 24px;
  }
`;

export const StyledIcon = styled(LoaderIcon)`
  width: 91px;
  animation: rotate 1s linear infinite;
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 35px;
  }
`;