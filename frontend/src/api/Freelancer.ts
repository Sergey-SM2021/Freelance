import { TFreelancer, TFreelancerApi } from "../models"
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
            const profileFreelancerApi = (await this.baseURL.get<TFreelancerApi>(`/freelancer/${id}`)).data
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
            this.baseURL.post('/freelancer',
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
            const freelancer = await (await this.baseURL.get(`/freelancer?mail=${mail}&password=${password}`)).data
            return freelancer
        } catch (error) {
            throw "freelancer не найден"
        }
    }
}

export default new Freelancer("http://localhost:8900")