import { createFreelancer, createClient, getClient, getFreelancer } from "../../../api/api"
import { TFreelancer } from "../../../models"
import { constats } from "./authTypes"
import { TDispatch, TSetFreelancer } from "./authTypes"

export const setFreelancer = (freelancer: TFreelancer): TSetFreelancer => ({
    payload: freelancer,
    type: constats.SETFREELANCER
})

export const CreateUser = (mail: string, password: string, role: string) => async (dispatch: TDispatch) => {
    if (role === "freelancer") {
        createFreelancer(mail, password)
    } else {
        createClient(mail, password)
    }
}

export const getUser = (mail: string, password: string) => async (dispatch: TDispatch) => {
    const client = await getClient(mail, password)
    if (client.id == undefined) {
        try {
            const freelancer = await getFreelancer(mail, password)
            dispatch(setFreelancer(freelancer))
        } catch (error) {
            if (error = 'freelancer не найден') {

            }
        }
    }
}