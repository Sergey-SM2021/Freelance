export type id = number

export type ava = string | null

export type TClientApi = {
    id: number,
    mail: string,
    password: string
}

export type TFreelancerApi = {
    name: string,
    lastname: string,
    ava: ava,
    specialization: string,
    description: string,
    expiriens: string,
    price: number,
    paymentmethod: string,
    id: id,
    dislike: number,
    likes: number,
    password: string,
    mail: string,
    stack: Array<TStack>,
    review: Array<TReview>,
    workhistory: Array<TWorkHistory>,
}

// #TODO: TFreelancerApi => TFreelancer lost mail & password

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

export type TFreelancerPreview =
    Omit<TFreelancer, "reviews" | "workHistory" | "paymentMethod" | "expiriens">