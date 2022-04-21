import { memo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {Order} from "../OrderPreview/Order"
import { OrdersWrapper } from "./Orders.style"
import { RootType } from "../../store/store"
import { fetchOrders } from "../../store/reducers/orders/ordersActions"
import { Navigate } from "react-router-dom"

export const Orders = memo(() => {
    const dispatch = useDispatch()
    const isLoading = useSelector((state: RootType) => (state.orders.isLoading))
    const Error = useSelector((state: RootType) => (state.orders.error))
    const orders = useSelector((state: RootType) => (state.orders.orders))
    useEffect(() => { }, [window.scrollTo(0, 0)])
    useEffect(() => {
        dispatch(fetchOrders())
    }, [])
    return (
        isLoading ? <>Loading...</> : Error ? <Navigate to="/Error"/> :
            <OrdersWrapper>{orders.map(order => <Order {...order} />)}</OrdersWrapper>
    )
})