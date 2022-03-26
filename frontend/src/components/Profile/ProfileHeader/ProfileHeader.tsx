import { TFreelancer } from "../../../models"
import {
    Ava, HeaderWrapper,
    HeaderAbout, HeaderContent, HeaderName
} from "./ProfileHeader.style"
import bg from '../../../assets/bg.jpg'
import avaPath from '../../../assets/man.png' 

type ProfileHeaderType = TFreelancer['header']

export const ProfileHeader = ({ ava, lastName, name, specialization }: ProfileHeaderType) => {

    return (<HeaderWrapper bg={bg}>
        <Ava src={avaPath} />
        <HeaderContent>
            <HeaderName>{name} {lastName}</HeaderName>
            <HeaderAbout>{specialization}</HeaderAbout>
        </HeaderContent>
    </HeaderWrapper>)
}