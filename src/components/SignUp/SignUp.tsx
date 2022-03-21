import { Link } from "react-router-dom"
import {
    AlreadySignUp, LogoTitle, SignUpWrapper,
    SignUpInner, SignUpMainPaper, SignUpTitlePaper,
    Registration, SignUpRolesWrapper,
    SignUpRolesInner, SignUpRolesTitle,
    SignUpRole, SignUpSubmit,
} from "./SignUp.style"
import { Field, Form, Formik } from 'formik'
import { SignUpField } from './SignUpField/SignUpField'
import { useRef } from "react"
import { validationSchema } from "./validationSchema"

export const SignUp = () => {
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

    return (<SignUpWrapper>
        <SignUpInner>
            <SignUpTitlePaper>
                <AlreadySignUp>
                    Уже зарегистрированы? <Link to="signIn">Войдите</Link>
                </AlreadySignUp>
            </SignUpTitlePaper>
            <SignUpMainPaper>
                <LogoTitle>Freelance</LogoTitle>
                <Registration>Регистрация</Registration>
                <Formik
                    validateOnBlur
                    validationSchema={validationSchema}
                    onSubmit={(value) => { alert(JSON.stringify(value)) }}
                    initialValues={{ login: "", mail: "", password: "", role: "" }}>
                    {(values) => (<Form>
                        <Field title="Логин" name="login" component={SignUpField} />
                        <Field title="Email" name="mail" component={SignUpField} />
                        <Field title="Пороль" name="password" component={SignUpField} />
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
                        <SignUpSubmit type="submit">Зарегистрироваться</SignUpSubmit>
                    </Form>)}
                </Formik>
            </SignUpMainPaper>
        </SignUpInner>
    </SignUpWrapper>)
}