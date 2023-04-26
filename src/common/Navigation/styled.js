import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({theme}) => theme.color.black};
    color: ${({theme}) => theme.color.white};
    width: 100%;
    display: flex;
    align-items: center;
`;

export const MovieBrowser = styled.div`
    padding-left: 293px;
    padding-top: 23px;
    padding-bottom: 23px;
    display: flex;
    align-items: center;
`;

export const Title = styled.span`
    margin-left: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
`;

export const Navi = styled.ul`
    display: flex;
    list-style: none;
`;

export const NaviLi = styled.li`
    display: inline;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    padding: 0 64px;
`;