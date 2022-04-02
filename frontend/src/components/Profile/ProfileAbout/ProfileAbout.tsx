import { Field } from "formik"
import { memo } from "react"
import { TFreelancer } from "../../../models"
import { MyField } from "../../Field/Field"
import { Edit, SectionTitle, Skill, Skills } from "../../Common.style"
import {
    AboutWrapper, AboutePaper,
    AboutPrice, AboutExpiriens, AboutPaymentMethod, AboutResume, AboutSkillTitle
} from "./ProfileAbout.style"
import { Link } from "react-router-dom"
import edit from '../../../assets/pencil.png'

type ProfileAboutType = {
    about: TFreelancer["about"] | undefined | null,
    isMyProfile: boolean
}

interface ISettingTitleAndDescription {
    name: string | null | undefined,
    lastName: string | null | undefined,
    specialization: string | null | undefined,
    description: string | null | undefined,
    expiriens: string | null | undefined,
    paymentMethod: string | null | undefined,
    price: number | null | undefined
}

const SettingTitleAndDescription = ({ description, expiriens, lastName, name, paymentMethod, price, specialization }: ISettingTitleAndDescription) => {
    return (<>
        <Field name='header[name]' title="Имя" values={name} component={MyField} />
        <Field name='header[lastName]' title="Фамилия" values={lastName} component={MyField} />
        <Field name='header[specialization]' title="Специализация" values={specialization} component={MyField} />
        <Field name='about[description]' title="Описание" values={description} component={MyField} />
        <Field name='about[expiriens]' title="Опыт разработки" values={expiriens} component={MyField} />

        <Field name='about[paymentMethod]' title="Способ оплаты" values={paymentMethod} component={MyField} />
        <Field name='about[price]' title="Цена" values={price} component={MyField} />
    </>)
}

export const ProfileAbout = memo(({ about, isMyProfile }: ProfileAboutType) => {
    return (<AboutWrapper>
        <SectionTitle>
            <h3>Обо мне</h3>
            { isMyProfile ? <Link to="setting/about"><Edit src={edit}/></Link>:null }
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