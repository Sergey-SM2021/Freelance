import { Link } from "react-router-dom"
import {
    AlreadySignUp, LogoTitle, SignUpWrapper,
    SignUpInner, SignUpMainPaper, SignUpTitlePaper,
    Registration,
    SignUpRolesWrapper,
    SignUpRolesInner,
    SignUpRolesTitle,
    SignUpRole,
} from "./SignUp.style"
import { Field, Form, Formik, FormikProps } from 'formik'
import { SignUpField } from './SignUpField/SignUpField'

export const SignUp = () => {

    const clientHandler = (state:any) => () => { state.values.role = "client"}

    const freelancerHandler = (state:any) => () => {state.values.role = "freelancer" }

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
                                <SignUpRole type="button" onClick={clientHandler(values)}>
                                    Заказчик
                                </SignUpRole>
                                <SignUpRole type="button" onClick={freelancerHandler(values)}>
                                    Фрилансер
                                </SignUpRole>
                            </SignUpRolesInner>
                        </SignUpRolesWrapper>
                        <button type="submit">Зарегистрироваться</button>
                    </Form>)}
                </Formik>
            </SignUpMainPaper>
        </SignUpInner>
    </SignUpWrapper>)
}