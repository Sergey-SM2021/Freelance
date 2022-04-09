import Project0 from '../../../assets/Projects/Project3.jpg'
import Project1 from '../../../assets/Projects/Project4.jpg'
import Project2 from '../../../assets/Projects/Project5.jpeg'
import avaPath from '../../../assets/man.png'
import { actionType, actionTypes } from "./profileActionsTypes"
import { TFreelancer } from '../../../models'

interface IInitState {
    profile: TFreelancer,
    isLoading: boolean
}

const initState: IInitState = {
    profile: {
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
                ava: avaPath,
                description: "Олегом Тайлером была проделана очень сложная работа...",
                details: "spa na react",
                freelancer: 685,
                id: 99942,
                lastName: "Морозов",
                name: "Николай",
                stars: 5
            },
        ],
        dislike: 0,
        id: 685,
        likes: 0,
    },
    isLoading: false
}

export const profile = (state = initState, action: actionType):IInitState => {
    const initialState = { ...state }
    switch (action.type) {
        case actionTypes.SETPROFILE:
            let newState = {...initialState,profile : action.payload}
            return newState
        case actionTypes.STARTLOADING:
            let newState1 = {...initialState, isLoading : true}
            return newState1
        case actionTypes.COMPLITELOADING:
            let newState2 = {...initialState, isLoading : false}
            return newState2
        default:
            return initialState
    }
}