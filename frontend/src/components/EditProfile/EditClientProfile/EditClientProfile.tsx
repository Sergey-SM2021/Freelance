import { Field, Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { memo, useState } from "react"

import { RootType } from "../../../store/store"
import {
    EditClientProfileAva, EditClientProfileEmail, EditClientProfileHeader,
    EditClientProfileList,
    EditClientProfileWrapper, EditProfileContent, EditProfileInner, WatchMore
} from "./EditClientProfile.style"
import man from '../../../assets/man.png'
import { MyField } from "../../Field/MyField/Field"
import { Button, SectionTitle } from "../../Common/Common.style"
import { INewOrder } from "../../../models/IOrder"
import { Order } from "../../OrderPreview/Order"
import { getOrders, putClient } from "../../../store/reducers/auth/authActions"
import { AddOrder } from "./addOrder/AddOrder"
import { ValidateSchema } from "./ValidateSchema"
import { TClientApi } from "../../../models/IClient"


interface IInitialValues {
    newOrder: INewOrder,
    id: number,
    mail: string,
    password: string,
    name: string | null,
    phone: string | null
}

export const EditClientProfile = memo(() => {
    const [pageSize, setPageSize] = useState<number>(6)
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
    const handlerPagination = () => {
        dispatch(getOrders(pageSize, id))
        setPageSize(pageSize + 3);
    }
    const mail = useSelector((state: RootType) => {
        if (state.auth.person.mail) {
            return state.auth.person.mail
        } else {
            nav("/")
            return ""
        }
    })

    const orders = useSelector((state: RootType) => state.auth.person.orders ? state.auth.person.orders : [])

    const password = useSelector((state: RootType) => {
        if (state.auth.person.password) {
            return state.auth.person.password
        } else {
            nav("/")
            return ""
        }
    })

    const { name, phone, isLoading } = useSelector((state: RootType) => ({
        name: state.auth.person.name ? state.auth.person.name : "",
        phone: state.auth.person.phone ? state.auth.person.phone : "",
        isLoading: state.auth.isLoading
    }))

    const initialValues: IInitialValues = {
        id,
        mail,
        name,
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

    const HandlerSubmit = (values: Pick<TClientApi, "name" | "phone">) => {
        // @ts-ignore
        dispatch(putClient(values))
    }

    return (!isLoading ? <EditClientProfileWrapper>
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
                </EditProfileInner>
            </Form>
            <SectionTitle>Разместить заказ</SectionTitle>
            <AddOrder id={id} />
            <SectionTitle>Существующие заказы</SectionTitle>
        </>
        )}
        </Formik>
        <EditClientProfileList>
            {orders.map(order => <Order {...order} isMyOrder={true} />)}
        </EditClientProfileList>
        <WatchMore onClick={handlerPagination}>Загрузить ещё</WatchMore>
    </EditClientProfileWrapper> : <>Loading</>)
})