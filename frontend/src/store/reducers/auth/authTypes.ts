import { TFreelancer } from "../../../types/models"

export enum constants {
    SETFREELANCER = "SETFREELANCER",
    STARTLOADING = "STARTLOADING",
    ENDLOADING = "ENDLOADING",
    SETERR = "SETERR",
    UPDATEFREELANCER = "UPDATEFREELANCER"
}

export type TAction = TSetFreelancer | TStartLoading | TEndLoading | TSetError | IUpdateFreelancer

export type TDispatch = any

export type TSetFreelancer = {
    type: constants.SETFREELANCER,
    payload: TFreelancer
}

export type TInitialState = {
    isAuth: boolean,
    person: TFreelancer,
    isLoading: boolean,
    error: string | null
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