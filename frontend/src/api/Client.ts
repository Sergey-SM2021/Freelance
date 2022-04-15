import Axios from "axios"
import { TClientApi } from "../models/IClient"

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

    getClientById : (id: number) => Promise<TClientApi> 
        = async (id) => {
            try {
                const client = await (await this.baseURL.get<TClientApi>(`${id}`)).data
                return client
            } catch (error) {
                throw "Client не был найден"
            }
        }
}

export const ClientApi = new Client("http://localhost:8900/client/")