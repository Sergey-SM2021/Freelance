import { IOrder } from "../../../models/IOrder"

export enum constants {
    STARTORDERSLOADING = "STARTORDERSLOADING",
    ENDORDERSLOADING = "ENDORDERSLOADING",
    SETORDERS = "SETORDERS"
}

export interface IStartLoading {
    type:constants.STARTORDERSLOADING
}

export interface IEndLoading {
    type:constants.ENDORDERSLOADING
}

export interface ISetOrders {
    payload:Array<IOrder>
    type: constants.SETORDERS
}

export interface IOrdersReducer {
    orders: Array<IOrder>,
    error: string | null,
    isLoading: boolean
}

export type TOrdersAction = IStartLoading | IEndLoading | ISetOrders