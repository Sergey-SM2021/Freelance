import { TFreelancer } from "../../../models"

export enum constats {
    SETFREELANCER = "SETFREELANCER"
}

export type TAction = TSetFreelancer 

export type TDispatch = any

export type TSetFreelancer = {
    type: constats.SETFREELANCER,
    payload: TFreelancer
}