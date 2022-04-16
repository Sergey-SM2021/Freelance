import {useSelector} from "react-redux"
import {RootType} from "../../store/store"
import {
    OrderOverviewAdditionalInfo,
    OrderOverviewDescription, OrderOverviewFeedback, OrderOverviewInner, OrderOverviewPrice, OrderOverviewTitle,
    OrderOverviewViews, OrderOverviewWrapper
} from "./OrderOverview.style"
import {Button, SectionTitle, Skill, Skills} from "../Common/Common.style"
import {SyntheticEvent, useState} from "react"

export const OrderOverview = () => {
    const {id,skills,name,description,views,price,title,phone} = useSelector((state:RootType)=>(state.orderOverview.order))
    const [FeedbackValue, setFeedbackValue] = useState<string>("")
    const handleFeedbackChange = (e:SyntheticEvent<HTMLTextAreaElement>) => {
        setFeedbackValue(e.currentTarget.value)
    }
    const handlerSubmit = (e:SyntheticEvent<HTMLButtonElement>) => {
        alert(JSON.stringify(FeedbackValue))
        //send feedback
    }
    return (
        <OrderOverviewWrapper>
            <OrderOverviewInner>
                <OrderOverviewTitle>{title}</OrderOverviewTitle>
                <OrderOverviewAdditionalInfo>
                    <OrderOverviewPrice>{price} руб. за проект</OrderOverviewPrice>
                    <OrderOverviewViews>{views} просмотров</OrderOverviewViews>
                </OrderOverviewAdditionalInfo>
                <Skills>{skills.map((skill:string) => <Skill >{skill}</Skill>)}</Skills>
                <OrderOverviewDescription>
                    {description}
                </OrderOverviewDescription>
            </OrderOverviewInner>
            <SectionTitle>Ваш отклик на заказ</SectionTitle>
            <OrderOverviewInner>
                <OrderOverviewFeedback value={FeedbackValue} onChange={handleFeedbackChange}/>
                <Button onClick={handlerSubmit}>Отозваться</Button>
            </OrderOverviewInner>
        </OrderOverviewWrapper>
    );
};