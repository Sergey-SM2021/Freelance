import { Dispatch } from "redux"

import { TFreelancer } from "../../../models/IFreelancer"
import { actionType, actionTypes, ICompliteLoading, ISetProfile, IStartLoading } from "./profileActionsTypes"
import { FreelancerApi } from '../../../api/Freelancer'

export const setPofile = (profile: TFreelancer): ISetProfile => ({
    type: actionTypes.SETPROFILE,
    payload: profile
})

export const startLoading = (): IStartLoading => ({
    type: actionTypes.STARTLOADING
})

export const compliteLoading = (): ICompliteLoading => ({
    type: actionTypes.COMPLITELOADING
})

export const getProfile = (id: number) => (
    async (dispatch: Dispatch<actionType>) => {
        dispatch(startLoading())
        const freelancerProfile = await FreelancerApi.getFreelancerById(id)
        dispatch(setPofile(freelancerProfile))
        dispatch(compliteLoading())
    }
)