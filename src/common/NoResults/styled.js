import styled from "styled-components";
import { ReactComponent as NoResultsIcon } from "./noResultsIcon.svg"

export const Wrapper = styled.div`
  margin: 150px auto 0 auto;
  text-align: center;
  height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-top: 0px;
  }
`;

export const StyledIcon = styled(NoResultsIcon)` 

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    transform: scale(0.5);
  }

  .animate {
    animation: dasharray 2s linear infinite;

    @keyframes dasharray { 
      from {
        stroke-dashoffset: 70;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
  }

  .move {
    animation: wind 3s linear infinite;
    
    @keyframes wind { 
      0% {
        transform: translate(0, 0px);
      }
    
      25% {
        transform: translate(-6px, 0px);
      }
      
      75% {
        transform: translate(6px, 0px);
      }
            
      100% {
        transform: translate(0, 0px);
      }
    }
  } 
`;