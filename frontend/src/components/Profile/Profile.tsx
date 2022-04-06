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
    const id = useParams().id
    const dispatch = useDispatch()
    const freelancer = useSelector((state: RootType) => (state.profile))
    const loc = useLocation().pathname
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getProfile(Number(id)))
    }, [loc])
    return (<ProfileWrapper>
        <ProfilePaper>
            <ProfileHeader header={freelancer.header} />
            <ProfileAbout about={freelancer.about} />
            <ProfileWorksHistory works={freelancer.workHistory} />
            <ProfilePortfolio portfolio={freelancer.portfolio} />
            <ProfileReviews reviews={freelancer.reviews} />
        </ProfilePaper>
    </ProfileWrapper>)
})