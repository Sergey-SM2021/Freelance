import { IOrder } from "../../../models/IOrder"
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
        order: IOrder,
        client: TClientApi
    }
    type: constants.SETORDEROVERVIEW
}

export type actionType = IStartLoading | IEndLoading | ISetOrders

export interface IOrderReducerInitialState {
    order: IOrder | null,
    client: TClientApi | null,
    error: string | null,
    isLoading: boolean
}