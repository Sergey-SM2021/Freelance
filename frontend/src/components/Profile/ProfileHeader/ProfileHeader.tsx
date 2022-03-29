import { TFreelancer } from "../../../models"
import {
    Ava, HeaderWrapper,
    HeaderAbout, HeaderContent, HeaderName
} from "./ProfileHeader.style"
import bg from '../../../assets/bg.jpg'
import avaPath from '../../../assets/man.png'
import { memo } from "react"

type TProfileHeader = TFreelancer['header'] | undefined | null

export const ProfileHeader = memo((props: TProfileHeader) => {
    return (<HeaderWrapper bg={bg}>
        <Ava src={avaPath} />
        <HeaderContent>
            <HeaderName>{props?.name} {props?.lastName}</HeaderName>
            <HeaderAbout>{props?.specialization}</HeaderAbout>
        </HeaderContent>
    </HeaderWrapper>)
})