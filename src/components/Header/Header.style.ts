import styled from "styled-components"
import { Container } from "../Common.style"

export const HeaderWrapper = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    &::after{
        content:"";
        width: 100%;
        background-color: black;
        bottom: 0px;
        left: 0px;
        height: 1px;
        display: block;
    }
`

export const HeaderTop = styled.div`
    font-size: 26px;
    background-color: #303b44;
    color: #fff;
    height: 50px;
    display: flex;
    align-items:center ;
    a{
        color: #fff;
        text-decoration: none;
    }
`

export const HeaderNav = styled(Container) <{ isIntro: boolean }>`
    display: flex;
    justify-content: space-between;
    height: 45px;
    align-items: center;
    a{
        font-size: 18px;
        font-weight: 500;
        color: ${(props) => (props.isIntro ? "#000" : "#999")};
        text-decoration: none;
        margin: 0px 0px 0px 15px;
        &:hover{
            color: black;
        }
    }
    .active{
        color: black;
        border-bottom: 2px solid #60bcfa;
    }
`

export const HeaderGroup = styled.div`
    a:first-child{
        margin: 0px;
    };
`

export const HeaderNavBG = styled.div<{isIntro:boolean}>`
    background-color: ${({isIntro})=>(isIntro?"#32c789":"")};
`