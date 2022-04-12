import { TFreelancer, TFreelancerApi, TFreelancerProfileSetting, TFreelancerProfileSettingApi } from "../types/IFreelancer"
import Project1 from '../assets/Projects/Project0.jpeg'
import Project2 from '../assets/Projects/Project1.jpeg'
import Project3 from '../assets/Projects/Project2.jpg'

import Axios from "axios"

class Freelancer {
    baseURL
    constructor(baseURL: string) {
        this.baseURL = Axios.create({ baseURL })
    }
    getFreelancerById = async (id: number) => {
        try {
            const profileFreelancerApi = (await this.baseURL.get<TFreelancerApi>(`/${id}`)).data
            const profileFreelancer: TFreelancer = {
                header: {
                    name: profileFreelancerApi.name,
                    lastName: profileFreelancerApi.lastname,
                    ava: profileFreelancerApi.ava,
                    specialization: profileFreelancerApi.specialization
                },
                about: {
                    description: profileFreelancerApi.description,
                    expiriens: profileFreelancerApi.expiriens,
                    price: profileFreelancerApi.price,
                    stack: profileFreelancerApi.stack,
                    paymentMethod: profileFreelancerApi.paymentmethod,
                },
                portfolio: [Project1, Project2, Project3],
                id: profileFreelancerApi.id,
                reviews: profileFreelancerApi.review,
                likes: profileFreelancerApi.likes,
                dislike: profileFreelancerApi.dislike,
                workHistory: profileFreelancerApi.workhistory
            }
            return profileFreelancer
        } catch (error) {
            throw "Не удалось получить фриилансера"
        }
    }
    createFreelancer = async (mail: string, password: string) => {
        try {
            this.baseURL.post('',
                {
                    "mail": mail,
                    "password": password
                })
            const currentFreelancer = await (await this.baseURL.get('/lastFreelancer')).data
            return currentFreelancer
        } catch (error) {
            throw "Freelancer не был создан"
        }
    }
    getFreelancerByEmailPassword = async (mail: string, password: string) => {
        try {
            const freelancer = await (await this.baseURL.get(`?mail=${mail}&password=${password}`)).data
            return freelancer
        } catch (error) {
            throw "freelancer не найден"
        }
    }
    convertFreelancerToApi = (freelancer: TFreelancerProfileSetting): TFreelancerProfileSettingApi => ({
        name: freelancer.header.name,
        lastname: freelancer.header.lastName,
        ava: freelancer.header.ava,
        specialization: freelancer.header.specialization,
        description: freelancer.about.description,
        expiriens: freelancer.about.expiriens,
        price: freelancer.about.price,
        paymentmethod: freelancer.about.paymentMethod,
        // @ts-ignore
        stack: freelancer.about.stack,
        review: [],
        // @ts-ignore
        workhistory: freelancer.workHistory,
        id: freelancer.id,
        mail: "",
        password: "",
        type: ""
    })
    putFreelancer = async (freelancer: TFreelancerProfileSetting) => {
        try {
            const ApiFreelancer = this.convertFreelancerToApi(freelancer)
            await this.baseURL.put(`/${ApiFreelancer.id}`, ApiFreelancer)
        } catch (error) {
            console.log(error)
        }
    }
}


export default new Freelancer("http://localhost:8900/freelancer")