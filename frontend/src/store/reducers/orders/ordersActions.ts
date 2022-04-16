import { IOrder } from './../../../models/IOrder'
import { constants, IEndLoading, ISetOrders, IStartLoading } from "./ordersTypes";

export const StartLoading = (): IStartLoading => ({
    type: constants.STARTORDERSLOADING
})

export const EndLoading = (): IEndLoading => ({
    type: constants.ENDORDERSLOADING
})

export const SetOrders = (orders: Array<IOrder>): ISetOrders => ({
    payload: orders,
    type: constants.SETORDERS
})

const orders = [{
    name: "Разработать копию Хабр фриланса",
    price: 100000,
    skills: ["Nest", "Angular"],
    views: 89,
    id: 9986
},
{
    name: "Разработать копию Хабр фриланса",
    price: 100000,
    skills: ["Nest", "Angular"],
    views: 89,
    id: 9986
}]

export const fetchOrders = () => async (dispatch: any) => {
    dispatch(StartLoading())
    dispatch(SetOrders(orders))
    dispatch(EndLoading())
}

