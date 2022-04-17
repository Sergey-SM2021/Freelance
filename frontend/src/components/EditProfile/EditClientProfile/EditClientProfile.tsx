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
import { INewOrder } from "../../../models/IOrder"
import { MyRange } from "../../Field/MyRange/Range"
import { MyTextArea } from "../../Field/MyTextArea/TextArea"
import { Order } from "../../OrderPreview/Order"
import { SkillList } from "../../SkillList/SkillList"

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
        orders: state.auth.person.orders ? state.auth.person.orders : [
            {
                description: `
                But I must explain to you how all this mistaken idea of denouncing pleasure
                and praising pain was born and I will give you
                a complete account of the system, and expound the actual teachings of the great explorer of the truth
                the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences 
                that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. 
                To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?
                But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                or one who avoids a pain that produces no resultant pleasure?
                `,
                id: 898,
                price: 89878,
                skills: [{ id: 0, name: ".Net", order: id }],
                title: "React",
                views: 128,
                sphereOfActivity: "backend"
            }
        ],
        phone: state.auth.person.phone ? state.auth.person.phone : ""
    }))
    interface IInitialValues extends TClientApi {
        newOrder: INewOrder,
    }
    const initialValues: IInitialValues = {
        id,
        mail,
        name,
        orders,
        password: password,
        phone,
        newOrder: {
            description: "",
            price: 0,
            skills: [{ id: 0, name: ".Net", order: id }],
            sphereOfActivity: "",
            title: ""
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
                    {values.orders.map(order => <Order {...order} />)}
                    <SectionTitle>Разместить заказ</SectionTitle>
                    <EditClientProfileBlock>
                        <Field name="newOrder.title" title="Название" component={MyField} />
                        <Field name="newOrder.description" title="Описание заказа" component={MyTextArea} />
                        <SkillList obj={{ order: id }} name="newOrder.skills" skills={values.newOrder.skills} />)
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