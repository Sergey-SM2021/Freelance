import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    login: Yup.string().required(),
    mail: Yup.string().email().required(),
    password: Yup.string().required().min(6),  
    role:Yup.string().required()
})