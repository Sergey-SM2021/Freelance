import { Link, useNavigate, useParams } from "react-router-dom"
import { Field, Form, Formik } from 'formik'
import { useRef } from "react"

import {
    AlreadySignUp, LogoTitle, SignUpWrapper, AuthSubmit,
    SignUpInner, SignUpMainPaper, SignUpTitlePaper,
    Registration, SignUpRolesWrapper, SignUpRolesInner, SignUpRolesTitle,
    SignUpRole,
} from "./Auth.style"
import { AuthField } from './AuthField/AuthField'
import { validationSchema } from "./signUpValidationSchema"
import { useDispatch } from "react-redux"
import { CreateUser, getUser } from "../../store/reducers/auth/authActions"

export const Auth = () => {
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
                {loc === "signUp" ? <SignUp /> : <SignIn />}
            </SignUpMainPaper>
        </SignUpInner>
    </SignUpWrapper>)
}

export const SignIn = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    return (<Formik
        initialValues={{ mail: "", password: "" }}
        onSubmit={(values) => {
            dispatch(getUser(values.mail, values.password))
            nav("/PersonalAccount")
        }}>
        {(values) => (<Form>
            <Field name="mail" title="Почта" component={AuthField} />
            <Field name="password" title="Пороль" component={AuthField} />
            <AuthSubmit type="submit">Войти</AuthSubmit>
        </Form>)}
    </Formik>)
}

export const SignUp = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const client = useRef<HTMLButtonElement>(null)
    const freelancer = useRef<HTMLButtonElement>(null)

    const clientHandler = (state: any) => () => {
        state.values.role = "client"
        if (client.current) {
            client.current.style.background = '#ecf3f8'
        }
        if (freelancer.current) {
            freelancer.current.style.background = 'none'
        }
    }

    const freelancerHandler = (state: any) => () => {
        state.values.role = "freelancer"
        if (client.current) {
            client.current.style.background = 'none'
        }
        if (freelancer.current) {
            freelancer.current.style.background = '#ecf3f8'
        }
    }
    return (<Formik
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={(values) => {
            dispatch(CreateUser(values.mail, values.password, values.role))
            nav("/PersonalAccount")
        }}
        initialValues={{ mail: "", password: "", role: "" }}>
        {(values) => (<Form>
            <Field title="Email" name="mail" component={AuthField} />
            <Field title="Пороль" name="password" component={AuthField} />
            <SignUpRolesWrapper>
                <SignUpRolesTitle>
                    Роль
                </SignUpRolesTitle>
                <SignUpRolesInner>
                    <SignUpRole ref={client} type="button" onClick={clientHandler(values)}>
                        Заказчик
                    </SignUpRole>
                    <SignUpRole ref={freelancer} type="button" onClick={freelancerHandler(values)}>
                        Фрилансер
                    </SignUpRole>
                </SignUpRolesInner>
            </SignUpRolesWrapper>
            <AuthSubmit type="submit">Зарегистрироваться</AuthSubmit>
        </Form>)}
    </Formik>)
}