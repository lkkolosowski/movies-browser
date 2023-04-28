import styled, { css } from "styled-components";
import { ReactComponent as Vector } from "./Vector.svg"

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 40px 0 103px 0;
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
  transition: 0.3s;
  
  &:hover {
    filter: brightness(105%);
    transform: scale(1.01);
  }
  &:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
    cursor: default;
    &:hover {
      filter: none;
    }
  }
`;

export const StyledVector = styled(Vector)`
  width: 7px;
  height: 11px;
  fill: ${({ theme }) => theme.color.scienceBlue};
 
  ${({ right }) => right && css`
    transform: rotate(180deg);
  `}

  ${({ mobile }) => mobile && css`
    display: none;
  `}

  ${({ disabled }) => disabled && css`
    fill: ${({ theme }) => theme.color.waterloo};
  `}
`;

export const ButtonText = styled.span`
  display: block;
`;

export const Text = styled.span`
  align-self: center;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const PageText = styled.span`
  align-self: center;
  font-weight: 600;
`;