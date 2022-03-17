export enum paymentMethod {
    "moneyInCash" = "moneyInCash",
    "cardMoney" = "cardMoney"
}

export type FreelancerFullType = {
    name: string,
    lastName: string,
    id: string,
    ava: string,
    specialization: string,
    projects: Array<string>,
    steck: Array<string>,
    price: number,
    description: string,
    expiriens: string,
    paymentMethod: paymentMethod,
    reviews: Array<string>
    // #FIXME: these properties are not needed by a fullfreelancer
    like: number,
    dislike: number,
}

export type FreelancerPreviewType = Omit<FreelancerFullType, "reviews" | "paymentMethod" | "expiriens">

export type FreelancersType = Array<FreelancerPreviewType>
