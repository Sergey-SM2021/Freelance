import { TFreelancer } from "../../../models"

export enum actionTypes {
    SETPROFILE = "SETPROFILE",
    STARTLOADING = "STARTLOADING",
    COMPLITELOADING = "COMPLITELOADING"
}

export interface IStartLoading {
    type: actionTypes.STARTLOADING
}

export interface ICompliteLoading {
    type: actionTypes.COMPLITELOADING
}

export interface ISetProfile {
    type: actionTypes.SETPROFILE
    payload: TFreelancer
}

export type actionType = IStartLoading | ICompliteLoading | ISetProfile