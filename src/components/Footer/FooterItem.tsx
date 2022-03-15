import { NavLink } from "react-router-dom"
import styled from "styled-components"

type FooterItemsType = {
    title: string,
    links: Array<string>,
    isIntro: boolean
}

export const FooterItems = ({ links, title, isIntro }: FooterItemsType) => {
    return (<div>
        <FooterItemTitle>
            {title}
        </FooterItemTitle>
        {links.map(link => (<FooterItem isIntro={isIntro}>
            <NavLink to="info">
                {link}
            </NavLink>
        </FooterItem>))}
    </div>)
}

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