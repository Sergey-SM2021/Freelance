import { TFreelancer } from "../../../models"

export enum constants {
    SETFREELANCER = "SETFREELANCER",
    STARTLOADING = "STARTLOADING",
    ENDLOADING = "ENDLOADING",
    SETERR = "SETERR"
}

export type TAction = TSetFreelancer | TStartLoading | TEndLoading | TSetError

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