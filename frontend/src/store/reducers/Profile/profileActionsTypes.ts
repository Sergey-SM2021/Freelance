import { TFreelancer } from "../../../models/IFreelancer"

export enum actionTypes {
    SETPROFILE = "SETPROFILE",
    STARTLOADING = "STARTPROFILELOADING",
    COMPLITELOADING = "COMPLITEPROFILELOADING"
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