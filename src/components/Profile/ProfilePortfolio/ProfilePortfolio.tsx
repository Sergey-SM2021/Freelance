import { FreelancerFullType } from "../../../models"
import { SectionTitle } from "../../Common.style"
import { PortfolioContainer,PortfolioWrapper, PortfolioProject } from "./ProfilePortfolio.style"

type ProfilePortfolioType = {projects:FreelancerFullType["projects"]}

export const ProfilePortfolio = ({projects}:ProfilePortfolioType) => {
    return (<PortfolioWrapper>
        <SectionTitle><h3>Портфолио (9)</h3></SectionTitle>
        <PortfolioContainer>
            {projects.map((project) => (<PortfolioProject src={project} />))}
        </PortfolioContainer>
    </PortfolioWrapper>)
}