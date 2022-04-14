import React from 'react'
import {IOrder} from "../../../store/reducers/orders/ordersTypes"
import {OrderInfoSection, OrderInner, OrderMonyIcon, OrderPrice, OrderPriceSection,
    OrderSkill, OrderTitle, OrderViews, OrderWrapper} from './Order.style'
import {Skill} from "../../Common/Common.style"
import money from '../../../assets/payment.png'
import { Link } from 'react-router-dom'

const Order = ({price,skills,views,name}:IOrder) => {
    return (<OrderWrapper>
            <OrderInner>
                <OrderInfoSection>
                    <OrderTitle><Link to="/">{name}</Link></OrderTitle>
                    <OrderViews>{views} просмотр</OrderViews>
                    {skills.map((skill) => <Skill >{skill}</Skill>)}
                </OrderInfoSection>
                <OrderPriceSection>
                    <OrderMonyIcon src={money} alt="деньги"/>
                    <OrderPrice>{price}</OrderPrice>
                </OrderPriceSection>
            </OrderInner>
        </OrderWrapper>);
};

export default Order;