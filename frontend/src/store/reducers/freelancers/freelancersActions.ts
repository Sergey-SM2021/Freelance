import { constants, dispatchType, setFreelancersType } from "./freelancersActionsTypes"
import { TFreelancer } from "../../../models"
import Freelancers from "../../../api/Freelancers"

export const setFreelancers = (freelancers: Array<TFreelancer>): setFreelancersType => ({
    payload: freelancers,
    type: constants.SETFREELANCERS
})

export const getFreelancers = () => async (dispatch: dispatchType) => {
    const freelancers = await Freelancers.getPreviewFreelancers()
    dispatch(setFreelancers(freelancers))
}