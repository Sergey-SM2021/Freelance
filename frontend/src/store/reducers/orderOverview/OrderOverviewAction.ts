import { ISetError } from './orderOverviewReducerTypes'
import { OrderApi } from "../../../api/OrderApi"
import { TClientApi } from "../../../models/IClient"
import { IOrder } from "../../../models/IOrder"
import { constants, IEndLoading, ISetOrders, IStartLoading } from "./orderOverviewReducerTypes"

export const StartLoading = (): IStartLoading => ({ type: constants.STARTORDEROVERVIEWLOADING })

export const EndLoading = (): IEndLoading => ({ type: constants.ENDORDEROVERVIEWLOADING })

export const SetError: (err: string) => ISetError
    = (err) => ({ payload: err, type: constants.SETERROR })

export const SetOrder = (order: IOrder, client: TClientApi): ISetOrders => ({
    type: constants.SETORDEROVERVIEW,
    payload: {
        client,
        order
    }
})

const client: TClientApi = {
    id: 89,
    mail: "srtsamn@!ashsj",
    password: "jjhcxhj",
    orders: [],
    name: null,
    phone: null
}


export const fetchOrderOverview = (id: number) => async (dispatch: any) => {
    dispatch(StartLoading())
    try {
        const Order = await OrderApi.getOrder(id)
        dispatch(SetOrder(Order, client))
    } catch (error) {
        dispatch(SetError("Не удалось получить заказ"))
    } finally {
        dispatch(EndLoading())
    }
}