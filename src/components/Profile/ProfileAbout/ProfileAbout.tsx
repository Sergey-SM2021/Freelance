import { FreelancerFullType } from "../../../models"
import { SectionTitle } from "../../Common.style"
import {
    AboutWrapper, AboutePaper,
    AboutPrice, AboutExpiriens, AboutPaymentMethod, AboutResume, AboutSkills, AboutSkillTitle, AboutSkill
} from "./ProfileAbout.style"

type ProfileAboutType = FreelancerFullType["about"]

export const ProfileAbout = ({description,expiriens,paymentMethod,price,steck}:ProfileAboutType) => {
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
                <p>более 10 лет</p>
            </AboutExpiriens>
            <AboutPaymentMethod>
                <h4>Способы оплаты:</h4>
                <p>безналичный расчёт, электронные деньги</p>
            </AboutPaymentMethod>
            <AboutResume>
                {description}
            </AboutResume>
            <AboutSkills>
                <AboutSkillTitle>Ключевые навыки:</AboutSkillTitle>
                {steck.map((skill) => (<AboutSkill>{skill}</AboutSkill>))}
            </AboutSkills>
        </AboutePaper></AboutWrapper>)
}