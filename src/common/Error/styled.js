import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Error } from "./error.svg";

export const Wrapper = styled.div`
  margin: 195px auto;
  text-align: center;
  margin-bottom: 572px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-top: 100px;
  }
`;

export const ErrorIcon = styled(Error)`
  width: 100px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 80px;
  }
  
  .animate {
    animation: wobble 1s ease-in-out infinite;

    @keyframes wobble { 
      0% {
        transform: translate(0, 6px);
      }
    
      25% {
        transform: translate(-2px, -2px);
      }
      50% {
        transform: translate(0px, 6px);
      }
      75% {
        transform: translate(2px, -2px);
      }
            
      100% {
        transform: translate(0, 6px);
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-top: 38px;
  margin-bottom: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 14px;
  padding: 16px 24px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.shadow}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 18px;
  }
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
`;