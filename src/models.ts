export enum paymentMethod {
    "moneyInCash" = "moneyInCash",
    "cardMoney" = "cardMoney"
}

export type WorksHistoryType = {
    name: string,
    price: number,
    skills: Array<string>
}

export type ReviewsType = {
    ava:string,
    name:string,
    description:string,
    stars:number,
    details:string
}

export type FreelancerFullType = {
    header: {
        name: string,
        lastName: string,
        ava: string,
        specialization: string,
    },
    about: {
        description: string,
        expiriens: string,
        price: number,
        steck: Array<string>,
        paymentMethod: paymentMethod,
    },
    portfolio: {
        projects: Array<string>,
    },
    workHistory: Array<WorksHistoryType>,
    id: string,
    reviews: Array<ReviewsType>
    // #FIXME: these properties are not needed by a fullfreelancer
    like: number,
    dislike: number,
}

export type FreelancerPreviewType = Omit<FreelancerFullType, "reviews" | "workHistory" | "paymentMethod" | "expiriens">

export type FreelancersType = Array<FreelancerPreviewType>
