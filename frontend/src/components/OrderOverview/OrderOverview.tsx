import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../../store/store"
import {
    OrderOverviewAdditionalInfo,
    OrderOverviewContent,
    OrderOverviewDescription, OrderOverviewFeedback, OrderOverviewInner, OrderOverviewPrice, OrderOverviewTitle,
    OrderOverviewViews, OrderOverviewWrapper
} from "./OrderOverview.style"
import { Button, SectionTitle, Skill, Skills } from "../Common/Common.style"
import { SyntheticEvent, useEffect, useState } from "react"
import { fetchOrderOverview } from "../../store/reducers/orderOverview/OrderOverviewAction"
import { OrderOverviewClientProfile } from "./ClientProfile/ClientProfile"

export const OrderOverview = () => {
    const dispatch = useDispatch()
    const order = useSelector((state: RootType) => (state.orderOverview.order))
    const isLoading = useSelector((state: RootType) => (state.orderOverview.isLoading))
    const Error = useSelector((state: RootType) => (state.orderOverview.error))
    const [FeedbackValue, setFeedbackValue] = useState<string>("")
    const handleFeedbackChange = (e: SyntheticEvent<HTMLTextAreaElement>) => {
        setFeedbackValue(e.currentTarget.value)
    }
    const handlerSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
        alert(JSON.stringify(FeedbackValue))
    }
    useEffect(() => {
        dispatch(fetchOrderOverview(899))
    }, [])
    return (isLoading ? <>Loading...</> : Error ? <>{Error}</> :
        <OrderOverviewWrapper>
            <OrderOverviewContent>
                <OrderOverviewInner>
                    <OrderOverviewTitle>{order?.title}</OrderOverviewTitle>
                    <OrderOverviewAdditionalInfo>
                        <OrderOverviewPrice>{order?.price} руб. за проект</OrderOverviewPrice>
                        <OrderOverviewViews>{order?.views} просмотров</OrderOverviewViews>
                    </OrderOverviewAdditionalInfo>
                    <Skills>{order?.skills.map((skill) => <Skill >{skill.name}</Skill>)}</Skills>
                    <OrderOverviewDescription>
                        {order?.description}
                    </OrderOverviewDescription>
                </OrderOverviewInner>
                <SectionTitle>Ваш отклик на заказ</SectionTitle>
                <OrderOverviewInner>
                    <OrderOverviewFeedback value={FeedbackValue} onChange={handleFeedbackChange} />
                    <Button onClick={handlerSubmit}>Отозваться</Button>
                </OrderOverviewInner>
            </OrderOverviewContent>
            <OrderOverviewClientProfile/>
        </OrderOverviewWrapper>)
};