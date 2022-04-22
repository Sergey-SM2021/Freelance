import { TClientApi } from "../../../models/IClient"
import { IOrder } from "../../../models/IOrder"
import { constants, IEndLoading, ISetOrders, IStartLoading } from "./orderOverviewReducerTypes"

export const StartLoading = (): IStartLoading => ({ type: constants.STARTORDEROVERVIEWLOADING })

export const EndLoading = (): IEndLoading => ({ type: constants.ENDORDEROVERVIEWLOADING })

export const SetOrder = (order: IOrder, client: TClientApi): ISetOrders => ({
    type: constants.SETORDEROVERVIEW,
    payload: {
        client,
        order
    }
})

const client: TClientApi = {
    id: 89,
    mail: "srtsamn@!ashsj",
    password: "jjhcxhj",
    orders:[],
    name:null,
    phone:null
}
const order: IOrder =
{
    description: `
    But I must explain to you how all this mistaken idea of denouncing pleasure
    and praising pain was born and I will give you
    a complete account of the system, and expound the actual teachings of the great explorer of the truth
    the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
    because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences 
    that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
    because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. 
    To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?
    But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
    or one who avoids a pain that produces no resultant pleasure?
    `,
    id: 898,
    price: 89878,
    skills: [
        {id:87665,name:"Redux",order:898},
        {id:5625,name:"Angular",order:898}
    ],
    title: "React",
    views: 128,
    sphereOfActivity:"backend",
    feedbacks:[],
    clientId:786
}

export const fetchOrderOverview = () => async (dispatch: any) => {
    dispatch(StartLoading())
    setTimeout(() => {
        dispatch(SetOrder(order, client))
        dispatch(EndLoading())
    }, 1000)
}