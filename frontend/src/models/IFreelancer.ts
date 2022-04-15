import { TUser } from "./IUser"

export type id = number
export type ava = string | null

// TODO: edit models!

export interface TFreelancerApi extends TUser {
    name: string | null,
    lastname: string | null,
    ava: ava | null,
    specialization: string | null,
    description: string | null,
    expiriens: string | null,
    price: number | null,
    paymentmethod: string | null,
    dislike: number | null,
    likes: number | null,
    stack: Array<TStack>,
    review: Array<TReview>,
    workhistory: Array<TWorkHistory>,
}

export type TFreelancerProfileSettingApi = Omit<TFreelancerApi, "dislike" | "reviews" | "likes">

export type TFreelancerProfileSetting = Omit<TFreelancer, "dislike" | "reviews" | "likes">

export type TFreelancer = {
    header: {
        name: string | null,
        lastName: string | null,
        ava: ava | null,
        specialization: string | null,
    },
    about: {
        description: string | null,
        expiriens: string | null,
        price: number | null,
        stack: Array<TStack>,
        paymentMethod: string | null,
    },
    portfolio: Array<TPortfolio>,
    workHistory: Array<TWorkHistory>,
    id: id,
    reviews: Array<TReview> | null
    // #FIXME: these properties are not needed by a fullfreelancer
    likes: number | null,
    dislike: number | null
}

export type TPortfolio = string

export type TStack = {
    id: number,
    name: string,
    freelancer: number
}

export type TWorkHistory = {
    name: string,
    price: number,
    id: number,
    freelancer: number
}

export type TReview = {
    ava: ava,
    name: string,
    lastName: string,
    description: string,
    stars: number,
    details: string,
    id: number,
    freelancer: number
}

export type TFreelancerPreview = Omit<TFreelancer, "reviews" | "workHistory" | "paymentMethod" | "expiriens">