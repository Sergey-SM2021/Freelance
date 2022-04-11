import { FormEvent, memo, SyntheticEvent, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Field, FieldArray, Form, Formik } from "formik"

import { Button, SectionTitle } from "../../Common/Common.style"
import { ProfilePaper, ProfileWrapper } from "../Profile.style"
import { MyField } from "../../Field/Field"
import { TFreelancerProfileSetting } from "../../../models"
import { RootType } from "../../../store/store"
import { Close, Input, Skill, SkillsWrapper } from "./Skill.style"
import close from '../../../assets/cancel.png'
import { putFreelancer } from "../../../store/reducers/auth/authActions"
import styled from "styled-components"

export const ProfileSettings = memo(() => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    const isLoading = useSelector((state: RootType)=>(state.auth.isLoading)) 
    const AddComplitedWorkRef = useRef<HTMLTextAreaElement>(null)
    const [inputSkill, setinputSkill] = useState<string>("")
    const [completedTask, setCompletedTask] = useState<string>("")

    const initialWorkValue = useSelector((state: RootType) => (state.auth.person.workHistory))
    const initialHeaderValue = useSelector((state: RootType) => (state.auth.person.header))
    const initialAboutValue = useSelector((state: RootType) => (state.auth.person.about))
    const id = useSelector((state: RootType) => (state.auth.person?.id))
    const initialPortfolioValue = useSelector((state: RootType) => (state.auth.person.portfolio))

    const initialValues: TFreelancerProfileSetting = {
        header: initialHeaderValue,
        about: initialAboutValue,
        portfolio: initialPortfolioValue,
        workHistory: initialWorkValue,
        id
    }

    const dispatch = useDispatch()

    const handlerChange = (e: FormEvent<HTMLInputElement>) => {
        setCompletedTask(e.currentTarget.value)
    }

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setinputSkill(e.currentTarget.value)
    }

    const SaveHandler = (values: TFreelancerProfileSetting) => {
        dispatch(putFreelancer(values))
    }

    return (<ProfileWrapper>
        <Formik
            initialValues={initialValues}
            onSubmit={SaveHandler}
        >{({ values }) => (
                isLoading?<>loading...</>:
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
                    <FieldArray name='about.stack'>
                        {({ remove, push }) => (<>
                            <SkillsWrapper >
                                {values.about.stack ? values.about.stack.map((skill, i) => (
                                    <Skill>{skill.name} <Close src={close} onClick={(e: SyntheticEvent) => { remove(i); e.preventDefault() }} /></Skill>
                                )) : <></>}
                                <Input placeholder='skill' type="text" value={inputSkill} onChange={changeHandler} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (e.key === 'Enter' && inputSkill.length > 0) {
                                        push({ freelancer: id, id: 1, name: inputSkill })
                                        setinputSkill("")
                                        e.preventDefault();
                                        return false;
                                    }
                                }} />
                            </SkillsWrapper>
                        </>
                        )}
                    </FieldArray>
                </ProfilePaper>
                <SectionTitle>Завершенные заказы</SectionTitle>
                <ProfilePaper isMainPage>
                    <FieldArray name="workHistory">
                        {({ push, remove }) => (<>
                            {
                                values.workHistory?.map((work, index) => <>
                                    <ComplitedWork readOnly  value={values.workHistory![index].name} />
                                    <button onClick={() => { remove(index) }}>Удалить</button>
                                </>
                                )}
                            <div>
                                <AddComplitedWork ref={AddComplitedWorkRef} placeholder="Сделал сайт на Тильде..."/>
                                <button type="button" onClick={() => {
                                    push({ freelancer: id, id: 172, name: AddComplitedWorkRef.current?.value, price: 0 })
                                    if(AddComplitedWorkRef.current?.value){
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

const ComplitedWork = styled.textarea`
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    padding: 5px;
    height: 100px;
`

const AddComplitedWork = styled.textarea`
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    padding: 5px;
    height: 100px;
`