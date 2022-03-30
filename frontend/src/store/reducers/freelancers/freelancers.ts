import man from '../../../assets/man.png'
import { actionType, constants, TInitialState } from "./freelancersActionsTypes"
import Project1 from '../../../assets/Projects/Project5.jpeg'
import Project2 from '../../../assets/Projects/Project3.jpg'
import Project3 from '../../../assets/Projects/Project4.jpg'

const InitialState: TInitialState = {
    error: null,
    freelancers:
        [
            {
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
        ],
    loading: false
}

export const freelancers = (state = InitialState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.STARTLOADING:
            stateCopy.loading = true
            return stateCopy
        case constants.ENDLOADING:
            stateCopy.loading = false
            return stateCopy
        case constants.SETFREELANCERS:
            stateCopy.freelancers = action.payload
            return stateCopy
        case constants.SETERROR:
            stateCopy.error = action.payload
            return stateCopy
        default:
            return stateCopy
    }
}