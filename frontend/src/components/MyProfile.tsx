import { useSelector } from "react-redux"
import { RootType } from "../store/store"
import { EditClientProfile } from "./EditProfile/EditClientProfile/EditClientProfile"
import { FreelancerProfileSettings } from "./EditProfile/EditFreelancerProfile/EditFreelancerProfile"

export const MyProfile = () => {
    const ProfileType = useSelector((state: RootType) => (state.auth.type))
    return (ProfileType === "freelancer" ? <FreelancerProfileSettings /> : <EditClientProfile />)
}