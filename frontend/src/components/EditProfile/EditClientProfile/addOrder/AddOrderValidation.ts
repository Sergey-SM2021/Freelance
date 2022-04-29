import * as yup from 'yup'

export const shema = yup.object().shape({
    title: yup.string().required()
})