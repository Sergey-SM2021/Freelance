import styled from "styled-components"

export const ProfileHeaderContent = styled.div`
    
`

export const ProfileHeaderAbout = styled.p`
    color: white;
    font-weight: 500;
`

export const ProfileHeader = styled.div<{ bg: string }>`
    box-sizing:border-box ;
    padding: 20px;
    display:flex ;
    align-items: center;
    width: 100%;
    height: 40vh;
    background-image: url(${({ bg }) => (bg)});
    background-size: cover;
    background-position: center;
`

export const Ava = styled.img`
    height: 65px;
`

export const ProfileHeaderName = styled.h2`
    color: white;
`

export const ProfileContent = styled.div`
    
`

export const ProfileWrapper = styled.div`
    padding: 10px 0px 10px 0px;
    width: 70%;
`

export const ProfilePortfolio = styled.div`
    
`

export const ProfileReviews = styled.div`
    
`

export const ProfilePaper = styled.div`
    width: 100%;
    background-color: #ffffff;
    min-height: 100vh;
`

export const ProfilePrice = styled.div`
    display: flex;
`

export const ProfileAboute = styled.section`
    color: #5d6577;
    padding: 20px;
    box-sizing: border-box;
`

export const ProfileSectionTitle = styled.div`
    display:flex ;
    background-color:#c2cad7;
    width: 100%;
    height: 40px;
    color: white;
    font-weight: 700;
    font-size: 21px;
    align-items:center ;
    h3{
        margin-left: 20px;
    }
`

export const ProfileExpiriens = styled.div`
    display: flex;
`

export const PaymentMethod = styled.div`
    display: flex;
`

export const ProfileResume = styled.p`
    
`

export const ProfileSkills = styled.div`
    box-sizing: border-box;
    padding-top: 20px;
`

export const ProfileSkill = styled.button`
    border-radius: 4px;
    border: 1px solid #5d6577;
    color: #5d6577;
    background: none;
    margin: 10px 10px 0px 0px;
`

export const ProfileSkillTitle = styled.h4`
`

export const ProfilePortfolioContainer = styled.div`
    box-sizing: border-box;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 155px 155px 155px;
    gap: 10px;
`

export const PortfolioProject = styled.div`
    width: 100%;
    height: 100%;
    background-color: #8998;
`

export const ProfileReviewsInner = styled.div`
    min-height: 30vh;
`