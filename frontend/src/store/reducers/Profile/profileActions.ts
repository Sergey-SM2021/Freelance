import { Dispatch } from "redux"

import { TFreelancer } from "../../../models"
import { actionType, actionTypes, ISetProfile } from "./profileActionsTypes"
import Freelancer from '../../../api/Freelancer'

export const setPofile = (profile: TFreelancer): ISetProfile => ({
    type: actionTypes.SETPROFILE,
    payload: profile
})

export const startLoading = () => ({
    type: actionTypes.STARTLOADING
})

export const compliteLoading = () => ({
    type: actionTypes.COMPLITELOADING
})

export const getProfile = (id: number) => (
    async (dispatch: Dispatch<actionType>) => {
        const freelancerProfile = await Freelancer.getFreelancerById(id)
        dispatch(setPofile(freelancerProfile))
    }
)