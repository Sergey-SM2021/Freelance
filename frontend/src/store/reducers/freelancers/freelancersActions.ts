import { constants, dispatchType, setFreelancersType } from "./freelancersActionsTypes"
import * as api from '../../../api/api'
import { TFreelancer } from "../../../models"

export const setFreelancers = (freelancers: Array<TFreelancer>): setFreelancersType => ({
    payload: freelancers,
    type: constants.SETFREELANCERS
})

export const getFreelancers = () => async (dispatch: dispatchType) => {
    const freelancers = await api.getPreviewFreelancers()
    dispatch(setFreelancers(freelancers))
}