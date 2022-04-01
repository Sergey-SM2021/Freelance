import { TFreelancer } from "../../../models"
import {
    Ava, HeaderWrapper,
    HeaderAbout, HeaderContent, HeaderName, Settings
} from "./ProfileHeader.style"
import bg from '../../../assets/bg.jpg'
import avaPath from '../../../assets/man.png'
import { memo } from "react"
import { useNavigate } from "react-router-dom"
import {MyField} from '../../Field/Field'
import { Field, Form } from "formik"

type TProfileHeader = {
    header: TFreelancer['header'] | undefined | null,
    isMyProfile: boolean,
    setting?: boolean
}

export const ProfileHeader = memo(({ header, isMyProfile, setting }: TProfileHeader) => {
    const nav = useNavigate()
    const settingClick = () => {
        nav('setting')
    }
    return (<HeaderWrapper bg={bg}>
        {
            setting ?
                <></>:
                <>{isMyProfile ? <Settings onClick={settingClick} /> : null}
                    <Ava src={avaPath} />
                    <HeaderContent>
                        <HeaderName>{header?.name} {header?.lastName}</HeaderName>
                        <HeaderAbout>{header?.specialization}</HeaderAbout>
                    </HeaderContent></>
        }
    </HeaderWrapper>)
})