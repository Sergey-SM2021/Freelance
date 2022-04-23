import { memo, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Field, FieldArray, Form, Formik } from "formik"

import { Button, SectionTitle } from "../../Common/Common.style"
import { ProfilePaper, ProfileWrapper } from "../../Profile/Profile.style"
import { MyField } from "../../Field/MyField/Field"
import { TFreelancerProfileSetting } from "../../../models/IFreelancer"
import { RootType } from "../../../store/store"
import { putFreelancer } from "../../../store/reducers/auth/authActions"
import { AddComplitedWork, ComplitedWork } from "./EditFreelancerProfile.style"
import { SkillList } from "../../SkillList/SkillList"

export const FreelancerProfileSettings = memo(() => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const isLoading = useSelector((state: RootType) => (state.auth.isLoading))
    const AddComplitedWorkRef = useRef<HTMLTextAreaElement>(null)

    const initialWorkValue = useSelector((state: RootType) => {
        if (state.auth.person.workHistory) {
            return state.auth.person.workHistory
        } else {
            return []
        }
    })

    const initialHeaderValue = useSelector((state: RootType) => {
        if (state.auth.person.header) {
            return state.auth.person.header
        } else {
            return {
                name: null,
                lastName: null,
                ava: null,
                specialization: null
            }
        }
    })

    const initialAboutValue = useSelector((state: RootType) => {
        if (state.auth.person.about) {
            return state.auth.person.about
        } else {
            return ({
                description: null,
                expiriens: null,
                price: null,
                stack: [],
                paymentMethod: null,
            })
        }
    })

    const id = useSelector((state: RootType) => {
        if (state.auth.person.id) {
            return state.auth.person!.id
        } else {
            return 0
        }
    })

    const initialPortfolioValue = useSelector((state: RootType) => {
        if (state.auth.person.portfolio) {
            return state.auth.person.portfolio
        } else {
            return []
        }
    })

    const initialValues: TFreelancerProfileSetting = {
        header: initialHeaderValue,
        about: initialAboutValue,
        portfolio: initialPortfolioValue,
        workHistory: initialWorkValue,
        id
    }

    const dispatch = useDispatch()

    const SaveHandler = (values: TFreelancerProfileSetting) => {
        dispatch(putFreelancer(values))
    }

    return (<ProfileWrapper>
        <Formik
            initialValues={initialValues}
            onSubmit={SaveHandler}
        >{({ values }) => (
            isLoading ? <>loading...</> :
                <Form>
                    <SectionTitle>Личные данные</SectionTitle>
                    <ProfilePaper isMainPage>
                        <Field title="Имя" name="header.name" component={MyField} />
                        <Field title="Фамилия" name="header.lastName" component={MyField} />
                        <Field title="Направление" name="header.specialization" component={MyField} />
                    </ProfilePaper>
                    <SectionTitle>Личные данные</SectionTitle>
                    <ProfilePaper isMainPage>
                        <Field component={MyField} title="Описание" value={values.about.description} name="about.description" />
                        <Field component={MyField} title="Опыт работы" value={values.about.expiriens} name="about.expiriens" />
                        <Field component={MyField} title="Способ оплаты" value={values.about.paymentMethod} name="about.paymentMethod" />
                        <Field component={MyField} title="цена" value={values.about.price} name="about.price" />
                        <SkillList obj={{ freelancer: id }} name="about.stack" skills={values.about.stack} />
                    </ProfilePaper>
                    <SectionTitle>Завершенные заказы</SectionTitle>
                    <ProfilePaper isMainPage>
                        <FieldArray name="workHistory">
                            {({ push, remove }) => (<>
                                {
                                    values.workHistory?.map((work, index) => <>
                                        <ComplitedWork readOnly value={values.workHistory![index].name} />
                                        <button onClick={() => { remove(index) }}>Удалить</button>
                                    </>
                                    )}
                                <div>
                                    <AddComplitedWork ref={AddComplitedWorkRef} placeholder="Сделал сайт на Тильде..." />
                                    <button type="button" onClick={() => {
                                        push({ freelancer: id, id: 172, name: AddComplitedWorkRef.current?.value, price: 0 })
                                        if (AddComplitedWorkRef.current?.value) {
                                            AddComplitedWorkRef.current.value = ""
                                        }
                                    }}>Добавить</button>
                                </div>
                            </>)}
                        </FieldArray>
                    </ProfilePaper>
                    <SectionTitle>Мои работы</SectionTitle>
                    <ProfilePaper isMainPage>
                        Добавить
                    </ProfilePaper>
                    <Button type="submit">Сохранить</Button>
                </Form>
        )}
        </Formik>
    </ProfileWrapper>)
})