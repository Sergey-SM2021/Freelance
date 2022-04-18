import { TFreelancerApi } from "./IFreelancer"

export interface IOrder {
    title: string,
    price: number,
    skills: Array<ISkill>,
    views: number,
    id: number,
    description: string,
    sphereOfActivity: string,
    feedbacks: Array<IFeedback>
}

export interface IFeedback {
    freelancer: TFreelancerApi,
    message: string
}

export type INewOrder = Omit<IOrder, "views" | "id">

export interface ISkill {
    name: string,
    id: number,
    order: number
}