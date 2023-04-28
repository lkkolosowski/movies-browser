import styled from "styled-components";
import { ReactComponent as Video } from '../../ImagesSVG/Video.svg';
import { ReactComponent as Search } from '../../ImagesSVG/Search.svg';
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.color.woodsmoke};
    color: ${({ theme }) => theme.color.white};
    width: 100%;
`;

export const WrapperBox = styled.div`
    max-width: 1368px;
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    flex-wrap: wrap;
    max-height: 94px auto;
`;

export const WrapperBoxLine = styled.span`
    display: flex;
    align-items: center;
    margin: 0 20px;

    @media(max-width:${({ theme }) => theme.breakpoint.mobile}){
        margin: auto;        
    }

    @media(max-width:${({ theme }) => theme.breakpoint.small}){
        margin: auto;
    }

    @media(max-width:${({ theme }) => theme.breakpoint.medium}){
        margin: auto;
    }
`;

export const VideoSvg = styled(Video)`
    @media(max-width:${({ theme }) => theme.breakpoint.mobile}){
        height: 17px;
        
    }

    @media(max-width:${({ theme }) => theme.breakpoint.small}){
        height: 17px;
    }
`;

export const MovieBrowser = styled.div`
    padding: 23px 20px 23px 0;
    display: flex;
    align-items: center;
    
    @media(max-width:${({ theme }) => theme.breakpoint.small}){
        margin: 0;
    }
`;

export const Title = styled.span`
    margin-left: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;

    @media(max-width:${({ theme }) => theme.breakpoint.mobile}){
        font-size: 13px;
        margin-left: 0;
    }

    @media(max-width:${({ theme }) => theme.breakpoint.small}){
        font-size: 13px;
        margin-left: 0;
    }
`;

export const Navi = styled.ul`
    display: flex;
    list-style: none;
    flex: auto;
    @media(max-width:${({ theme }) => theme.breakpoint.mobile}){
        padding: 0;
    }
`;

export const NaviLi = styled.li`
    display: inline;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    padding: 0 20px;

    @media(max-width:${({ theme }) => theme.breakpoint.mobile}){
        padding: 0;
        font-size: 12px;
    }

    @media(max-width:${({ theme }) => theme.breakpoint.small}){
        padding: 0;
        font-size: 12px;
    }
`;

export const NaviInput = styled.span`
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.mystic};
    flex-basis: 432px;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    display: flex;
    border-radius: 33px;

    @media(max-width:${({ theme }) => theme.breakpoint.mobile}){
        padding: 0px;
        margin: 0 auto 12px auto;
    }
    
    @media(max-width:${({ theme }) => theme.breakpoint.small}){
        padding: 0px;
        margin: 0 auto 12px auto;
    }

    @media(max-width:${({ theme }) => theme.breakpoint.medium}){
        padding: 0px;
        flex-basis: 580px;
        margin: 0 auto 12px auto;
    }
`;

export const Input = styled.input`
    border: none;
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    flex-basis: 100%;
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.color.waterloo};
    padding: 12px 20px;

    &:focus {
        outline: none;
    }

    @media(max-width:${({ theme }) => theme.breakpoint.mobile}){
        padding: 0 20px;
    }
    
    @media(max-width:${({ theme }) => theme.breakpoint.small}){
        padding: 0 20px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    padding: 8px 24px;

    &.active {
        border: 1px solid ${({ theme }) => theme.color.white};
        border-radius: 24px
    };
`;

export const SearchSvg = styled(Search)`
    margin-left: 26px;
`;
