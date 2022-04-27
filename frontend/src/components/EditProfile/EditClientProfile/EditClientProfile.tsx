import { Field, Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { RootType } from "../../../store/store"
import {
    EditClientProfileAva, EditClientProfileEmail, EditClientProfileHeader,
    EditClientProfileWrapper, EditProfileContent, EditProfileInner
} from "./EditClientProfile.style"
import man from '../../../assets/man.png'
import { MyField } from "../../Field/MyField/Field"
import { TClientApi } from "../../../models/IClient"
import { Button, SectionTitle } from "../../Common/Common.style"
import { INewOrder } from "../../../models/IOrder"
import { Order } from "../../OrderPreview/Order"
import { putClient } from "../../../store/reducers/auth/authActions"
import { AddOrder } from "./addOrder/AddOrder"
import { ValidateSchema } from "./ValidateSchema"

interface IInitialValues extends TClientApi {
    newOrder: INewOrder,
}

export const EditClientProfile = () => {
    const dispatch = useDispatch()
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

    const initialValues: IInitialValues = {
        id,
        mail,
        name,
        orders: orders,
        password: password,
        phone,
        newOrder: {
            description: "",
            price: 0,
            skills: [],
            sphereOfActivity: "",
            title: "",
            feedbacks: [],
            clientId: id
        }
    }
    
    const HandlerSubmit = (values: IInitialValues) => {
        dispatch(putClient(values))
    }

    return (<EditClientProfileWrapper>
        <Formik
            validationSchema={ValidateSchema}
            initialValues={initialValues}
            onSubmit={HandlerSubmit}
        >{({ values }) => (<>
            <Form>
                <EditProfileInner>
                    <EditClientProfileHeader>
                        <EditClientProfileAva src={man} />
                        <EditClientProfileEmail>{mail}</EditClientProfileEmail>
                    </EditClientProfileHeader>
                    <EditProfileContent>
                        <Field title="Имя" name="name" component={MyField} />
                        <Field title="Телефон" name="phone" component={MyField} />
                        <Button>Сохранить изменения</Button>
                    </EditProfileContent>
                    <SectionTitle>Существующие заказы</SectionTitle>
                    {values.orders.map(order => <Order {...order} isMyOrder={true} />)}
                    <SectionTitle>Разместить заказ</SectionTitle>
                </EditProfileInner>
            </Form>
            <AddOrder id={id} />
        </>
        )}
        </Formik>
    </EditClientProfileWrapper>)
}