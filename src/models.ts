export type FreelancerType = {
    name: string,
    lastName: string,
    id: string,
    ava?: string,
    specialization: string,
    projects: [string, string, string],
    steck: Array<string>,
    price: number,
    description:string,
    like:number,
    dislike:number
}