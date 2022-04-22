import { Field, FieldArray, Form, Formik, FormikValues } from "formik"
import { useSelector } from "react-redux"
import { RootType } from "../../../store/store"
import {
    EditClientProfileAva, EditClientProfileBlock, EditClientProfileEmail, EditClientProfileHeader,
    EditClientProfileWrapper, EditProfileContent, EditProfileInner, EditProfilePriceRangeWrapper
} from "./EditClientProfile.style"
import man from '../../../assets/man.png'
import { MyField } from "../../Field/MyField/Field"
import { TClientApi } from "../../../models/IClient"
import { useNavigate } from "react-router-dom"
import { Button, SectionTitle } from "../../Common/Common.style"
import { INewOrder, IOrder } from "../../../models/IOrder"
import { MyRange } from "../../Field/MyRange/Range"
import { MyTextArea } from "../../Field/MyTextArea/TextArea"
import { Order } from "../../OrderPreview/Order"
import { SkillList } from "../../SkillList/SkillList"

const ORDERS: Array<IOrder> = [
    {
        description: "",
        feedbacks: [
            {
                freelancer: {
                    id: 8989,
                    mail: "gshgsah@ghsa",
                    password: "898jjk",
                    type: "freelancer",
                    name: null,
                    lastname: null,
                    ava: null,
                    specialization: null,
                    description: null,
                    expiriens: null,
                    price: null,
                    paymentmethod: null,
                    dislike: null,
                    likes: null,
                    stack: [],
                    review: [],
                    workhistory: [],
                },
                message: ""
            }
        ],
        id: 907,
        price: 8888,
        skills: [{ id: 778, name: ".Net", order: 907 }],
        sphereOfActivity: "",
        title: "Js project",
        views: 89,
        clientId: 90
    }
]

export const EditClientProfile = () => {
    const nav = useNavigate()
    const id = useSelector((state: RootType) => {
        if (state.auth.person.id) {
            return state.auth.person.id
        } else {
            nav("/")
            return 0
        }
    })
    const mail = useSelector((state: RootType) => {
        if (state.auth.person.mail) {
            return state.auth.person.mail
        } else {
            nav("/")
            return ""
        }
    })
    const password = useSelector((state: RootType) => {
        if (state.auth.person.password) {
            return state.auth.person.password
        } else {
            nav("/")
            return ""
        }
    })
    const { name, orders, phone } = useSelector((state: RootType) => ({
        name: state.auth.person.name ? state.auth.person.name : "",
        orders: state.auth.person.orders ? state.auth.person.orders : [],
        phone: state.auth.person.phone ? state.auth.person.phone : ""
    }))
    interface IInitialValues extends TClientApi {
        newOrder: INewOrder,
    }
    const initialValues: IInitialValues = {
        id,
        mail,
        name,
        orders: ORDERS,
        password: password,
        phone,
        newOrder: {
            description: "",
            price: 0,
            skills: [{ id: 0, name: ".Net", order: id }],
            sphereOfActivity: "",
            title: "",
            feedbacks: [],
            clientId: id
        }
    }
    const HandlerSubmit = (values: FormikValues) => {
        alert(JSON.stringify(values))
    }

    return (<EditClientProfileWrapper>
        <Formik initialValues={initialValues} onSubmit={HandlerSubmit}>{({ values }) => (
            <Form>
                <EditProfileInner>
                    <EditClientProfileHeader>
                        <EditClientProfileAva src={man} />
                        <EditClientProfileEmail>{mail}</EditClientProfileEmail>
                    </EditClientProfileHeader>
                    <EditProfileContent>
                        <Field title="Имя" name="name" component={MyField} />
                        <Field title="Телефон" name="phone" component={MyField} />
                    </EditProfileContent>
                    <SectionTitle>Существующие заказы</SectionTitle>
                    {values.orders.map(order => <Order {...order} isMyOrder={true} />)}
                    <SectionTitle>Разместить заказ</SectionTitle>
                    <EditClientProfileBlock>
                        <Field name="newOrder.title" title="Название" component={MyField} />
                        <Field name="newOrder.description" title="Описание заказа" component={MyTextArea} />
                        <SkillList obj={{ order: id }} name="newOrder.skills" skills={values.newOrder.skills} />
                        <EditProfilePriceRangeWrapper>
                            <Field name="newOrder.price" title={"Цена проекта"} component={MyRange} />
                        </EditProfilePriceRangeWrapper>
                        <Button>alert</Button>
                    </EditClientProfileBlock>
                </EditProfileInner>
            </Form>
        )}
        </Formik>
    </EditClientProfileWrapper>)
}