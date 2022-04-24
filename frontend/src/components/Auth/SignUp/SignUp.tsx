import { memo, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Formik, Form, Field, FormikValues } from 'formik'

import { Navigate } from 'react-router-dom'
import { validationSchema } from "./signUpValidationSchema"
import { CreateUser } from "../../../store/reducers/auth/authActions"
import { MyField } from "../../Field/MyField/Field"
import { AuthSubmit, SignUpRole, SignUpRolesInner, SignUpRolesTitle, SignUpRolesWrapper } from "../Auth.style"
import { RootType } from "../../../store/store"

export const SignUp = memo(() => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const dispatch = useDispatch()
    const client = useRef<HTMLButtonElement>(null)
    const freelancer = useRef<HTMLButtonElement>(null)
    const isAuth = useSelector((state: RootType) => (state.auth.isAuth))

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

    const formSubmitHandler = (values: FormikValues) => {
        dispatch(CreateUser(values.mail, values.password, values.role))
    }

    return (isAuth ? <Navigate to={"/MyProfile"} /> :
        <Formik
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={formSubmitHandler}
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