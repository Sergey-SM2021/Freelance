import styled from "styled-components"

export const FooterItemTitle = styled.h4`
    
`

export const FooterItem = styled.p<{ isIntro: boolean }>`
    cursor: pointer;
    a{
        text-decoration: none;
        color:${(props) => (props.isIntro ? "black" : "#999")};
        font-weight: ${({ isIntro }) => (isIntro ? 400 : 500)};
        font-size: 17px;
        &:hover{
            text-decoration: ${({ isIntro }) => (isIntro ? "none" : "underline")};
            color: ${({ isIntro }) => (isIntro ? "#3d9671" : "black")};
        }
    }
`

export const FooterItemWrapper = styled.div`
    display:flex ;
    flex-direction:column ;
    align-items:center ;
`