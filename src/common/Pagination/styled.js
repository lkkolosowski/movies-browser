import styled, { css } from "styled-components";
import { ReactComponent as Vector } from "./vector.svg";

export const StyledPagination = styled.div`
  display: inline-flex;
  gap: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  position: static;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 8px;
    margin: 32px 0 16px;
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 8px;
  margin: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 2px;
    margin: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.color.pattensBlue};
  color: ${({ theme }) => theme.color.mine};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: brightness(105%);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
    cursor: default;
    pointer-events: none;

    & svg {
      fill: ${({ theme }) => theme.color.waterloo};
    }

    &:hover {
      filter: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 4px;
    padding: 8px 12px;
  }
`;

export const StyledVector = styled(Vector)`
  width: 7px;
  height: 11px;
  fill: ${({ theme }) => theme.color.scienceBlue};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 5px;
    height: 8px;
  }

  ${({ right }) =>
    right &&
    css`
      transform: rotate(180deg);
    `}

  ${({ mobile }) =>
    mobile &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        display: block;
      }
    `}
`;

export const ButtonText = styled.span`
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
  }
`;

export const Text = styled.span`
  align-self: center;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 10px;
  }
`;

export const PageText = styled.span`
  align-self: center;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 10px;
  }
`;
