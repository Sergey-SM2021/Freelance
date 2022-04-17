import { FieldProps } from "formik"
import { FC } from "react"
import { FieldTitle } from "./Field.style"
import { PriceRangeInner, PriceRangeInput, PriceRangePrice, PriceRangeWrapper } from "./Range.style"

export const MyRange: FC<FieldProps & { title: string }> = ({ field, form, meta, ...props }) => {
    return (<PriceRangeWrapper>
        <FieldTitle>{props.title}</FieldTitle>
        <PriceRangeInner>
            <PriceRangeInput min={0} max={500} type={"range"} {...field} />
            <PriceRangePrice>{field.value}₽</PriceRangePrice>
        </PriceRangeInner>
    </PriceRangeWrapper>)
}