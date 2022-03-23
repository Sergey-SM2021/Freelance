import { FreelancersType } from "../../../models"

export type actionType = setFreelancersType

export enum constants {
    "SETFREELANCERS" = "SETFREELANCERS"
}

export type dispatchType = any

export type setFreelancersType = {
    payload: FreelancersType,
    type: constants.SETFREELANCERS
} 