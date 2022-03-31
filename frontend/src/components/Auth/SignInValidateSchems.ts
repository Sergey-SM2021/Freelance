import * as yup from 'yup'

export const SignInSchema = yup.object().shape({
    mail:yup.string().email("Не валидный email адрес").required("Это обязательное поле"),
    password:yup.string().min(6).required("Это обязательное поле")
})