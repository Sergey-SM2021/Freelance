import { Formik } from "formik"
import { memo } from "react"
import { useSelector } from "react-redux"
import { RootType } from "../../store/store"
import { ProfilePaper, ProfileWrapper } from "./Profile.style"
import { ProfileAbout } from "./ProfileAbout/ProfileAbout"
import { ProfileHeader } from "./ProfileHeader/ProfileHeader"
import { ProfilePortfolio } from "./ProfilePortfolio/ProfilePortfolio"
import { ProfileReviews } from "./ProfileReviews/ProfileReviews"
import { ProfileWorksHistory } from "./ProfileWorksHistory/ProfileWorksHistory"

interface IForm {
    header: RootType["auth"]["person"]["header"],
    about: RootType["auth"]["person"]["about"]
}

export const PersonalAccountSettings = memo(() => {
    const header = useSelector((state: RootType) => (state.auth.person.header))
    const about = useSelector((state: RootType) => (state.auth.person.about))
    const initialValues: IForm = { about, header }
    return (<Formik
        onSubmit={() => { }}
        initialValues={initialValues}>
        {({values}) => (
            <ProfileWrapper>
                <ProfilePaper>
                    <ProfileHeader header={values.header} setting isMyProfile={false} />
                    <ProfileAbout about={values.about} setting={header} isMyProfile={false} />
                </ProfilePaper>
            </ProfileWrapper>
        )}
    </Formik>)
})