import { memo } from "react"
import Order from "./Order/Order";
import {IOrder} from "../../store/reducers/orders/ordersTypes";
import {OrdersWrapper} from "./Orders.style";

export const Orders = memo(() => {
    const orders:Array<IOrder> = [
        {views:9,price:8978,skills:["Nest"],name:"baclkend"},
        {views:9,price:8978,skills:["Nest"],name:"baclkend"}
    ]
    return (<OrdersWrapper>{orders.map(order => <Order {...order}/>)}</OrdersWrapper>)
})