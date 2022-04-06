import { memo, useState } from "react"
import { NavLink } from "react-router-dom"
import { Container } from "../Common/Common.style"
import {
    HeaderAuth, HeaderBody, HeaderBurger,
    HeaderMenu, HeaderNav, HeaderPopUpMenu, HeaderWrapper
} from "./Header.style"

export const Header = memo(() => {
    const [isActive, toggleActivite] = useState<boolean>(false)
    const toggleActiviteHandler = () => {
        toggleActivite(!isActive)
    }
    return (<HeaderWrapper>
        <Container>
            <HeaderBody>
                <HeaderNav>
                    <HeaderBurger onClick={toggleActiviteHandler}>
                        <span></span>
                    </HeaderBurger>
                    <HeaderPopUpMenu isActive={isActive}>
                        <HeaderMenu>
                            <li><NavLink to="orders" onClick={toggleActiviteHandler}>Заказы</NavLink></li>
                            <li><NavLink to="specialists" onClick={toggleActiviteHandler}>Специалисты</NavLink></li>
                            <li><NavLink to="services" onClick={toggleActiviteHandler}>Услуги</NavLink></li>
                            <li><NavLink to="project" onClick={toggleActiviteHandler}>Проеты</NavLink></li>
                            <li><NavLink to="club" onClick={toggleActiviteHandler}>Клуб</NavLink></li>
                        </HeaderMenu>
                        <HeaderAuth>
                            {!9 ?
                                <li onClick={toggleActiviteHandler}>
                                    <NavLink to="/personalAccount">Личный кабинет</NavLink>
                                </li> :
                                <>
                                    <li onClick={toggleActiviteHandler}><NavLink to="auth/signIn">Вход</NavLink></li>
                                    <li onClick={toggleActiviteHandler}><NavLink to="auth/signUp">Регистрация</NavLink></li>
                                </>
                            }
                        </HeaderAuth>
                    </HeaderPopUpMenu>
                </HeaderNav>
            </HeaderBody>
        </Container>
    </HeaderWrapper>)
})