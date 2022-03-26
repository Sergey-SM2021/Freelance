import { TFreelancer } from "../../../models"
import { SectionTitle, Skill, Skills } from "../../Common.style"
import {
    AboutWrapper, AboutePaper,
    AboutPrice, AboutExpiriens, AboutPaymentMethod, AboutResume, AboutSkillTitle
} from "./ProfileAbout.style"

type ProfileAboutType = TFreelancer["about"]

export const ProfileAbout = ({ description, expiriens, paymentMethod, price, stack }: ProfileAboutType) => {
    return (<AboutWrapper>
        <SectionTitle>
            <h3>Обо мне</h3>
        </SectionTitle>
        <AboutePaper>
            <AboutPrice>
                <h4>Стоимость работы:</h4>
                <p>от {price} руб. за час</p>
            </AboutPrice>
            <AboutExpiriens>
                <h4>Профессиональный опыт:</h4>
                <p>{expiriens}</p>
            </AboutExpiriens>
            <AboutPaymentMethod>
                <h4>Способы оплаты:</h4>
                <p>{paymentMethod}</p>
            </AboutPaymentMethod>
            <AboutResume>
                {description}
            </AboutResume>
            <AboutSkillTitle>Ключевые навыки:</AboutSkillTitle>
            <Skills>
                {stack.map((skill) => (<Skill>{skill.name}</Skill>))}
            </Skills>
        </AboutePaper></AboutWrapper>)
}