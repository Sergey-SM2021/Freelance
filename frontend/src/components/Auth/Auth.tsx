import { Link, useParams } from "react-router-dom"
import { memo } from "react"
import { useSelector } from "react-redux"

import {
    AlreadySignUp, LogoTitle, SignUpWrapper,
    SignUpInner, SignUpMainPaper, SignUpTitlePaper,
    Registration
} from "./Auth.style"
import { RootType } from "../../store/store"
import { SignIn } from "./SignIn/SignIn"
import { SignUp } from "./SignUp/SignUp"

export const Auth = memo(() => {
    const isLoading = useSelector((state: RootType) => (state.auth.isLoading))
    const loc = useParams().loc
    return (<SignUpWrapper>
        <SignUpInner>
            <SignUpTitlePaper>
                <AlreadySignUp>
                    {loc === "signUp" ?
                        <>Уже зарегистрированы? <Link to="/auth/signIn">Войдите</Link></> :
                        <>Ещё нет аккаунта? <Link to="/auth/signUp">Зарегистрируйтесь</Link></>}
                </AlreadySignUp>
            </SignUpTitlePaper>
            <SignUpMainPaper>
                <LogoTitle>Freelance</LogoTitle>
                {loc === "signUp" ? <Registration>Регистрация</Registration> : <Registration>Вход</Registration>}
                {isLoading ? 'loading' : loc === "signUp" ? <SignUp /> : <SignIn />}
            </SignUpMainPaper>
        </SignUpInner>
    </SignUpWrapper>)
})