import Project0 from '../../../assets/Projects/Project3.jpg'
import Project1 from '../../../assets/Projects/Project4.jpg'
import Project2 from '../../../assets/Projects/Project5.jpeg'
import avaPath from '../../../assets/man.png'
import { actionType, actionTypes } from "./profileActionsTypes"
import { TFreelancer } from '../../../models'

const initState: TFreelancer = {
    about: {
        description: "test",
        expiriens: "test",
        paymentMethod: "Карта банк Тинькофф",
        price: 0,
        stack: [
            {
                freelancer: 685,
                id: 990,
                name: ".Net"
            },
        ]
    },
    header: {
        ava: avaPath,
        lastName: "test",
        name: "test",
        specialization: "test",
    },
    portfolio: [
        Project0,
        Project1,
        Project2
    ],
    workHistory: [
        {
            name: "SPA на реакт",
            price: 8980,
            freelancer: 685,
            id: 68588
        }
    ],
    reviews: [
        {
            ava:avaPath,
            description:"Олегом Тайлером была проделана очень сложная работа...",
            details:"spa na react",
            freelancer:685,
            id:99942,
            lastName:"Морозов",
            name:"Николай",
            stars:5
        },
    ],
    dislike: 0,
    id: 685,
    likes: 0,
}

export const profile = (state = initState, action: actionType) => {
    switch (action.type) {
        case actionTypes.SETPROFILE:
            return (action.payload)
        default:
            return { ...state }
    }
}