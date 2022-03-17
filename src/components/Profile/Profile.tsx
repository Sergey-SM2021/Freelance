import avaPath from '../../assets/man.png'
import {
    Ava, PaymentMethod, ProfileResume,
    ProfileAboute, ProfileExpiriens, ProfileHeader,
    ProfileHeaderAbout, ProfileHeaderContent, ProfileHeaderName,
    ProfilePaper, ProfilePortfolio, ProfilePrice,
    ProfileReviews, ProfileSectionTitle, ProfileWrapper, ProfileSkill,
    ProfileSkills, ProfileSkillTitle, ProfilePortfolioContainer,
    PortfolioProject, ProfileReviewsInner
} from './Profile.style'
import bg from '../../assets/bg.jpg'
import { useSelector } from 'react-redux'
import { RootType } from '../../store/store'

export const Profile = () => {
    const {description,name,lastName,...profile} = useSelector((state:RootType)=>(state.freelncer))
    return (<ProfileWrapper>
        <ProfilePaper>
            <ProfileHeader bg={bg}>
                <Ava src={avaPath} />
                <ProfileHeaderContent>
                    <ProfileHeaderName>{name} {lastName}</ProfileHeaderName>
                    <ProfileHeaderAbout>{profile.specialization}</ProfileHeaderAbout>
                </ProfileHeaderContent>
            </ProfileHeader>
            <ProfileSectionTitle>
                <h3>Обо мне</h3>
            </ProfileSectionTitle>
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
                    {profile.steck.map((skill)=>(<ProfileSkill>{skill}</ProfileSkill>))}
                </ProfileSkills>
            </ProfileAboute>
            <ProfilePortfolio>
                <ProfileSectionTitle><h3>Портфолио (9)</h3></ProfileSectionTitle>
                <ProfilePortfolioContainer>
                    {profile.projects.map((project)=>(<PortfolioProject src={project}/>))}
                </ProfilePortfolioContainer>
            </ProfilePortfolio>
            <ProfileReviews>
                <ProfileSectionTitle><h3>Отзывы</h3></ProfileSectionTitle>
                <ProfileReviewsInner />
            </ProfileReviews>
        </ProfilePaper>
    </ProfileWrapper>)
}