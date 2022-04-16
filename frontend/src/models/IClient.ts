import { IOrder } from "./IOrder";

export interface TClientApi{
    id: number,
    mail: string,
    password: string,
    orders:Array<IOrder>
}