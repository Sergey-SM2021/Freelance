import { memo, useState } from "react"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { RootType } from "../../store/store"
import { Container } from "../Common/Common.style"
import {
    HeaderAuth, HeaderBody, HeaderBurger,
    HeaderMenu, HeaderNav, HeaderPopUpMenu, HeaderWrapper
} from "./Header.style"
import edit from '../../assets/edit1.png'
import { Edit } from './Header.style'

export const useEditProfileRoute = () => {
    const Path = useSelector((state: RootType) => {
        switch (state.auth.type) {
            case "freelancer":
                return "/FreelancerProfile/setting"
            default:
                return "/ClientProfile/setting"
        }
    })
    return Path
}

export const Header = memo(() => {
    const route = useEditProfileRoute()
    const isAuth = useSelector((state: RootType) => (state.auth.isAuth))
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
                            <li><NavLink to="project" onClick={toggleActiviteHandler}>Проеты</NavLink></li>
                        </HeaderMenu>
                        <HeaderAuth>
                            {isAuth ?
                                <li onClick={toggleActiviteHandler}>
                                    <Link to={route}><Edit src={edit} /></Link>
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