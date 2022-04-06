import styled from "styled-components"

export const HeaderWrapper = styled.div`
    a{
        text-decoration: none;
        color: white;
    }
    a.active{
        color: white;
        text-decoration: underline;
    }
    position: fixed;
    height: 65px;
    display: flex;
    align-items: center;
    width: 100%;
    &::after{
        content:"";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: #303b44;
        z-index: 10;
    }
`

export const HeaderBody = styled.div`
    
`

export const HeaderNav = styled.div`
    display: flex;
    justify-content:space-between ;
    align-items: center;
`

export const HeaderBurger = styled.div`
    display: none;
    @media(max-width:767px){
        z-index:11;
    display:block ;
    width: 30px;
    height: 22px;
    position: relative;
    span{
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #000;
        top: 10px;
        left: 0px;
    }
    &::before,&::after{
        content:"";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #000;
        left: 0px;
    }
    &::before{
        top: 0px;
    }
    &::after{
        bottom: 0px;
    }
    }
`

export const HeaderMenu = styled.ul`
    text-transform: uppercase;
    position: relative;
    z-index: 11;
    padding: 0px;
    display: flex;
    li{
        list-style:none ;
        margin-left: 20px;
        &:first-child{
            margin-left:0;
        }
    }
    @media(max-width:767px){
        display: flex;
        flex-direction: column;
        align-items: center;
        li{
            margin: 0px;
        }
    }
`

export const HeaderAuth = styled.ul`
    text-transform: uppercase;
    position: relative;
    z-index: 11;
    padding: 0px;
    display: flex;
    li{
        list-style:none;
        margin-left: 20px;
        &:first-child{
            margin-left:0;
        }
    }
    @media(max-width:767px){
        display: flex;
        flex-direction: column;
        align-items: center;
        li{
            margin: 0px;
        }
    }
`

export const HeaderPopUpMenu = styled.div<{ isActive: boolean }>`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    @media(max-width:767px){
        display: block;
        position: fixed;
        top: ${({ isActive }) => (isActive ? "0" : "-150%")};
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: #999;
        padding-top: 120px;
    }
`