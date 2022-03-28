import { TFreelancer } from "../../../models"
import { SectionTitle } from "../../Common.style"
import { PortfolioContainer, PortfolioWrapper, PortfolioProject } from "./ProfilePortfolio.style"

type ProfilePortfolioType = {
    portfolio: TFreelancer["portfolio"]
} | undefined

export const ProfilePortfolio = (props: ProfilePortfolioType) => {
    return (<PortfolioWrapper>
        <SectionTitle><h3>Портфолио (9)</h3></SectionTitle>
        <PortfolioContainer>
            {props?.portfolio?.length ? props.portfolio.map((project) => (<PortfolioProject key={project} src={project} />)) : "Нет завершённых работ"}
        </PortfolioContainer>
    </PortfolioWrapper>)
}