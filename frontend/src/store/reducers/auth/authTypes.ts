import { TFreelancer } from "../../../models"

export enum constats {
    SETFREELANCER = "SETFREELANCER",
    STARTLOADING = "STARTLOADING",
    ENDLOADING = "ENDLOADING"
}

export type TAction = TSetFreelancer | TStartLoading | TEndLoading

export type TDispatch = any

export type TSetFreelancer = {
    type: constats.SETFREELANCER,
    payload: TFreelancer
}

export type TInitialState = {
    isAuth: boolean,
    person: TFreelancer,
    isLoading: boolean,
    error: string | null
}

export type TStartLoading = {
    type: constats.STARTLOADING
}

export type TEndLoading = {
    type: constats.ENDLOADING
}