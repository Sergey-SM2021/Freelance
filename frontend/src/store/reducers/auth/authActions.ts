import { OrderApi } from './../../../api/OrderApi';
import { IOrder } from './../../../models/IOrder';
import { ClientApi } from "../../../api/Client"
import { FreelancerApi } from "../../../api/Freelancer"
import { UserApi } from "../../../api/User"
import { TClientApi } from "../../../models/IClient"
import { TFreelancer, TFreelancerProfileSetting } from "../../../models/IFreelancer"
import { constants, IAddOrderIntoMyOrders, ICreateOrder, ISetClientProfile, ISetMyOrder, IUpdateFreelancer, TEndLoading, TSetError, TSetOrders, TStartLoading, } from "./authTypes"
import { TDispatch, TSetFreelancer } from "./authTypes"
import { OrdersApi } from '../../../api/Orders';

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
                const freelancerProfile = await FreelancerApi.getFreelancerById(id)
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
        await FreelancerApi.putFreelancer(freelancer)
        const freelancerProfile = await FreelancerApi.getFreelancerById(freelancer.id)
        dispatch(setFreelancer(freelancerProfile))
        alert("Профиль был успешно обнавлён")
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
        await ClientApi.updateClient(client)
        dispatch(setClientProfile(client))
        alert("Профиль был обновлён")
    } catch (error) {
        dispatch(setError("Не удалось обновить клиента"))
    } finally {
        dispatch(endLoading())
    }
}

const addOrderIntoMyOrders = (order: IOrder): IAddOrderIntoMyOrders => ({
    payLoad: order,
    type: constants.ADDORDERINTOMYORDERS
})

export const createOrder = (order: IOrder) => async (dispatch: TDispatch) => {
    dispatch(startLoading())
    try {
        // await ClientApi.createOrder(order)
        await OrderApi.createOrder(order)
        dispatch(addOrderIntoMyOrders(order))
        alert("заказ был успешно создан")
    } catch (error) {
        dispatch(setError("Не удалось обновить клиента"))
    }
    finally {
        dispatch(endLoading())
    }
}

export const setOrders = (orders: Array<IOrder>): TSetOrders => ({
    payload: orders,
    type: constants.SETORDERS
})

export const getOrders = (сount: number, userId: number) => async (dispatch: any) => {
    console.log(сount, userId)
    dispatch(startLoading())
    try {
        const orders = await OrdersApi.getClientOrders(сount, userId)
        dispatch(setOrders(orders))
    } catch (error) {
        dispatch(setError("Не удалось получить заказы"))
    } finally {
        dispatch(endLoading())
    }
}

const setMyOrder = (myOrder: IOrder): ISetMyOrder => ({
    payload: myOrder,
    type: constants.SETMYORDER
})

export const getMyOrder = (id: number) => async (dispatch: any) => {
    dispatch(startLoading())
    try {
        const order = await OrderApi.getOrder(id)
        dispatch(setMyOrder(order))
    } catch (error) {

    }
    dispatch(endLoading())
}