import axios from 'axios'

import { TUserApi } from '../types/IUser'

class User {
    baseUrl

    constructor(url: string) {
        this.baseUrl = axios.create({ baseURL: url })
    }

    getUser: (mail: string, password: string) => Promise<TUserApi>
        = async (mail, password) => {
            const user = await (await this.baseUrl.get<TUserApi>(`?mail=${mail}&password=${password}`)).data
            return user
        }

    createUser = async (mail: string, password: string, type: string) => {
        await this.baseUrl.post("", { mail, password, type })
    }
}

export const UserApi = new User("http://localhost:8900/user")