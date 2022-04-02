import { Field, FieldArray, Form, Formik } from "formik"
import { FormEvent, useState } from "react"
import { useSelector } from "react-redux"
import { RootType } from "../../../store/store"
import { Button } from "../../Common/Common.style"
import { MyField } from "../../Field/Field"
import { ProfilePaper, ProfileWrapper } from "../Profile.style"

export const ProfileWorkHistorySettings = () => {
    const [currentText, setText] = useState<string>("")
    const mySelectorWorks = useSelector((state: RootType) => (state.auth.person.workHistory))
    interface IInitialValues {
        myWorks: RootType["auth"]["person"]["workHistory"]
    }
    const handlerChange = (e: FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const initialValues: IInitialValues = {
        myWorks: mySelectorWorks ? mySelectorWorks : [
            { freelancer: 89, id: 172, name: "", price: 0 }
        ]
    }
    const handlerSave = () => {
        alert("...save")
    }
    return (<Formik
        onSubmit={() => { }}
        initialValues={initialValues}>
        {({ values }) => (<ProfileWrapper>
            <ProfilePaper isMainPage>
                <Form>
                    <FieldArray name="myWorks">
                        {({ push, remove }) => (<>
                            {
                                values.myWorks?.map((work, index) => <>
                                    <Field title="Выполненная задача" component={MyField} name={`myWorks.${index}.name`} />
                                    <button onClick={() => { remove(index) }}>Удалить</button>
                                </>
                                )}
                            <div>
                                <input value={currentText} onChange={handlerChange} />
                                <button onClick={() => { push({ freelancer: 89, id: 172, name: currentText, price: 0 }) }}>Добавить</button>
                            </div>
                        </>)}
                    </FieldArray>
                </Form>
                <Button onClick={handlerSave}>Сохранить</Button>
            </ProfilePaper>
        </ProfileWrapper>)}
    </Formik>)
}