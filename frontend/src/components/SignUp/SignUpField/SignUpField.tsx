import { FieldProps } from "formik"
import { FC } from "react"
import { FieldInput, FieldTitle, FieldWrapper, Error } from "./SignUpField.style"

export const SignUpField: FC<FieldProps & { title: string }> = ({ field, form, meta, ...props }) =>
(<FieldWrapper>
    <FieldTitle>{props.title}</FieldTitle>
    <FieldInput {...field}/>
    {form.errors[field.name]&&form.touched[field.name]?<Error>{form.errors[field.name]}</Error>:<></>}
</FieldWrapper>
)