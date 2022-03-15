import { NavLink } from "react-router-dom"
import { Container } from "../Common.style"
import { HeaderGroup, HeaderNav, HeaderTop, HeaderWrapper } from './Header.style'

export const Header = () => {
    return (<HeaderWrapper>
        <HeaderTop>
            <Container>
                <NavLink to="/">Freelance</NavLink>
            </Container>
        </HeaderTop>
        <Container>
            <HeaderNav>
                <HeaderGroup>
                    <NavLink to="orders">Заказы</NavLink>
                    <NavLink to="specialization">Специалисты</NavLink>
                    <NavLink to="services">Услуги</NavLink>
                    <NavLink to="project">Проеты</NavLink>
                    <NavLink to="club">Клуб</NavLink>
                </HeaderGroup>
                <HeaderGroup>
                    <NavLink to="auth">Вход</NavLink>
                    <NavLink to="registration">Регистрация</NavLink>
                </HeaderGroup>
            </HeaderNav>
        </Container>
    </HeaderWrapper>)
}