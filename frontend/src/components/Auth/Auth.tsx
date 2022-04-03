import { Link, useNavigate, useParams } from "react-router-dom"
import { Field, Form, Formik } from 'formik'
import { memo, useRef } from "react"

import {
    AlreadySignUp, LogoTitle, SignUpWrapper, AuthSubmit,
    SignUpInner, SignUpMainPaper, SignUpTitlePaper,
    Registration, SignUpRolesWrapper, SignUpRolesInner, SignUpRolesTitle,
    SignUpRole,
} from "./Auth.style"
import { MyField } from '../Field/Field'
import { validationSchema } from "./signUpValidationSchema"
import { useDispatch, useSelector } from "react-redux"
import { CreateUser, getUser, setError } from "../../store/reducers/auth/authActions"
import { SignInSchema } from "./SignInValidateSchems"
import { RootType } from "../../store/store"

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

export const SignIn = memo(() => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const Error = useSelector((state: RootType) => (state.auth.error))
    return (<Formik
        validationSchema={SignInSchema}
        initialValues={{ mail: "", password: "" }}
        onSubmit={async (values) => {
            try {
                await dispatch(getUser(values.mail, values.password))
                nav("/PersonalAccount")
            } catch (error) {
                dispatch(setError("Не верный пороль и/или логин"))
            }
        }}>
        {(values) => (<Form>
            <>{Error}</>
            <Field name="mail" title="Почта" component={MyField} />
            <Field name="password" title="Пороль" component={MyField} />
            <AuthSubmit type="submit">Войти</AuthSubmit>
        </Form>)}
    </Formik>)
})

export const SignUp = memo(() => {
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
            <Field title="Email" name="mail" component={MyField} />
            <Field title="Пороль" name="password" component={MyField} />
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
})