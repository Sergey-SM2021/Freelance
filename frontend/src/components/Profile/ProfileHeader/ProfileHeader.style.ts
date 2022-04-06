import styled from "styled-components"

export const HeaderContent = styled.div`
    
`

export const HeaderAbout = styled.p`
    color: white;
    font-weight: 500;
`

export const HeaderWrapper = styled.div<{ bg: string }>`
    box-sizing:border-box ;
    padding: 20px;
    display:flex ;
    align-items: center;
    width: 100%;
    height: 40vh;
    background-image: url(${({ bg }) => (bg)});
    background-size: cover;
    background-position: center;
`

export const Ava = styled.img`
    height: 65px;
`

export const HeaderName = styled.h2`
    color: white;
`

export const Content = styled.div`
    
`

export const Settings = styled.div`
    top: 10px;
    right: 10px;
    width: 70px;
    height: 70px;
    position: absolute;
    background-color: black;
`

export const Edit = styled.img`
    top: 10px;
    right: 10px;
    position: absolute;
    width: 40px;
`