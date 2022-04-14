export interface IOrder {
    name: string,
    price: number,
    skills: Array<string> ,
    views: number
}

export interface IOrdersReducer{
    orders:Array<IOrder>
}

export type TOrdersAction = any