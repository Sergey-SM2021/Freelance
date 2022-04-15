import {IOrder} from "../../../models/IOrder"

export interface IOrdersReducer{
    orders:Array<IOrder>
}

export type TOrdersAction = any