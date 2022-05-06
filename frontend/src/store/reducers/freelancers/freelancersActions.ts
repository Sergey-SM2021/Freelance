import { constants, dispatchType, setFreelancersType, TStartLoading, TEndLoading, TSetError } from "./freelancersActionsTypes"
import { TFreelancer } from "../../../models/IFreelancer"
import {FreelancersApi} from "../../../api/Freelancers"

export const setFreelancers = (freelancers: Array<TFreelancer>): setFreelancersType => ({
    payload: freelancers,
    type: constants.SETFREELANCERS
})

export const setError = (error:string): TSetError => ({
    payload: error,
    type:constants.SETERROR
})

export const startLoading = (): TStartLoading => ({
    type: constants.STARTLOADING
})

export const endLoading = (): TEndLoading => ({
    type: constants.ENDLOADING
})

export const findFreelancerByName = (name:string) => async (dispatch:dispatchType) => {
    dispatch(startLoading())
    const freelancers = await FreelancersApi.findFreelancersByName(name)
    dispatch(setFreelancers(freelancers))
    dispatch(endLoading())
}

export const getFreelancers = () => async (dispatch: dispatchType) => {
    try {
        dispatch(startLoading())
        const freelancers = await FreelancersApi.getFreelancers()
        dispatch(setFreelancers(freelancers))
    } catch (error) {
        dispatch(setError(JSON.stringify(error)))
    } finally {
        dispatch(endLoading())
    }
}