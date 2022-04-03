import { FieldProps } from "formik"
import { FC, memo } from "react"

import { FieldInput, FieldTitle, FieldWrapper, Error } from "./Field.style"

export const MyField: FC<FieldProps & { title: string }> = memo(({ field, form, meta, ...props }) => {
    let c = { field, form, meta, ...props }
    return (<FieldWrapper>
        <FieldTitle>{props.title}</FieldTitle>
        <FieldInput {...field} />
        {form.errors[field.name] && form.touched[field.name] ? <Error>{form.errors[field.name]}</Error> : <></>}
    </FieldWrapper>
    )
})