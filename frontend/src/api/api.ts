import Axios from "axios"
import { TFreelancer, TFreelancerApi } from "../models"
import Project1 from '../assets/Projects/Project0.jpeg'
import Project2 from '../assets/Projects/Project1.jpeg'
import Project3 from '../assets/Projects/Project2.jpg'

const axios = Axios.create({
    baseURL: "http://localhost:8900"
})

export const getFreelancers = async () => (await axios.get<Array<TFreelancerApi>>("/freelancers")).data

export const getPreviewFreelancers = async () => {
    const freeelancers = getFreelancers()
    const previewFreeelancers: Array<TFreelancer> = (await freeelancers).map(freelancer =>
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
        portfolio: [Project1,Project2,Project3],
        id: freelancer.id,
        reviews: freelancer.review,
        likes: freelancer.likes,
        dislike: freelancer.dislike,
        workHistory:freelancer.workhistory
    })
    )
    return previewFreeelancers
}