import { Field, FieldArray, Formik } from 'formik'
import { FormEvent, memo, useState } from 'react'
import { useSelector } from 'react-redux'

import { TStack } from '../../../models'
import { RootType } from '../../../store/store'
import { MyField } from '../../Field/Field'
import { Button } from '../../Common/Common.style'
import close from '../../../assets/cancel.png'
import { Close, Input, Skill, SkillsWrapper } from './Skill.style'

export const AboutSetting = memo(() => {
    const [state, setState] = useState<string>("")
    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setState(e.currentTarget.value)
    }
    const save = () => {
        alert("Put new date...")
    }
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
    return (<Formik initialValues={initialValues} onSubmit={() => { alert("ss") }}>
        {({ values }) => (<>
            <Field component={MyField} title="Описание" value={values.description} name="description" />
            <Field component={MyField} title="Опыт работы" value={values.expiriens} name="expiriens" />
            <Field component={MyField} title="Способ оплаты" value={values.paymentMethod} name="paymentMethod" />
            <Field component={MyField} title="цена" value={values.price} name="price" />
            <FieldArray name='stack'>
                {({ remove, push }) => (<>
                    <SkillsWrapper >
                        {values.stack.map((skill, i) => (
                            <Skill>{skill.name} <Close src={close} onClick={() => { remove(i) }} /></Skill>
                        ))}
                        <Input placeholder='skill' value={state} onChange={changeHandler} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter' && state.length > 0) {
                                push({ freelancer: id, id: 1, name: state })
                                setState("")
                            }
                        }} />
                    </SkillsWrapper>
                </>
                )}
            </FieldArray>
            <Button onClick={save}>Save</Button>
        </>)}
    </Formik>)
})