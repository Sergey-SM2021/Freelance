import styled from "styled-components"

export const SideBarWrapper = styled.div`
    box-sizing: border-box;
    padding: 10px 0px 10px 0px;
    width: 28%;
    min-height: 100vh;
`

export const SideBarInner = styled.div`
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #fff;
    &::after{
        position: absolute;
        width:100%;
        height: 1px;
        content: "";
        background-color: #eee;
        display: block;
        top: 35px;
        left: 0px;
    }
`

export const SideBarSection = styled.div`
    box-sizing:border-box;
    padding: 10px;
`

export const SideBarTitle = styled.h3`
`

export const SideBarList = styled.div`
`

export const SideBarItem = styled.label`
    cursor: pointer;
    input{
        cursor: pointer;
    }
`