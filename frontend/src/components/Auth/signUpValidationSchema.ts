import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    mail: Yup.string().email("Не валидный email адрес").required("Это обязательное поле"),
    password: Yup.string().required("Это обязательное поле").min(6),  
    role:Yup.string().required("Это обязательное поле")
})