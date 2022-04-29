import Axios from "axios"
import { TClientApi } from "../models/IClient"
import { IOrder } from "../models/IOrder"

class Client {
    baseURL

    constructor(baseURL: string) {
        this.baseURL = Axios.create({ baseURL })
    }

    createClient: (mail: string, password: string) => Promise<void>
        = async (mail, password) => {
            try {
                this.baseURL.post('', {
                    "mail": mail,
                    "password": password
                })
            } catch (error) {
                throw "Client не был создан"
            }
        }

    getClientById: (id: number) => Promise<TClientApi>
        = async (id) => {
            try {
                const client = await (await this.baseURL.get<TClientApi>(`${id}`)).data
                return client
            } catch (error) {
                throw "Client не был найден"
            }
        }

    updateClient: (client: TClientApi) => Promise<void> = async (client) => {
        try {
            await this.baseURL.put(`update/${client.id}`, client)
        } catch (error) {
            throw "Не удалось обновить client"
        }
    }

    createOrder: (newOrder: IOrder) => Promise<void> = async (newOrder: IOrder) => {
        try {
            await this.baseURL.post("createOrder", newOrder)
        } catch (error) {
            throw "Не удалось создать заказ"
        }
    }

    getOrders: (count: number, userId: number) => Promise<Array<IOrder>> = async (count, userId) => {
        try {
            const newOrders = await (await this.baseURL.get<Array<IOrder>>(`orders/${count}/${userId}`)).data
            console.log(newOrders)
            return newOrders
        } catch (error) {
            throw "Не удалось загрузить заказы"
        }
    }

    // getOrder: (id: Number) => Promise<IOrder> = async (id) => {
    //     try {
    //         return await (await this.baseURL.get(`order/${id}`)).data
    //     } catch (error) {

    //     }
    // }
}

export const ClientApi = new Client("http://localhost:8900/client/")