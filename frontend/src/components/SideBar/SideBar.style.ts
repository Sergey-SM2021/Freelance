import styled from "styled-components"
import { mobile } from "../../styleConstants"

export const SideBarWrapper = styled.div`
    @media(max-width: ${mobile}){
        display:none;
    }
    box-sizing: border-box;
    padding: 10px 0px 10px 0px;
    width: 300px;
    margin-left: 10px;
    min-height: 100vh;
`

export const SideBarInner = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: #fff;
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