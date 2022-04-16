import { IOrderOverview } from "../../../models/IOrderOverview"
import { TClientApi } from "../../../models/IClient"

export enum constants {
    STARTORDEROVERVIEWLOADING = "STARTORDEROVERVIEWLOADING",
    ENDORDEROVERVIEWLOADING = "ENDORDEROVERVIEWLOADING",
    SETORDEROVERVIEW = "SETORDEROVERVIEW"
}

export interface IStartLoading {
    type: constants.STARTORDEROVERVIEWLOADING
}

export interface IEndLoading {
    type: constants.ENDORDEROVERVIEWLOADING
}

export interface ISetOrders {
    payload: {
        order: IOrderOverview,
        client: TClientApi
    }
    type: constants.SETORDEROVERVIEW
}

export type actionType = IStartLoading | IEndLoading | ISetOrders

export interface IOrderReducerInitialState {
    order: IOrderOverview | null,
    client: TClientApi | null,
    error: string | null,
    isLoading: boolean
}