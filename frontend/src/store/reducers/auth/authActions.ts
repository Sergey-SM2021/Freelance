import Client from "../../../api/Client"
import Freelancer from "../../../api/Freelancer"
import User from "../../../api/User"
import { TFreelancer, TFreelancerProfileSetting } from "../../../models"
import { constants, IUpdateFreelancer, TEndLoading, TSetError, TStartLoading, } from "./authTypes"
import { TDispatch, TSetFreelancer } from "./authTypes"

export const startLoading = (): TStartLoading => ({
    type: constants.STARTLOADING
})

export const endLoading = (): TEndLoading => ({
    type: constants.ENDLOADING
})

export const setFreelancer = (freelancer: TFreelancer): TSetFreelancer => ({
    // action creater
    payload: freelancer,
    type: constants.SETFREELANCER
})

export const UpdateFreelancer = (freelancer:TFreelancer):IUpdateFreelancer => ({
    payload:freelancer,
    type: constants.UPDATEFREELANCER
})

// #TODO: setUser

export const CreateUser = (mail: string, password: string, role: string) => async (dispatch: TDispatch) => {
    if (role === "freelancer") {
        const freelancer = await Freelancer.createFreelancer(mail, password)
        dispatch(setFreelancer(freelancer))
    } else {
        Client.createClient(mail, password)
    }
}

export const setError = (err:string):TSetError => ({ 
    type:constants.SETERR,
    payload:err
})

export const getUser = (mail: string, password: string) => async (dispatch: TDispatch) => {
    try {
        dispatch(startLoading())
        const { type, id } = (await User.getUser(mail, password))
        switch (type) {
            case "freelancers":
                const freelancerProfile = await Freelancer.getFreelancerById(id)
                dispatch(setFreelancer(freelancerProfile))
                break;
            default:
                break;
        }
    } catch (error) {
        
        throw "Пользователь не был получен"
    } finally {
        dispatch(endLoading())
    }
}

export const putFreelancer = (freelancer:TFreelancerProfileSetting) => async (dispatch: TDispatch) => {
    dispatch(startLoading()) 
    await Freelancer.putFreelancer(freelancer)
    dispatch(endLoading())
}

