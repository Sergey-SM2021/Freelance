import { memo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { Formik, Form, Field } from 'formik'

import { RootType } from "../../../store/store"
import { SignInSchema } from "./SignInValidateSchems"
import { getUser, setError } from "../../../store/reducers/auth/authActions"
import { MyField } from "../../Field/MyField/Field"
import { AuthSubmit } from "../Auth.style"

export const SignIn = memo(() => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [nav])
    const Error = useSelector((state: RootType) => (state.auth.error))
    const isAuth = useSelector((state: RootType) => (state.auth.isAuth))
    return (isAuth ? <Navigate to={"/MyProfile"} /> :
        <Formik
            validationSchema={SignInSchema}
            initialValues={{ mail: "", password: "" }}
            onSubmit={(values) => {
                try {
                    // #FIXME: вынести в отдельную функцыю
                    dispatch(getUser(values.mail, values.password))
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
        </Formik>
    )
})
