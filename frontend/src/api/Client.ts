import Axios from "axios"

class Client {
    baseURL
    constructor(baseURL: string) {
        this.baseURL = Axios.create({ baseURL })
    }
    createClient = async (mail: string, password: string) => {
        try {
            this.baseURL.post('', {
                "mail": mail,
                "password": password
            })
        } catch (error) {
            throw "Client не был создан"
        }
    }
    getClientById = async (id: number) => {
        try {
            const client = await (await this.baseURL.get(`${id}`)).data
            return client
        } catch (error) {
            throw "Client не был найден"
        }
    }
}

export const ClientApi = new Client("http://localhost:8900/client/")