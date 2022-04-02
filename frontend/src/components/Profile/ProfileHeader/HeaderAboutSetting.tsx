import { Field, Form, Formik } from "formik"
import { memo } from "react"
import { useSelector } from "react-redux"
import { RootType } from "../../../store/store"
import { ProfilePaper, ProfileWrapper } from "../Profile.style"
import { ProfileAbout } from "../ProfileAbout/ProfileAbout"
import { ProfileHeader } from "./ProfileHeader"
import { ProfilePortfolio } from "../ProfilePortfolio/ProfilePortfolio"
import { ProfileReviews } from "../ProfileReviews/ProfileReviews"
import { ProfileWorksHistory } from "../ProfileWorksHistory/ProfileWorksHistory"
import { MyField } from "../../Field/Field"

interface IForm {
    header: RootType["auth"]["person"]["header"],
}

export const PersonalAccountSettings = memo(() => {
    const header = useSelector((state: RootType) => (state.auth.person.header))
    const initialValues: IForm = { header }
    return (<Formik
        onSubmit={() => { }}
        initialValues={initialValues}>
        {({ values }) => (
            <ProfileWrapper>
                <ProfilePaper>
                <Form>
                    <Field title="Имя" name="header.name" component={MyField}/>
                    <Field title="Фамилия" name="header.lastName" component={MyField}/>
                    <Field title="Направление" name="header.specialization" component={MyField}/>
                    <button>Submit</button>
                </Form>
                </ProfilePaper>
            </ProfileWrapper>
        )}
    </Formik>)
})