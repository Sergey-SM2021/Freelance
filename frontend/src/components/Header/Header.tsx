import { memo } from "react"
import { useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom"
import { RootType } from "../../store/store"

import { Container } from "../Common.style"
import { HeaderGroup, HeaderNav, HeaderTop, HeaderWrapper, HeaderNavBG } from './Header.style'

export const Header = memo(() => {
    const isAuth = useSelector((state: RootType) => state.auth.isAuth)
    const isIntro = useLocation().pathname.length === 1 ? true : false
    return (<HeaderWrapper>
        <HeaderTop>
            <Container>
                <NavLink to="/">Freelance</NavLink>
            </Container>
        </HeaderTop>
        <HeaderNavBG isIntro={isIntro}>
            <HeaderNav isIntro={isIntro}>
                <HeaderGroup>
                    <NavLink to="orders">Заказы</NavLink>
                    <NavLink to="specialists">Специалисты</NavLink>
                    <NavLink to="services">Услуги</NavLink>
                    <NavLink to="project">Проеты</NavLink>
                    <NavLink to="club">Клуб</NavLink>
                </HeaderGroup>
                <HeaderGroup>
                    {isAuth ?
                        <><NavLink to="/personalAccount">Личный кабинет</NavLink></> :
                        <><NavLink to="auth/signIn">Вход</NavLink><NavLink to="auth/signUp">Регистрация</NavLink></>}
                </HeaderGroup>
            </HeaderNav>
        </HeaderNavBG>
    </HeaderWrapper>)
})