export type id = number

export type ava = string | null

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

export type TFreelancer = {
    header: {
        name: string,
        lastName: string,
        ava: ava,
        specialization: string,
    },
    about: {
        description: string,
        expiriens: string,
        price: number,
        stack: Array<TStack>,
        paymentMethod: string,
    },
    portfolio: Array<TPortfolio>,
    workHistory: Array<TWorkHistory>,
    id: id,
    reviews: Array<TReview>
    // #FIXME: these properties are not needed by a fullfreelancer
    likes: number,
    dislike: number,
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