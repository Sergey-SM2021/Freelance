import { pulse } from "react-animations"
import styled, { keyframes } from "styled-components"

const bounceAnimation = keyframes`${pulse}`;

export const PopupFullImgWrapper = styled.div<{ isVisable: boolean }>`
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    visibility: ${({ isVisable }) => (isVisable ? "visible" : "hidden")};
    display: flex;
    justify-content: center;
    padding-top: 75px;
    cursor: no-drop;
    background-color:#5252523e;
    backdrop-filter: blur(5px);
`

export const PopupImgFull = styled.img<{ path: string }>`
    width: 84%;
    height: 84%;
    background-image: url(${({ path }) => (path)});
    background-size: cover;
`

export const PopupImgSmall = styled.img`
    height: 120px;
    transition: 0.8s;
    &:hover{
        cursor:pointer;
        height: 130px;
        animation: 1s ${bounceAnimation};
    }
`

export const PopupSmallImgWrapper = styled.div`
    height: 130px;
`

export const PopupWrapper = styled.div`
    
`