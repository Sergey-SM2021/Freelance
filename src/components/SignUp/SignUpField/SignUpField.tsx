import { FieldProps } from "formik"
import { FC } from "react"
import { FieldInput, FieldTitle, FieldWrapper } from "./SignUpField.style"

export const SignUpField: FC<FieldProps & { title: string }> = ({ field, form, meta, ...props }) =>
(<FieldWrapper>
    <FieldTitle>{props.title}</FieldTitle>
    <FieldInput {...field}/>
</FieldWrapper>
)