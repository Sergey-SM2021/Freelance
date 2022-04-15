import {memo, useEffect} from "react"

import Order from "./OrdersItem/Order"
import {OrdersWrapper} from "./Orders.style"
import {useSelector} from "react-redux"
import {RootType} from "../../store/store"

export const Orders = memo(() => {
    const orders = useSelector((state:RootType)=>(state.orders.orders))
    useEffect(()=>{},[window.scrollTo(0, 0)])
    return (<OrdersWrapper>{orders.map(order => <Order {...order}/>)}</OrdersWrapper>)
})