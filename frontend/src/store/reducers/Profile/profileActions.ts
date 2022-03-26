import { Dispatch } from "redux"

import { TFreelancer } from "../../../models"
import { actionType, actionTypes, ISetProfile } from "./profileActionsTypes"
import { getProfileFreelancer } from "../../../api/api"

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

export const getProfile = (id:number) => (
    async (dispatch: Dispatch<actionType>) => {
        const freelancerProfile = await getProfileFreelancer(id)
        console.log(freelancerProfile)
        dispatch(setPofile(freelancerProfile))
    }
)