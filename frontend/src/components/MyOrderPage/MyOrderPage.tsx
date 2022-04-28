import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getMyOrder } from "../../store/reducers/auth/authActions"

import { RootType } from "../../store/store"
import { MyOrderPageInner, MyOrderPageWrapper } from "./MyOrderPage.style"
import { MyOrderPageOrder } from "./MyOrderPageOrder/MyOrderPageOrder"
import { MyOrderPageReviews } from "./MyOrderPageReviews/MyOrderPageReviews"

export const MyOrderPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getMyOrder(parseInt(id)))
    }, [])
    const { feedbacks, ...order } = useSelector((state: RootType) => (state.auth.person.myOrder ? state.auth.person.myOrder : ({
        title: "string",
        price: 2,
        views: 2,
        id: 2,
        description: "string",
        sphereOfActivity: "string",
        skills: [],
        feedbacks: [],
        clientId: 2
    })))
    return (<MyOrderPageWrapper>
        <MyOrderPageInner>
            <MyOrderPageReviews feedbacks={feedbacks} />
            <MyOrderPageOrder {...order} />
        </MyOrderPageInner>
    </MyOrderPageWrapper>)
}