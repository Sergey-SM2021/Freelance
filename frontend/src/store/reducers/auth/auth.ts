import { TAction, constats, TInitialState } from "./authTypes"
import man from '../../../assets/man.png'
import Project1 from '../../../assets/Projects/Project0.jpeg'
import Project2 from '../../../assets/Projects/Project1.jpeg'
import Project3 from '../../../assets/Projects/Project3.jpg'

const initialState: TInitialState = {
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
                }
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
    }
}

export const auth = (state = initialState, action: TAction) => {
    const stateCopy = { ...state }
    switch (action.type) {
        case constats.SETFREELANCER:
            stateCopy.isAuth = true
            stateCopy.person = action.payload
            return stateCopy
        default:
            return stateCopy
    }
}