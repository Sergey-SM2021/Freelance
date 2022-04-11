import { memo } from "react"

import { TFreelancer } from "../../../models"
import { SectionTitle, Skill, Skills } from "../../Common/Common.style"
import {
    AboutWrapper, AboutePaper, AboutPrice, AboutExpiriens, AboutPaymentMethod, AboutResume, AboutSkillTitle
} from "./ProfileAbout.style"

type ProfileAboutType = {
    about: TFreelancer["about"] | undefined | null,
}

export const ProfileAbout = memo(({ about }: ProfileAboutType) => {
    return (<AboutWrapper>
        <SectionTitle>
            <h3>Обо мне</h3>
        </SectionTitle>
        <AboutePaper>
            <>
                <AboutPrice>
                    <h4>Стоимость работы:</h4>
                    <p>{about?.price ? `от ${about.price} руб. за час` : ' не указано'}</p>
                </AboutPrice>
                <AboutExpiriens>
                    <h4>Профессиональный опыт:</h4>
                    <p>{about?.expiriens ? about.expiriens : 'не указан'}</p>
                </AboutExpiriens>
                <AboutPaymentMethod>
                    <h4>Способы оплаты:</h4>
                    <p>{about?.paymentMethod ? about.paymentMethod : 'не указан'}</p>
                </AboutPaymentMethod>
                <AboutResume>
                    {about?.description ? about.description : 'Нет описания'}
                </AboutResume>
                <AboutSkillTitle>Ключевые навыки:</AboutSkillTitle>
                {
                    about?.stack ?
                        <Skills>
                            {about.stack.map((skill) => (<Skill key={skill.id}>{skill.name}</Skill>))}
                        </Skills> : <>Ключевые навыки не указаны</>
                }
            </>
        </AboutePaper></AboutWrapper>)
})