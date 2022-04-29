import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"

import { IOrder } from "../../../../models/IOrder"
import { createOrder } from "../../../../store/reducers/auth/authActions"
import { Button } from "../../../Common/Common.style"
import { MyField } from "../../../Field/MyField/Field"
import { MyRange } from "../../../Field/MyRange/Range"
import { MyTextArea } from "../../../Field/MyTextArea/TextArea"
import { SkillList } from "../../../SkillList/SkillList"
import { AddOrderWrapper } from "./AddOrder.style"
import { shema } from "./AddOrderValidation"

type TProps = {
    id: number
}

export const AddOrder = ({ id }: TProps) => {
    const dispatch = useDispatch()
    // @ts-ignore
    const handlerSubmit = (values: FormikValues) => {
        dispatch(createOrder(values))
    }

    const initialValues: IOrder = {
        description: "",
        price: 0,
        skills: [],
        sphereOfActivity: "",
        title: "",
        feedbacks: [],
        clientId: id,
        views: 0,
        id: 0
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handlerSubmit} validationSchema={shema}>
            {({ values }) => (
                <Form>
                    <AddOrderWrapper>
                        <Field name="title" title="Название" component={MyField} />
                        <Field name="description" title="Описание заказа" component={MyTextArea} />
                        <SkillList obj={{ order: id }} name="skills" skills={values.skills} />
                        <Field name="price" title={"Цена проекта"} component={MyRange} />
                        <Button>Создать заказ</Button>
                    </AddOrderWrapper>
                </Form>
            )}
        </Formik>
    )
}