import { TClientApi } from "../../../models/IClient"
import { TFreelancer } from "../../../models/IFreelancer"

export enum constants {
    SETFREELANCER = "SETFREELANCER",
    STARTLOADING = "STARTLOADING",
    ENDLOADING = "ENDLOADING",
    SETERR = "SETERR",
    UPDATEFREELANCER = "UPDATEFREELANCER",
    SETCLIENTPROFILE = "SETCLIENTPROFILE"
}

export type TAction = TSetFreelancer | TStartLoading | TEndLoading | TSetError | IUpdateFreelancer | ISetClientProfile

export type TDispatch = any

export type TSetFreelancer = {
    type: constants.SETFREELANCER,
    payload: TFreelancer
}

export type TInitialState = {
    isAuth: boolean,
    // don't person / profile
    person: Partial<TFreelancer & TClientApi>,
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