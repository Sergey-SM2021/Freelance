import { Link } from 'react-router-dom'

import {
    OrderInfoSection, OrderInner,
    OrderMonyIcon, OrderPrice, OrderPriceSection,
    OrderTitle, OrderViews, OrderWrapper
} from './Order.style'
import { Skill, Skills } from "../Common/Common.style"
import money from '../../assets/payment.png'
import { ISkill } from "../../models/IOrder"

type TProps = {
    title: string,
    price: number,
    skills: Array<ISkill>,
    views: number,
    id: number,
    isMyOrder?: boolean
}

export const Order = ({ price, skills, views, title, id, isMyOrder }: TProps) => {
    const path = isMyOrder ? `/myOrder/${id}` : `/orderOverview/${id}`
    return (<OrderWrapper>
        <OrderInner>
            <OrderInfoSection>
                <OrderTitle><Link to={path}>{title}</Link></OrderTitle>
                <OrderViews>{views} просмотр</OrderViews>
                <Skills>{skills.map((skill) => <Skill >{skill.name}</Skill>)}</Skills>
            </OrderInfoSection>
            <OrderPriceSection>
                <OrderMonyIcon src={money} alt="деньги" />
                <OrderPrice>{price}</OrderPrice>
            </OrderPriceSection>
        </OrderInner>
    </OrderWrapper>);
}