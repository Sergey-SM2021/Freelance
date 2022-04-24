import * as yup from 'yup'

export const ValidateSchema = yup.object().shape({
    name: yup.string().required().max(20),
    phone: yup.number().required()
})