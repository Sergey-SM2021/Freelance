import axios from "axios"

class Orders {
    constructor(baseURL: string) {
        this.urlPath = axios.create({baseURL})
    }
    urlPath
    getOrders = async () => {
        const orders = await this.urlPath.get("")
        return orders
    }
}

export const OrdersApi = new Orders("")