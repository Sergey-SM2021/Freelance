import { Link } from 'react-router-dom'

import {
    OrderInfoSection, OrderInner,
    OrderMonyIcon, OrderPrice, OrderPriceSection,
    OrderTitle, OrderViews, OrderWrapper
} from './Order.style'
import { Skill } from "../../Common/Common.style"
import money from '../../../assets/payment.png'
import { IOrder } from "../../../models/IOrder"

const Order = ({ price, skills, views, name, id }: IOrder) => {
    return (<OrderWrapper>
        <OrderInner>
            <OrderInfoSection>
                <OrderTitle><Link to={`/orderOverview/${id}`}>{name}</Link></OrderTitle>
                <OrderViews>{views} просмотр</OrderViews>
                {skills.map((skill: string) => <Skill >{skill}</Skill>)}
            </OrderInfoSection>
            <OrderPriceSection>
                <OrderMonyIcon src={money} alt="деньги" />
                <OrderPrice>{price}</OrderPrice>
            </OrderPriceSection>
        </OrderInner>
    </OrderWrapper>);
};

export default Order;