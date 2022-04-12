import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import { ProfileAbout } from './ProfileAbout/ProfileAbout'
import { ProfilePaper, ProfileWrapper } from './Profile.style'
import { ProfilePortfolio } from './ProfilePortfolio/ProfilePortfolio'
import { ProfileWorksHistory } from './ProfileWorksHistory/ProfileWorksHistory'
import { ProfileReviews } from './ProfileReviews/ProfileReviews'
import { ProfileHeader } from './ProfileHeader/ProfileHeader'
import { getProfile } from '../../store/reducers/Profile/profileActions'
import { RootType } from '../../store/store'

type TProfile = {
    isMyProfile: boolean
}

export const Profile = memo(({ isMyProfile }: TProfile) => {
    const isLoading = useSelector((state: RootType) => (state.profile.isLoading))
    const id = useParams().id
    const dispatch = useDispatch()
    const loc = useLocation().pathname
    const whoseProfile = useSelector((state: RootType) => (state.profile.whoseProfile))
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getProfile(Number(id)))
    }, [])
    // console.log(freelancer)
    return (<ProfileWrapper>
        <ProfilePaper>
            <>
                {
                    isLoading ? "loading..." : <FreelancerProfile />
                }
            </>
        </ProfilePaper>
    </ProfileWrapper>)
})

export const FreelancerProfile = () => {
    const freelancer = useSelector((state: RootType) => (state.profile.profile))
    return (
        <>
            <ProfileHeader header={freelancer.header} />
            <ProfileAbout about={freelancer.about} />
            <ProfileWorksHistory works={freelancer.workHistory} />
            <ProfilePortfolio portfolio={freelancer.portfolio} />
            <ProfileReviews reviews={freelancer.reviews} />
        </>
    )
}