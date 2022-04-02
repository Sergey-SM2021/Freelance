import { Field, FieldArray, Formik } from 'formik'
import { FormEvent, memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { TStack } from '../../../models'
import { RootType } from '../../../store/store'
import { MyField } from '../../Field/Field'
import { ProfilePaper, ProfileWrapper } from '../Profile.style'
import { Button } from '../../Common/Common.style'

export const AboutSetting = memo(() => {
    const addHandler = (push: any) =>
        () => {
            push({ freelancer: id, id: 1, name: state })
        }
    const save = () => {
        alert("Put new date...")
    }
    const [state, setState] = useState<string>("")
    interface IInitialValues {
        description: string
        expiriens: string
        price: number
        stack: Array<TStack>
        paymentMethod: string
    }
    const person = useSelector((state: RootType) => (state.auth.person?.about))
    const id = useSelector((state: RootType) => (state.auth.person?.id))
    const initialValues: IInitialValues = {
        description: person?.description ? person?.description : "",
        expiriens: person?.expiriens ? person.expiriens : "",
        paymentMethod: person?.paymentMethod ? person.paymentMethod : "",
        price: person?.price ? person?.price : 0,
        stack: person?.stack ? person?.stack : [
            { freelancer: id, id: 1, name: "Css" },
            { freelancer: id, id: 0, name: "Node" },
        ]
    }
    return (<Formik initialValues={initialValues} onSubmit={() => { }}>
        {({ values }) => (<>
                    <Field component={MyField} title="Описание" value={values.description} name="description" />
                    <Field component={MyField} title="Опыт работы" value={values.expiriens} name="expiriens" />
                    <Field component={MyField} title="Способ оплаты" value={values.paymentMethod} name="paymentMethod" />
                    <Field component={MyField} title="цена" value={values.price} name="price" />
                    <FieldArray name='stack' render={({ remove, push }) => (<>
                        {values.stack.map((el, i) => <>
                            <Field name={`stack.${i}.name`} title="Навык" component={MyField} />
                            <button onClick={() => { remove(i) }}>Удалить</button>
                        </>)}
                        <div>
                            <input value={state} onChange={(e: FormEvent<HTMLInputElement>) => { setState(e.currentTarget.value) }} />
                            <button onClick={addHandler(push)}>Добавить</button>
                        </div>
                    </>
                    )} />
                    <Button onClick={save}>Save</Button>
        </>)}
    </Formik>)
})