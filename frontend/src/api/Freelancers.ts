import { TFreelancer, TFreelancerApi } from "../models"
import Project1 from '../assets/Projects/Project0.jpeg'
import Project2 from '../assets/Projects/Project1.jpeg'
import Project3 from '../assets/Projects/Project2.jpg'

import Axios from "axios"

class Freelancers {
    baseURL
    constructor(baseURL: string) {
        this.baseURL = Axios.create({ baseURL })
    }
    getFreelancers = async () => {
        try {
            const freelancers = (await this.baseURL.get<Array<TFreelancerApi>>("")).data
            return this.getPreviewFreelancers(freelancers)
        } catch (error) {
            throw "Freelancers не были получены"
        }
    }

    getPreviewFreelancers = (freelancers: Array<TFreelancerApi>) => {
        try {
            const previewFreeelancers: Array<TFreelancer> = freelancers.map(freelancer =>
            ({
                header: {
                    name: freelancer.name,
                    lastName: freelancer.lastname,
                    ava: freelancer.ava,
                    specialization: freelancer.specialization
                },
                about: {
                    description: freelancer.description,
                    expiriens: freelancer.expiriens,
                    price: freelancer.price,
                    stack: freelancer.stack,
                    paymentMethod: freelancer.paymentmethod,
                },
                portfolio: [Project1, Project2, Project3],
                id: freelancer.id,
                reviews: freelancer.review,
                likes: freelancer.likes,
                dislike: freelancer.dislike,
                workHistory: freelancer.workhistory
            })
            )
            return previewFreeelancers
        } catch (error) {
            throw 'Не удалось получить Preview freelancer'
        }
    }

    findFreelancersByName = async (name: string) => {
        const freelancers = await (await this.baseURL.get(`find?name=${name}`)).data
        console.log(freelancers)
        return this.getPreviewFreelancers(freelancers)
    }
}

export default new Freelancers("http://localhost:8900/freelancers/")