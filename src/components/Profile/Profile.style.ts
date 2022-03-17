import styled from "styled-components"

export const ProfileHeaderContent = styled.div`
    
`

export const ProfileHeaderAbout = styled.p`
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

export const ProfileHeaderName = styled.h2`
    color: white;
`

export const ProfileContent = styled.div`
    
`

export const ProfileWrapper = styled.div`
    padding: 10px 0px 10px 0px;
    width: 70%;
`

export const ProfilePaper = styled.div`
    width: 100%;
    background-color: #ffffff;
    min-height: 100vh;
`