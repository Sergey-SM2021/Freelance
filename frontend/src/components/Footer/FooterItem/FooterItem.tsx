import { memo } from 'react'

import { NavLink } from "react-router-dom"
import { FooterItem, FooterItemTitle, FooterItemWrapper } from "./FooterItem.style"

type FooterItemsType = {
    title: string,
    links: Array<string>,
    isIntro: boolean
}

export const FooterItems = memo(({ links, title, isIntro }: FooterItemsType) => {
    return (<FooterItemWrapper>
        <div>
            <FooterItemTitle>
                {title}
            </FooterItemTitle>
            {links.map((link, i) => (<FooterItem key={i} isIntro={isIntro}>
                <NavLink to="info">
                    {link}
                </NavLink>
            </FooterItem>))}
        </div>
    </FooterItemWrapper>)
})