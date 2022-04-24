import { IOrder } from './../../../models/IOrder';
import { ClientApi } from "../../../api/Client"
import Freelancer from "../../../api/Freelancer"
import { UserApi } from "../../../api/User"
import { TClientApi } from "../../../models/IClient"
import { TFreelancer, TFreelancerProfileSetting } from "../../../models/IFreelancer"
import { constants, ICreateOrder, ISetClientProfile, IUpdateFreelancer, TEndLoading, TSetError, TStartLoading, } from "./authTypes"
import { TDispatch, TSetFreelancer } from "./authTypes"

export const startLoading = (): TStartLoading => ({
    type: constants.STARTLOADING
})

export const endLoading = (): TEndLoading => ({
    type: constants.ENDLOADING
})

export const setError = (err: string): TSetError => ({
    type: constants.SETERR,
    payload: err
})
// standart actions

export const setClientProfile = (client: TClientApi): ISetClientProfile => ({
    // action creater
    type: constants.SETCLIENTPROFILE,
    payLoad: client
})

// client 


export const setFreelancer = (freelancer: TFreelancer): TSetFreelancer => ({
    // action creater
    payload: freelancer,
    type: constants.SETFREELANCER
})

export const UpdateFreelancer = (freelancer: TFreelancer): IUpdateFreelancer => ({
    payload: freelancer,
    type: constants.UPDATEFREELANCER
})

export const CreateOrder = (order: IOrder): ICreateOrder => ({
    type: constants.CREATEORDER,
    payLoad: order
})

// #TODO: setUser

export const CreateUser = (mail: string, password: string, role: string) => async (dispatch: TDispatch) => {
    dispatch(startLoading)
    try {
        await UserApi.createUser(mail, password, role)
        dispatch(getUser(mail, password))
        alert("Пользовотель был создан")
    } catch (e) {
        alert("Пользовотель не был создан")
    } finally {
        dispatch(endLoading)
    }
}

export const getUser = (mail: string, password: string) => async (dispatch: TDispatch) => {
    try {
        dispatch(startLoading())
        const { type, id } = (await UserApi.getUser(mail, password))
        switch (type) {
            case "freelancer":
                const freelancerProfile = await Freelancer.getFreelancerById(id)
                dispatch(setFreelancer(freelancerProfile))
                break
            case "client":
                const Client = await ClientApi.getClientById(id)
                dispatch(setClientProfile(Client))
                break
            default:
                console.log(type)
        }
    } catch (error) {
        alert("Не удалось войти")
    } finally {
        dispatch(endLoading())
    }
}

export const putFreelancer = (freelancer: TFreelancerProfileSetting) => async (dispatch: TDispatch) => {
    dispatch(startLoading())
    try {
        await Freelancer.putFreelancer(freelancer)
        const freelancerProfile = await Freelancer.getFreelancerById(freelancer.id)
        dispatch(setFreelancer(freelancerProfile))
    } catch {
        alert("Не удалось обновить профиль")
    }
    finally {
        dispatch(endLoading())
    }
}

export const putClient = (client: TClientApi) => async (dispatch: TDispatch) => {
    dispatch(startLoading())
    try {
        ClientApi.updateClient(client)
        dispatch(setClientProfile(client))
        alert("Профиль был обновлён")
    } catch (error) {
        dispatch(setError("Не удалось обновить клиента"))
    } finally {
        dispatch(endLoading())
    }
}

export const createOrder = (order: IOrder) => async (dispatch: TDispatch) => {
    try {
        ClientApi.createOrder(order)
    } catch (error) {
        // dispatch(Не удалось создать фрилансера)
    }
}