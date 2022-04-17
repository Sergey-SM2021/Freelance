import { FieldProps } from "formik"
import { FC } from "react"
import { FieldTitle } from "./Field.style"
import { MyTextAreaInner, MyTextAreaWrapper } from "./TextArea.style"

export const MyTextArea: FC<FieldProps & { title: string }> = ({ field, form, meta, ...props }) => {
    return (<MyTextAreaWrapper>
        <FieldTitle>{props.title}</FieldTitle>
        <MyTextAreaInner {...field} />
    </MyTextAreaWrapper>)
}