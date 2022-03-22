import { NavLink } from "react-router-dom"
import { FooterItem, FooterItemTitle } from "./FooterItem.style"

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