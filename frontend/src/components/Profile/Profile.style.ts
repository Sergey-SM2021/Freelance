import styled from "styled-components"

export const ProfileWrapper = styled.div`
    padding: 10px 0px 10px 0px;
    width: 70%;
`

export const ProfilePaper = styled.div<{ isMainPage?: boolean }>`
    width: 100%;
    background-color: #ffffff;
    min-height: 50vh;
    box-sizing: border-box;
    padding: ${({ isMainPage }) => (isMainPage ? "0px 10px 10px 10px" : "")};
`