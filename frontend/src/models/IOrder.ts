import { TFreelancerApi } from "./IFreelancer"

export interface IOrder {
    title: string,
    price: number,
    views: number,
    id: number,
    description: string,
    sphereOfActivity: string,
    skills: Array<ISkill>,
    feedbacks: Array<IFeedback>
    clientId: number
}

export interface IFeedback {
    person: TFreelancerApi,
    message: string
}

export type INewOrder = Omit<IOrder, "views" | "id">

export interface ISkill {
    name: string,
    id: number,
    order: number
}