import { IOrder } from "./IOrder";

export interface TClientApi {
    id: number,
    mail: string,
    password: string,
    orders: Array<IOrder>,
    name: string | null,
    phone: string | null
}

export interface TClient extends TClientApi {
    myOrder: IOrder
}

    // id: number,
    // mail: string,
    // password: string,
    // orders: Array<IOrder>,
    // name: string | null,
    // phone: string | null
    // myOrder: IOrder