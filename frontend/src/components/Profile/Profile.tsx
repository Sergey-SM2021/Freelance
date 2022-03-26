import { ProfileAbout } from './ProfileAbout/ProfileAbout'
import {
    ProfilePaper, ProfileWrapper
} from './Profile.style'
import { RootType } from '../../store/store'
import { ProfilePortfolio } from './ProfilePortfolio/ProfilePortfolio'
import { ProfileWorksHistory } from './ProfileWorksHistory/ProfileWorksHistory'
import { ProfileReviews } from './ProfileReviews/ProfileReviews'
import { ProfileHeader } from './ProfileHeader/ProfileHeader'
import { getProfile } from '../../store/reducers/Profile/profileActions'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Profile = () => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getProfile()) }, [])
    const { header, about, portfolio, workHistory, reviews } = useSelector((state: RootType) => (state.profile))
    return (<ProfileWrapper>
        <ProfilePaper>
            <ProfileHeader {...header} />
            <ProfileAbout {...about} />
            <ProfileWorksHistory works={workHistory} />
            <ProfilePortfolio portfolio={portfolio} />
            <ProfileReviews reviews={reviews} />
        </ProfilePaper>
    </ProfileWrapper>)
}