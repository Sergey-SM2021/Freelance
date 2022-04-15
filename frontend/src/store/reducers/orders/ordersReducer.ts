import {TOrdersAction, IOrdersReducer} from "./ordersTypes";

const initialState: IOrdersReducer = {
    orders:[
        {
            name:"Разработать копию Хабр фриланса",
            price:100000,
            skills:[],
            views:89,
            id:9986
        }
    ]
}

export const ordersReducer = (state = initialState,action:TOrdersAction) => {
    return {...state}
}