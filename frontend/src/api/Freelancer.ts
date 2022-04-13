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

    getFreelancerById: (id: number) => Promise<TFreelancer>
        = async (id) => {
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

    convertFreelancerToApi: (freelancer: TFreelancerProfileSetting) => TFreelancerProfileSettingApi
        = (freelancer: TFreelancerProfileSetting) => ({
            name: freelancer.header.name,
            lastname: freelancer.header.lastName,
            ava: freelancer.header.ava,
            specialization: freelancer.header.specialization,
            description: freelancer.about.description,
            expiriens: freelancer.about.expiriens,
            price: freelancer.about.price,
            paymentmethod: freelancer.about.paymentMethod,
            stack: freelancer.about.stack,
            review: [],
            workhistory: freelancer.workHistory,
            id: freelancer.id,
            mail: "",
            password: "",
            type: ""
        })

    putFreelancer: (freelancer: TFreelancerProfileSetting) => Promise<void>
        = async (freelancer) => {
            try {
                const ApiFreelancer = this.convertFreelancerToApi(freelancer)
                await this.baseURL.put(`/${ApiFreelancer.id}`, ApiFreelancer)
            } catch (error) {
                console.log(error)
            }
        }
}


export default new Freelancer("http://localhost:8900/freelancer")