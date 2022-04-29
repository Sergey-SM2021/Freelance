import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

import { RootType } from "../store/store"
import { EditClientProfile } from "./EditProfile/EditClientProfile/EditClientProfile"
import { FreelancerProfileSettings } from "./EditProfile/EditFreelancerProfile/EditFreelancerProfile"

export const MyProfile = () => {
    const ProfileType = useSelector((state: RootType) => (state.auth.type))
    const isAuth = useSelector((state: RootType) => (state.auth.isAuth))
    return (!isAuth ? <Navigate to="/"/> : ProfileType === "freelancer" ? <FreelancerProfileSettings /> : <EditClientProfile />)
}