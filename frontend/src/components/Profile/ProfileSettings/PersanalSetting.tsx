import { Field, Form, Formik } from "formik"
import { memo } from "react"
import { useSelector } from "react-redux"

import { RootType } from "../../../store/store"
import { MyField } from "../../Field/Field"
import { Button } from "../../Common/Common.style"

interface IForm {
    header: RootType["auth"]["person"]["header"],
}

export const PersonalAccountSettings = memo(() => {
    const header = useSelector((state: RootType) => (state.auth.person.header))
    const initialValues: IForm = { header }
    const saveHandler = () => {
        alert("put data...")
    }
    return (<Formik
        onSubmit={() => { }}
        initialValues={initialValues}>
        {({ values }) => (<>
            <Form>
                <Field title="Имя" name="header.name" component={MyField} />
                <Field title="Фамилия" name="header.lastName" component={MyField} />
                <Field title="Направление" name="header.specialization" component={MyField} />
            </Form>
        </>)}
    </Formik>)
})