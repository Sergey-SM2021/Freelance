import avaPath from '../../assets/man.png'
import {
    Ava, PaymentMethod, ProfileResume,
    ProfileAboute, ProfileExpiriens, ProfileHeader,
    ProfileHeaderAbout, ProfileHeaderContent, ProfileHeaderName,
    ProfilePaper, ProfilePrice,
    ProfileReviews, ProfileWrapper, ProfileSkill,
    ProfileSkills, ProfileSkillTitle,
    ProfileReviewsInner,
} from './Profile.style'
import bg from '../../assets/bg.jpg'
import { RootType } from '../../store/store'
import {SectionTitle} from '../Common.style'

import { useSelector } from 'react-redux'
import { ProfilePortfolio } from './ProfilePortfolio/ProfilePortfolio'
import { ProfileWorksHistory } from './ProfileWorkHistory/ProfileWorkHistory'

export const Profile = () => {
    // #TODO: combine proerties on section as description, reviews
    const { description, name, lastName, ...profile } = useSelector((state: RootType) => (state.freelncer))
    return (<ProfileWrapper>
        <ProfilePaper>
            <ProfileHeader bg={bg}>
                <Ava src={avaPath} />
                <ProfileHeaderContent>
                    <ProfileHeaderName>{name} {lastName}</ProfileHeaderName>
                    <ProfileHeaderAbout>{profile.specialization}</ProfileHeaderAbout>
                </ProfileHeaderContent>
            </ProfileHeader>
            <SectionTitle>
                <h3>Обо мне</h3>
            </SectionTitle>
            <ProfileAboute>
                <ProfilePrice>
                    <h4>Стоимость работы:</h4>
                    <p>от {profile.price} руб. за час</p>
                </ProfilePrice>
                <ProfileExpiriens>
                    <h4>Профессиональный опыт:</h4>
                    <p>более 10 лет</p>
                </ProfileExpiriens>
                <PaymentMethod>
                    <h4>Способы оплаты:</h4>
                    <p>безналичный расчёт, электронные деньги</p>
                </PaymentMethod>
                <ProfileResume>
                    {description}
                </ProfileResume>
                <ProfileSkills>
                    <ProfileSkillTitle>Ключевые навыки:</ProfileSkillTitle>
                    {profile.steck.map((skill) => (<ProfileSkill>{skill}</ProfileSkill>))}
                </ProfileSkills>
            </ProfileAboute>
            <ProfileWorksHistory/>
            <ProfilePortfolio projects={profile.projects}/>
            <ProfileReviews>
                <SectionTitle><h3>Отзывы</h3></SectionTitle>
                <ProfileReviewsInner />
            </ProfileReviews>
        </ProfilePaper>
    </ProfileWrapper>)
}

// export const ProfileReviews = () => {
//     return (<div></div>)
// }