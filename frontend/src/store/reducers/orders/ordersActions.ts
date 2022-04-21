import { OrdersApi } from './../../../api/Orders';
import { IOrder } from './../../../models/IOrder'
import { constants, IEndLoading, ISetError, ISetOrders, IStartLoading } from "./ordersTypes"

export const SetError = (error: string): ISetError => ({
    type: constants.SETERROR,
    payload: error
})

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

export const fetchOrders = () => async (dispatch: any) => {
    dispatch(StartLoading())
    try {
        const orders = await OrdersApi.getOrders()
        dispatch(SetOrders(orders))
    } catch (error) {
        dispatch(SetError("Не удалось получить пользователей"))
    }
    finally {
        dispatch(EndLoading())
    }
}

