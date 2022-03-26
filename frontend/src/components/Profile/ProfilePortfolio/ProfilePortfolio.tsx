import { TFreelancer } from "../../../models"
import { SectionTitle } from "../../Common.style"
import { PortfolioContainer, PortfolioWrapper, PortfolioProject } from "./ProfilePortfolio.style"

type ProfilePortfolioType = {
    portfolio:TFreelancer["portfolio"]
}

export const ProfilePortfolio = ({portfolio}: ProfilePortfolioType) => {
    return (<PortfolioWrapper>
        <SectionTitle><h3>Портфолио (9)</h3></SectionTitle>
        <PortfolioContainer>
            {portfolio.map((project) => (<PortfolioProject src={project} />))}
        </PortfolioContainer>
    </PortfolioWrapper>)
}