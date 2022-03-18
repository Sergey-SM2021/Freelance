export enum paymentMethod {
    "moneyInCash" = "moneyInCash",
    "cardMoney" = "cardMoney"
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
    workHistory:{},
    id: string,
    reviews: Array<string>
    // #FIXME: these properties are not needed by a fullfreelancer
    like: number,
    dislike: number,
}

export type FreelancerPreviewType = Omit<FreelancerFullType, "reviews" | "workHistory" | "paymentMethod" | "expiriens">

export type FreelancersType = Array<FreelancerPreviewType>
