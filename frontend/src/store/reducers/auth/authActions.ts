import Client from "../../../api/Client"
import Freelancer from "../../../api/Freelancer"
import User from "../../../api/User"
import { TFreelancer } from "../../../models"
import { constats } from "./authTypes"
import { TDispatch, TSetFreelancer } from "./authTypes"

export const setFreelancer = (freelancer: TFreelancer): TSetFreelancer => ({
    payload: freelancer,
    type: constats.SETFREELANCER
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

export const getUser = (mail: string, password: string) => async (dispatch: TDispatch) => {
    try {
        const { type, id } = (await User.getUser(mail, password))
        switch (type) {
            case "freelancers":
                const freelancerProfile = await Freelancer.getProfileFreelancer(id)
                dispatch(setFreelancer(freelancerProfile))
                break;
            default:
                break;
        }
    } catch (error) {
        throw "Пользователь не был получен"
    }
}