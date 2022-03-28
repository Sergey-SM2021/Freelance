import { TFreelancer } from "../../../models"
import { SectionTitle, Skill, Skills } from "../../Common.style"
import {
    AboutWrapper, AboutePaper,
    AboutPrice, AboutExpiriens, AboutPaymentMethod, AboutResume, AboutSkillTitle
} from "./ProfileAbout.style"

type ProfileAboutType = TFreelancer["about"] | undefined | null

export const ProfileAbout = (props: ProfileAboutType) => {
    return (<AboutWrapper>
        <SectionTitle>
            <h3>Обо мне</h3>
        </SectionTitle>
        <AboutePaper>
            <AboutPrice>
                <h4>Стоимость работы:</h4>
                <p>{props?.price ? `от ${props.price} руб. за час` : ' не указано'}</p>
            </AboutPrice>
            <AboutExpiriens>
                <h4>Профессиональный опыт:</h4>
                <p>{props?.expiriens ? props.expiriens : 'не указан'}</p>
            </AboutExpiriens>
            <AboutPaymentMethod>
                <h4>Способы оплаты:</h4>
                <p>{props?.paymentMethod ? props.paymentMethod : 'не указан'}</p>
            </AboutPaymentMethod>
            <AboutResume>
                {props?.description ? props.description : 'Нет описания'}
            </AboutResume>
            <AboutSkillTitle>Ключевые навыки:</AboutSkillTitle>
            {
                props?.stack ?
                    <Skills>
                        {props.stack.map((skill) => (<Skill>{skill.name}</Skill>))}
                    </Skills> : <>Ключевые навыки не указаны</>
            }
        </AboutePaper></AboutWrapper>)
}