import { Dispatch } from "redux"

import { TFreelancer } from "../../../models"
import { actionType, actionTypes, ISetProfile } from "./profileActionsTypes"

import avaPath from '../../../assets/man.png'
import Project0 from '../../../assets/Projects/Project0.jpeg'
import Project1 from '../../../assets/Projects/Project3.jpg'
import Project2 from '../../../assets/Projects/Project4.jpg'

export const setPofile = (profile: TFreelancer): ISetProfile => ({
    type: actionTypes.SETPROFILE,
    payload: profile
})

export const startLoading = () => ({
    type: actionTypes.STARTLOADING
})

export const compliteLoading = () => ({
    type: actionTypes.COMPLITELOADING
})

const downloadedProfile: TFreelancer =
{
    about: {
        description: "Разрабатываем веб-сервисы и мобильные приложения. Ведем проекты с нуля, а также дорабатываем существующие. Мы самостоятельно создаем frontend, backend, верстку и дизайн интерфейсов для доверенных нам продуктов. В штате — свыше 40 специалистов: разработчики на React, Vue.js, Python (Django), Kotlin и Swift дизайнеры и менеджеры. Более 80 завершенных кастомных проектов. Мы сотрудничаем как с частными стартапами, так и с российскими и зарубежными корпорациями, а также с госcектором. Мы компания из сердца Сибири. Любим технически сложные восхождения, ценим крепкое и долгосрочное сотрудничество.",
        expiriens: "",
        paymentMethod: "наличка, только наличка",
        price: 800,
        stack: [
            {
                freelancer: 19277,
                id: 96455,
                name: "Node"
            }
        ],
    },
    header: {
        ava: avaPath,
        lastName: "Палто",
        name: "Роберт",
        specialization: "Backend developer junior",
    },
    portfolio: [
        Project0,
        Project1,
        Project2,
        Project0,
        Project0,
    ],
    workHistory: [
        {
            name: "Vue",
            price: 99000,
            freelancer: 19277,
            id: 78333434
        }
    ],
    reviews: [
        {
            ava: avaPath,
            description: `Sibdev хорошо выполнили свою задачу, придраться не к чему.Всё сделали как и договаривались,
        дали рекомендации как лучш и аргументировали свои предложения.
        За это отдельное уважение.В общем и целом, работой довольна.Обратимся снова - факт.Sibdev хорошо выполнили свою
        задачу, придраться не к чему.Всё сделали как и договаривались, дали рекомендации как  и аргументировали свои предложения.
        За это отдельное уважение.В общем и целом, работой довольна.Обратимся снова - факт.Sibdev хорошо выполнили свою задачу,
        придраться не к чему.Всё сделали как и договаривались, дали рекомендации как
        и аргументировали свои предложения.За это отдельное уважение.В общем и целом,
        работой довольна.Обратимся снова - факт.`,
            details: "Заказ: дизайн под ключ",
            name: "Олег",
            lastName: "Кошкин",
            stars: 3,
            id: 9,
            freelancer: 19277
        },
        {
            ava: avaPath,
            description: `Sibdev хорошо выполнили свою задачу, придраться не к чему.Всё сделали как и договаривались,
        дали рекомендации как лучш и аргументировали свои предложения.
        За это отдельное уважение.В общем и целом, работой довольна.Обратимся снова - факт.Sibdev хорошо выполнили свою
        задачу, придраться не к чему.Всё сделали как и договаривались, дали рекомендации как  и аргументировали свои предложения.
        За это отдельное уважение.В общем и целом, работой довольна.Обратимся снова - факт.Sibdev хорошо выполнили свою задачу,
        придраться не к чему.Всё сделали как и договаривались, дали рекомендации как
        и аргументировали свои предложения.За это отдельное уважение.В общем и целом,
        работой довольна.Обратимся снова - факт.`,
            details: "Заказ: дизайн под ключ",
            name: "Олег",
            lastName: "Кошкин",
            stars: 3,
            id: 911,
            freelancer: 19277
        }
    ],
    dislike: 8,
    id: 19277,
    likes: 99
}

export const getProfile = () => (
    (dispatch: Dispatch<actionType>) => {
        // axios.get("url")
        dispatch(setPofile(downloadedProfile))
    }
)