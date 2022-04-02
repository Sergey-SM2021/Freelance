import { memo } from "react"
import { Link } from "react-router-dom"
import { TFreelancer } from "../../../models"
import { EditLink, SectionTitle } from "../../Common/Common.style"
import { PortfolioContainer, PortfolioWrapper, PortfolioProject } from "./ProfilePortfolio.style"

type ProfilePortfolioType = {
    portfolio: TFreelancer["portfolio"],
    isMyProfile:boolean
} | undefined

export const ProfilePortfolio = memo((props: ProfilePortfolioType) => {
    return (<PortfolioWrapper>
        <SectionTitle><h3>Портфолио (9)</h3>{props?.isMyProfile ? <Link to="setting/portfolio"><EditLink /></Link>:null}</SectionTitle>
        <PortfolioContainer>
            {props?.portfolio?.length ? props.portfolio.map((project) => (<PortfolioProject key={project} src={project} />)) : "Нет завершённых работ"}
        </PortfolioContainer>
    </PortfolioWrapper>)
})