import { memo } from "react"
import { Link } from "react-router-dom"
import { TFreelancer } from "../../../models"
import { SectionTitle } from "../../Common.style"
import { PortfolioContainer, PortfolioWrapper, PortfolioProject } from "./ProfilePortfolio.style"

type ProfilePortfolioType = {
    portfolio: TFreelancer["portfolio"],
    isMyProfile:boolean
} | undefined

export const ProfilePortfolio = memo((props: ProfilePortfolioType) => {
    return (<PortfolioWrapper>
        <SectionTitle><h3>Портфолио (9){props?.isMyProfile ? <Link to="setting/portfolio">link</Link>:null}</h3></SectionTitle>
        <PortfolioContainer>
            {props?.portfolio?.length ? props.portfolio.map((project) => (<PortfolioProject key={project} src={project} />)) : "Нет завершённых работ"}
        </PortfolioContainer>
    </PortfolioWrapper>)
})