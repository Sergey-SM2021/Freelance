import { ProfileAbout } from './ProfileAbout/ProfileAbout'
import {
    ProfilePaper, ProfileWrapper
} from './Profile.style'
import { RootType } from '../../store/store'
import { ProfilePortfolio } from './ProfilePortfolio/ProfilePortfolio'
import { ProfileWorksHistory } from './ProfileWorksHistory/ProfileWorksHistory'
import { ProfileReviews } from './ProfileReviews/ProfileReviews'

import { useSelector } from 'react-redux'
import { ProfileHeader } from './ProfileHeader/ProfileHeader'

export const Profile = () => {
    const { header, about, portfolio, workHistory, reviews } = useSelector((state: RootType) => (state.profile))
    return (<ProfileWrapper>
        <ProfilePaper>
            <ProfileHeader {...header} />
            <ProfileAbout {...about} />
            <ProfileWorksHistory works={workHistory} />
            <ProfilePortfolio {...portfolio} />
            <ProfileReviews reviews={reviews}/>
        </ProfilePaper>
    </ProfileWrapper>)
}