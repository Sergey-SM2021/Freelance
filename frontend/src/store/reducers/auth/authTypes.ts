import { TClient, TClientApi } from "../../../models/IClient"
import { TFreelancer } from "../../../models/IFreelancer"
import { IOrder } from "../../../models/IOrder"

export enum constants {
    SETFREELANCER = "SETFREELANCER",
    STARTLOADING = "STARTLOADING",
    ENDLOADING = "ENDLOADING",
    SETERR = "SETERR",
    UPDATEFREELANCER = "UPDATEFREELANCER",
    SETCLIENTPROFILE = "SETCLIENTPROFILE",
    CREATEORDER = "CREATENEWORDER",
    SETORDERS = "SETMYORDERS",
    SETMYORDER = "SETMYORDER"
}

export type ISetMyOrder = {
    type: constants.SETMYORDER,
    payload: IOrder
}

export type TAction = TSetFreelancer | ISetMyOrder | TStartLoading | TEndLoading | TSetError | IUpdateFreelancer | ISetClientProfile | ICreateOrder | TSetOrders

export type TDispatch = any

export type TSetOrders = {
    payload: Array<IOrder>,
    type: constants.SETORDERS
}

export type TSetFreelancer = {
    type: constants.SETFREELANCER,
    payload: TFreelancer
}

export type TInitialState = {
    isAuth: boolean,
    person: Partial<TFreelancer & TClient>,
    isLoading: boolean,
    error: string | null,
    type: string
}

export type TStartLoading = {
    type: constants.STARTLOADING
}

export type TEndLoading = {
    type: constants.ENDLOADING
}

export type TSetError = {
    type: constants.SETERR
    payload: string
}

export interface IUpdateFreelancer {
    type: constants.UPDATEFREELANCER,
    payload: TFreelancer
}

export interface ISetClientProfile {
    type: constants.SETCLIENTPROFILE,
    payLoad: TClientApi
}

export interface ICreateOrder {
    type: constants.CREATEORDER,
    payLoad: IOrder
}