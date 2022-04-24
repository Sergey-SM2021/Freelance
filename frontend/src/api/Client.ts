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
                debugger
                return client
            } catch (error) {
                throw "Client не был найден"
            }
        }

    updateClient: (client: TClientApi) => void = (client) => {
        try {
            this.baseURL.put(`update/${client.id}`, client)
        } catch (error) {
            throw "Не удалось обновить client"
        }
    }

    createOrder: (newOrder: IOrder) => void = async (newOrder) => {
        try {
            console.log(newOrder)
            await this.baseURL.post<void>("createOrder", newOrder)
        } catch (error) {

        }
    }
}

export const ClientApi = new Client("http://localhost:8900/client/")