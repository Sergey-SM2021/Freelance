import { FreelancerFullType } from "../../../models"
import {
    Ava, HeaderWrapper,
    HeaderAbout, HeaderContent, HeaderName
} from "./ProfileHeader.style"
import bg from '../../../assets/bg.jpg'

type ProfileHeaderType = FreelancerFullType['header']

export const ProfileHeader = ({ ava, lastName, name, specialization }: ProfileHeaderType) => {

    return (<HeaderWrapper bg={bg}>
        <Ava src={ava} />
        <HeaderContent>
            <HeaderName>{name} {lastName}</HeaderName>
            <HeaderAbout>{specialization}</HeaderAbout>
        </HeaderContent>
    </HeaderWrapper>)
}