import axios from 'axios'

import { TUserApi } from '../models'

class User {
    baseUrl
    constructor(url: string) {
        this.baseUrl = axios.create({ baseURL: url })
    }
    async getUser(mail: string, password: string) {
        const user = await (await this.baseUrl.get<TUserApi>(`?mail=${mail}&password=${password}`)).data
        return user
    }
}

export default new User("http://localhost:8900/user")