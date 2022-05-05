import axios from "axios"
import { IOrder } from "../models/IOrder"

class Orders {
    constructor(baseURL: string) {
        this.urlPath = axios.create({ baseURL })
    }
    urlPath
    getOrders: () => Promise<Array<IOrder>>
        = async () => {
            try {
                const NewOrders = await (await this.urlPath.get<Array<IOrder>>("")).data
                return NewOrders
            } catch (error) {
                throw error
            }
        }
}

export const OrdersApi = new Orders("http://62.113.109.76/orders")