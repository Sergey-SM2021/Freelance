import { FreelancerFullType, paymentMethod } from "../../models"
import Project0 from '../../assets/Projects/Project3.jpg'
import Project1 from '../../assets/Projects/Project4.jpg'
import Project2 from '../../assets/Projects/Project5.jpeg'
import avaPath from '../../assets/man.png'

const initState: FreelancerFullType = {
    description:"Разрабатываем веб-сервисы и мобильные приложения. Ведем проекты с нуля, а также дорабатываем существующие. Мы самостоятельно создаем frontend, backend, верстку и дизайн интерфейсов для доверенных нам продуктов. В штате — свыше 40 специалистов: разработчики на React, Vue.js, Python (Django), Kotlin и Swift дизайнеры и менеджеры. Более 80 завершенных кастомных проектов. Мы сотрудничаем как с частными стартапами, так и с российскими и зарубежными корпорациями, а также с госcектором. Мы компания из сердца Сибири. Любим технически сложные восхождения, ценим крепкое и долгосрочное сотрудничество.",
    dislike: 8,
    id: "perfectPerson676",
    lastName: "Палто",
    like: 99,
    name: "Роберт",
    price: 999,
    projects: [Project0, Project1, Project2],
    specialization: "Backend developer junior",
    steck: ["php", "html", "css", "laravel"],
    ava:avaPath,
    expiriens:"",
    paymentMethod:paymentMethod.moneyInCash,
    reviews:["[хорош]"]
}

export const freelncer = (state = initState, action: any) => {
    return { ...state }
}