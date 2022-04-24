import { TAction, constants, TInitialState } from "./authTypes"
import man from '../../../assets/man.png'
import Project1 from '../../../assets/Projects/Project0.jpeg'
import Project2 from '../../../assets/Projects/Project1.jpeg'
import Project3 from '../../../assets/Projects/Project3.jpg'

const initialState: TInitialState = {
    error: null,
    isLoading: false,
    isAuth: false,
    person: {
        header: {
            name: "Андрей",
            lastName: "Билибин",
            ava: man,
            specialization: "Frontend"
        },
        about: {
            description: "Я очень ответственно отношусь к своей работе....",
            expiriens: "more then 5 yers",
            price: 7000,
            stack: [
                {
                    freelancer: 89,
                    id: 77,
                    name: "Php"
                },
                {
                    freelancer: 77,
                    id: 1,
                    name: "Html"
                },
            ],
            paymentMethod: "Только наличными",
        },
        portfolio: [Project1, Project2, Project3],
        workHistory: [
            {
                freelancer: 89,
                id: 999,
                name: "Разработать клиентскую часть на node js",
                price: 66000
            },
            {
                freelancer: 89,
                id: 99989,
                name: "Серве на express js",
                price: 67500
            }
        ],
        id: 89,
        reviews: [
            {
                ava: man,
                description: "Замечательный исполнитель! Рекомендую",
                details: "Сайт на wordPress",
                freelancer: 89,
                id: 8223,
                lastName: "Пчёлкина",
                name: "Таня",
                stars: 5
            }
        ],
        likes: 8,
        dislike: 1
    },
    type: "freelancer"
}

export const auth = (state = initialState, action: TAction) => {
    const stateCopy = { ...state }
    switch (action.type) {
        case constants.STARTLOADING:
            stateCopy.isLoading = true
            return stateCopy
        case constants.ENDLOADING:
            stateCopy.isLoading = false
            return stateCopy
        case constants.SETFREELANCER:
            stateCopy.type = "freelancer"
            stateCopy.isAuth = true
            stateCopy.person = action.payload
            return stateCopy
        case constants.SETERR:
            // don't SETERR / SETERROR
            stateCopy.error = action.payload
            return stateCopy
        case constants.SETCLIENTPROFILE:
            stateCopy.isAuth = true
            stateCopy.type = "client"
            console.log(action.payLoad.orders)
            stateCopy.person = action.payLoad
            debugger
            return stateCopy
        default:
            return stateCopy
    }
}