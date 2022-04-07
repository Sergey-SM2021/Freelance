import { memo } from "react"

import { TFreelancer } from "../../../models"
import { Ava, HeaderWrapper, HeaderAbout, HeaderContent, HeaderName } from "./ProfileHeader.style"
import bg from '../../../assets/bg.jpg'
import avaPath from '../../../assets/man.png'

type TProfileHeader = {
    header: TFreelancer['header'] | undefined | null,
}

export const ProfileHeader = memo(({ header }: TProfileHeader) => {
    return (<HeaderWrapper bg={bg}>
        <Ava src={avaPath} />
        <HeaderContent>
            <HeaderName>{header?.name} {header?.lastName}</HeaderName>
            <HeaderAbout>{header?.specialization}</HeaderAbout>
        </HeaderContent>
    </HeaderWrapper>)
})