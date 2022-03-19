import { FreelancerFullType, paymentMethod } from "../../models"
import Project0 from '../../assets/Projects/Project3.jpg'
import Project1 from '../../assets/Projects/Project4.jpg'
import Project2 from '../../assets/Projects/Project5.jpeg'
import avaPath from '../../assets/man.png'

const initState: FreelancerFullType = {
    about: {
        description: "Разрабатываем веб-сервисы и мобильные приложения. Ведем проекты с нуля, а также дорабатываем существующие. Мы самостоятельно создаем frontend, backend, верстку и дизайн интерфейсов для доверенных нам продуктов. В штате — свыше 40 специалистов: разработчики на React, Vue.js, Python (Django), Kotlin и Swift дизайнеры и менеджеры. Более 80 завершенных кастомных проектов. Мы сотрудничаем как с частными стартапами, так и с российскими и зарубежными корпорациями, а также с госcектором. Мы компания из сердца Сибири. Любим технически сложные восхождения, ценим крепкое и долгосрочное сотрудничество.",
        expiriens: "",
        paymentMethod: paymentMethod.moneyInCash,
        price: 800,
        steck: ["php", "html", "css", "laravel"],
    },
    header: {
        ava: avaPath,
        lastName: "Палто",
        name: "Роберт",
        specialization: "Backend developer junior",
    },
    portfolio: {
        projects: [Project0, Project1, Project2, Project0, Project0, Project1, Project0, Project1,],
    },
    workHistory: [
        {
            name: "Vue",
            price: 99000,
            skills: ["vue", "node", "mongoDB"]
        },
        {
            name: "Работа на Арабов",
            price: 110000,
            skills: ["angular", "rest", "mongoDB"]
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
            stars: 3
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
            stars: 3
        }
    ],
    dislike: 8,
    id: "perfectPerson676",
    like: 99,
}

export const profile = (state = initState, action: any) => {
    return { ...state }
}