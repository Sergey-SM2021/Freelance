import { memo } from "react"
import { SectionTitle } from "../../Common/Common.style"
import { ProfilePaper, ProfileWrapper } from "../Profile.style"
import { PersonalAccountSettings } from "./PersanalSetting"
import { AboutSetting } from './AboutSetting'
import { WorkSettings } from './WorkSetting'

export const ProfileSettings = memo(() => {
    return (<ProfileWrapper>
        <SectionTitle>Личные данные</SectionTitle>
        <ProfilePaper isMainPage>
            <PersonalAccountSettings />
        </ProfilePaper>
        <SectionTitle>Личные данные</SectionTitle>
        <ProfilePaper isMainPage>
            <AboutSetting />
        </ProfilePaper>
        <SectionTitle>Завершенные заказы</SectionTitle>
        <ProfilePaper isMainPage>
            <WorkSettings />
        </ProfilePaper>
        <SectionTitle>Мои работы</SectionTitle>
        <ProfilePaper isMainPage>
            <></>
        </ProfilePaper>
    </ProfileWrapper>)
})
























































// import { Field, Form, Formik } from "formik"
// import { memo } from "react"
// import { useSelector } from "react-redux"
// import { RootType } from "../../../store/store"
// import { ProfilePaper, ProfileWrapper } from "../Profile.style"
// import { MyField } from "../../Field/Field"
// import { Button } from "../../Common/Common.style"

// interface IForm {
//     header: RootType["auth"]["person"]["header"],
// }

// export const PersonalAccountSettings = memo(() => {
//     const header = useSelector((state: RootType) => (state.auth.person.header))
//     const initialValues: IForm = { header }
//     const saveHandler = () => {
//         alert("put data...")
//     }
//     return (<Formik
//         onSubmit={() => { }}
//         initialValues={initialValues}>
//         {({ values }) => (
//             <ProfileWrapper>
//                 <ProfilePaper isMainPage>
//                     <Form>
//                         <Field title="Имя" name="header.name" component={MyField} />
//                         <Field title="Фамилия" name="header.lastName" component={MyField} />
//                         <Field title="Направление" name="header.specialization" component={MyField} />
//                         <Button onClick={saveHandler}>Сохранить изменнения</Button>
//                     </Form>
//                 </ProfilePaper>
//             </ProfileWrapper>
//         )}
//     </Formik>)
// })