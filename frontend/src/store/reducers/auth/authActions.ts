import Client from "../../../api/Client"
import Freelancer from "../../../api/Freelancer"
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
    const client = await Client.getClient(mail, password)
    if (client.id == undefined) {
        try {
            const freelancer = await Freelancer.getFreelancer(mail, password)
            dispatch(setFreelancer(freelancer))
        } catch (error) {
            if (error = 'freelancer не найден') {

            }
        }
    }
}