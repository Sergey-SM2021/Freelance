import { FreelancerFullType } from "../../../models"
import { SectionTitle } from "../../Common.style"
import { PortfolioContainer, PortfolioWrapper, PortfolioProject } from "./ProfilePortfolio.style"

type ProfilePortfolioType = FreelancerFullType["portfolio"]

export const ProfilePortfolio = (portfolio: ProfilePortfolioType) => {
    return (<PortfolioWrapper>
        <SectionTitle><h3>Портфолио (9)</h3></SectionTitle>
        <PortfolioContainer>
            {portfolio.projects.map((project) => (<PortfolioProject src={project} />))}
        </PortfolioContainer>
    </PortfolioWrapper>)
}