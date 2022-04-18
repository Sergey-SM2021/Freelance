import { useSelector } from "react-redux"

import { RootType } from "../../store/store"
import { MyOrderPageInner, MyOrderPageWrapper } from "./MyOrderPage.style"
import { MyOrderPageOrder } from "./MyOrderPageOrder/MyOrderPageOrder"
import { MyOrderPageReviews } from "./MyOrderPageReviews/MyOrderPageReviews"

export const MyOrderPage = () => {
    const { feedbacks, ...order } = useSelector((state: RootType) => (state.myOrder.Order))
    return (<MyOrderPageWrapper>
        <MyOrderPageInner>
            <MyOrderPageReviews feedbacks={feedbacks}/>
            <MyOrderPageOrder {...order}/>
        </MyOrderPageInner>
    </MyOrderPageWrapper>)
}