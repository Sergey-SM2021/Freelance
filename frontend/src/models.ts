export type id = number

export type ava = string | null

export interface TUserApi {
    id: number,
    type: string
}

export interface TUser {
    id: number,
    mail: string,
    password: string,
    type: string
}

export interface TClientApi extends TUser {

}

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

export type TFreelancer = {
    header: {
        name: string | null | undefined,
        lastName: string | null | undefined,
        ava: ava | null | undefined,
        specialization: string | null | undefined,
    },
    about: {
        description: string | null | undefined,
        expiriens: string | null | undefined,
        price: number | null | undefined,
        stack: Array<TStack> | null | undefined,
        paymentMethod: string | null | undefined,
    },
    portfolio: Array<TPortfolio> | null | undefined,
    workHistory: Array<TWorkHistory> | null | undefined,
    id: id,
    reviews: Array<TReview> | null | undefined
    // #FIXME: these properties are not needed by a fullfreelancer
    likes: number | null | undefined,
    dislike: number | null | undefined,
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