import { TFreelancer } from "../../../models"

export type actionType = setFreelancersType | TEndLoading | TStartLoading | TSetError

export enum constants {
    "SETFREELANCERS" = "SETFREELANCERS",
    "STARTLOADING" = "STARTLOADING",
    "ENDLOADING" = "ENDLOADING",
    "SETERROR" = "SETERROR"
}

export type dispatchType = any

export type setFreelancersType = {
    payload: Array<TFreelancer>,
    type: constants.SETFREELANCERS
} 

export type TInitialState = {
    freelancers:Array<TFreelancer>,
    loading:boolean,
    error:string|null,
    count:number
}

export type TStartLoading = {
    type: constants.STARTLOADING
}

export type TEndLoading = {
    type: constants.ENDLOADING
}

export type TSetError = {
    payload: string,
    type: constants.SETERROR
}