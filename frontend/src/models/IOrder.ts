export interface IOrder {
    title:string,
    price: number,
    skills: Array<ISkill>,
    views: number,
    id: number,
    description: string,
    sphereOfActivity: string
}

export type INewOrder = Omit<IOrder,"views"|"id">

export interface ISkill {
    name:string,
    id:number,
    order:number
}