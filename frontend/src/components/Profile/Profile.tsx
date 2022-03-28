import { ProfileAbout } from './ProfileAbout/ProfileAbout'
import {
    ProfilePaper, ProfileWrapper
} from './Profile.style'
import { ProfilePortfolio } from './ProfilePortfolio/ProfilePortfolio'
import { ProfileWorksHistory } from './ProfileWorksHistory/ProfileWorksHistory'
import { ProfileReviews } from './ProfileReviews/ProfileReviews'
import { ProfileHeader } from './ProfileHeader/ProfileHeader'
import { TFreelancer } from '../../models'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfile } from '../../store/reducers/Profile/profileActions'
import { RootType } from '../../store/store'

const useProfile = (isMyProfile: boolean): TFreelancer => {
    const id = useParams().id
    const dispatch = useDispatch()
    useEffect(() => {
        if (!isMyProfile) {
            dispatch(getProfile(Number(id)))
        }
    }, [])
    const freelancer = useSelector((state: RootType) => {
        if (!isMyProfile) {
            return state.profile
        } else {
            return state.auth.person
        }
    })
    return (freelancer)
}

type TProfile = {
    isMyProfile: boolean
}

export const Profile = ({ isMyProfile }: TProfile) => {
    const freelancer = useProfile(isMyProfile)
    return (<ProfileWrapper>
        <ProfilePaper>
            <ProfileHeader {...freelancer.header} />
            <ProfileAbout {...freelancer.about} />
            <ProfileWorksHistory works={freelancer.workHistory} />
            <ProfilePortfolio portfolio={freelancer.portfolio} />
            <ProfileReviews reviews={freelancer.reviews} />
        </ProfilePaper>
    </ProfileWrapper>)
}