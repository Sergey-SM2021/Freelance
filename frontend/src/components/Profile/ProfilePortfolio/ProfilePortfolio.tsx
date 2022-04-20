import { memo } from "react"
import { TFreelancer } from "../../../models/IFreelancer"
import { SectionTitle } from "../../Common/Common.style"
import { PopupImg } from "../../PopupImg/PopupImg"
import { PortfolioContainer, PortfolioWrapper } from "./ProfilePortfolio.style"

type ProfilePortfolioType = {
    portfolio: TFreelancer["portfolio"],
} | undefined

export const ProfilePortfolio = memo((props: ProfilePortfolioType) => {
    return (<PortfolioWrapper>
        <SectionTitle><h3>Портфолио (9)</h3></SectionTitle>
        <PortfolioContainer>
            {props?.portfolio?.length ? props.portfolio.map((project) => (<PopupImg key={project} src={project} />)) : "Нет завершённых работ"}
        </PortfolioContainer>
    </PortfolioWrapper>)
})