import { ProfileAbout } from './ProfileAbout/ProfileAbout'
import {
    Ava, HeaderWrapper, ProfileHeaderAbout, ProfileHeaderContent, ProfileHeaderName,
    ProfilePaper, ProfileWrapper
} from './Profile.style'
import bg from '../../assets/bg.jpg'
import { RootType } from '../../store/store'
import { ProfilePortfolio } from './ProfilePortfolio/ProfilePortfolio'
import { ProfileWorksHistory } from './ProfileWorkHistory/ProfileWorkHistory'
import { ProfileReviews } from './ProfileReviews/ProfileReviews'

import { useSelector } from 'react-redux'
import { FreelancerFullType } from '../../models'
import { FC } from 'react'

export const Profile = () => {
    // #TODO: combine proerties on section as description, reviews
    const { header, about, reviews, portfolio, workHistory } = useSelector((state: RootType) => (state.freelncer))
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

type ProfileHeaderType = FreelancerFullType['header'] 

export const ProfileHeader = ({ava,lastName,name,specialization}:ProfileHeaderType) => {
    
    return (<HeaderWrapper bg={bg}>
        <Ava src={ava} />
        <ProfileHeaderContent>
            <ProfileHeaderName>{name} {lastName}</ProfileHeaderName>
            <ProfileHeaderAbout>{specialization}</ProfileHeaderAbout>
        </ProfileHeaderContent>
    </HeaderWrapper>)
}