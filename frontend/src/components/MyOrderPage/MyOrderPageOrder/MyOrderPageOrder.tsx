import { ISkill } from '../../../models/IOrder'
import { SectionTitle, Skill, Skills } from '../../Common/Common.style'
import { OrderViews } from '../../OrderPreview/Order.style'
import { OrderContent, OrderDescription, OrderHeader, OrderInner, OrderPrice, OrderTitle, OrderWrapper } from './MyOrderPageOrder.style'

interface TProps {
    price: number,
    title: string,
    description: string,
    sphereOfActivity: string,
    skills: Array<ISkill>,
    views: number,
}

export const MyOrderPageOrder = ({ title, description, sphereOfActivity, price, skills, views }: TProps) => {
    return (<OrderWrapper>
        <OrderInner>
            <SectionTitle>О заказе</SectionTitle>
            <OrderContent>
                <OrderHeader>
                    <OrderTitle>{title}/{sphereOfActivity}</OrderTitle>
                    <OrderViews>{views}</OrderViews>
                </OrderHeader>
                <OrderPrice><h4>Цена:</h4>{price}₽</OrderPrice>
                <Skills>{skills.map(skill => (<Skill >{skill.name}</Skill>))}</Skills>
                <OrderDescription>{description}</OrderDescription>
            </OrderContent>
        </OrderInner>
    </OrderWrapper>)
}