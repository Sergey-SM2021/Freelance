import { NavLink } from "react-router-dom"
import styled from "styled-components"

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

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`

export const HeaderTop = styled.div`
    font-size: 26px;
    background-color: #303b44;
    color: #fff;
    height: 50px;
    display: flex;
    align-items:center ;
    a{
        color: #fff;
        text-decoration: none;
    }
`

export const HeaderNav = styled.div`
    display: flex;
    justify-content: space-between;
    height: 45px;
    align-items: center;
`

export const HeaderGroup = styled.div`
    a:first-child{
        margin: 0px;
    };
    a{
        font-size: 18px;
        font-weight: 500;
        color: #999;
        text-decoration: none;
        margin: 0px 0px 0px 10px;
        &:hover{
            color: black;
        }
    }
    .active{
        color: black;
        border-bottom: 2px solid #60bcfa;
    }
`

export const Container = styled.div`
    width: 90%;
    margin: 0px auto;
`