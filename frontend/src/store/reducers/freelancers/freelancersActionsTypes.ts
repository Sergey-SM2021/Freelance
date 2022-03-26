import { TFreelancer } from "../../../models"

export type actionType = setFreelancersType

export enum constants {
    "SETFREELANCERS" = "SETFREELANCERS"
}

export type dispatchType = any

export type setFreelancersType = {
    payload: Array<TFreelancer>,
    type: constants.SETFREELANCERS
} 