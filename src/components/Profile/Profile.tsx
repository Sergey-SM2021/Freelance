import { ProfileAbout } from './ProfileAbout/ProfileAbout'
import {
    ProfilePaper, ProfileWrapper
} from './Profile.style'
import { RootType } from '../../store/store'
import { ProfilePortfolio } from './ProfilePortfolio/ProfilePortfolio'
import { ProfileWorksHistory } from './ProfileWorkHistory/ProfileWorkHistory'
import { ProfileReviews } from './ProfileReviews/ProfileReviews'

import { useSelector } from 'react-redux'
import { ProfileHeader } from './ProfileHeader/ProfileHeader'

export const Profile = () => {
    // #TODO: combine proerties on section as description, reviews
    const { header, about, portfolio } = useSelector((state: RootType) => (state.profile))
    return (<ProfileWrapper>
        <ProfilePaper>
            <ProfileHeader {...header}/>
            <ProfileAbout {...about}/>
            <ProfileWorksHistory />
            <ProfilePortfolio {...portfolio} />
            <ProfileReviews />
        </ProfilePaper>
    </ProfileWrapper>)
}