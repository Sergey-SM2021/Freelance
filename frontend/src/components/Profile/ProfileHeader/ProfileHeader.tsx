import { TFreelancer } from "../../../models"
import {
    Ava, HeaderWrapper,
    HeaderAbout, HeaderContent, HeaderName, Settings
} from "./ProfileHeader.style"
import bg from '../../../assets/bg.jpg'
import avaPath from '../../../assets/man.png'
import { memo } from "react"

type TProfileHeader = {
    header: TFreelancer['header'] | undefined | null,
    isMyProfile: boolean,
}

export const ProfileHeader = memo(({ header, isMyProfile }: TProfileHeader) => {
    return (<HeaderWrapper bg={bg}>
        <Ava src={avaPath} />
        <HeaderContent>
            <HeaderName>{header?.name} {header?.lastName}</HeaderName>
            <HeaderAbout>{header?.specialization}</HeaderAbout>
        </HeaderContent>
    </HeaderWrapper>)
})