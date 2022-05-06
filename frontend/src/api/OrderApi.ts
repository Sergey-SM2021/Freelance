import axios from "axios"
import { IOrder } from "../models/IOrder"

// const order: IOrder =
// {
//     description: `
//     But I must explain to you how all this mistaken idea of denouncing pleasure
//     and praising pain was born and I will give you
//     a complete account of the system, and expound the actual teachings of the great explorer of the truth
//     the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
//     because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences 
//     that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
//     because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. 
//     To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?
//     But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
//     or one who avoids a pain that produces no resultant pleasure?
//     `,
//     id: 898,
//     price: 89878,
//     skills: [
//         { id: 87665, name: "Redux", order: 898 },
//         { id: 5625, name: "Angular", order: 898 }
//     ],
//     title: "React",
//     views: 128,
//     sphereOfActivity: "backend",
//     feedbacks: [],
//     clientId: 786
// }

class Order {
    constructor(path: string) {
        this.path = axios.create({ baseURL: path })
    }
    createOrder: (newOrder: IOrder) => Promise<void> = async (newOrder: IOrder) => {
        try {
            await this.path.post("create", newOrder)
        } catch (error) {
            throw "Не удалось создать заказ"
        }
    }
    getOrder: (id: number) => Promise<IOrder> = async (id) => {
        try {
            const r = await (await this.path.get<IOrder>(`${id}`)).data
            return r
        } catch (error) {
            throw error
        }
    }
    path
}
// export const OrderApi = new Order("http://62.113.109.76/order/")
export const OrderApi = new Order("http://localhost:8900/order/")
