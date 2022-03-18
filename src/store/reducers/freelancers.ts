import { FreelancersType, paymentMethod } from "../../models"
import Project0 from '../../assets/Projects/Project0.jpeg'
import Project1 from '../../assets/Projects/Project1.jpeg'
import Project2 from '../../assets/Projects/Project2.jpg'
import Project3 from '../../assets/Projects/Project3.jpg'
import Project4 from '../../assets/Projects/Project4.jpg'
import Project5 from '../../assets/Projects/Project5.jpeg'
import man from '../../assets/man.png'

const InitialState: { personsData: FreelancersType } = {
    personsData: [
        {
            about: {
                steck: ["react", "redux", "typescript", "material-ui"],
                expiriens: "",
                paymentMethod: paymentMethod.moneyInCash,
                price: 2000,
                description: "Основная информация: Представляю команду профессионалов MetaLamp, в разработке уже более 7 лет. Команда насчитывает 60 человек, покрываем все часовые пояса России. Успешно завершили 100+ проектов в разных предметных областях: финансовые технологии, аналитические и образовательные платформы, логистические системы, маркетплейсы, блокчейн. На фронте имеем мощную экспертизу на стеке Typescript+React. На бэке специализируемся на Node.js и экзотическом Haskell. Осуществляем проекты под ключ,..."
            },
            header: {
                specialization: "FullStack developer midlle ++",
                ava: man,
                lastName: "Царёв",
                name: "Сергий",
            },
            portfolio: {
                projects: [Project0, Project1, Project2],
            },
            like: 91,
            dislike: 5,
            id: "sergiy3220",
        },
        {
            about: {
                steck: ["typescript", "react", "redux"],
                expiriens: "",
                paymentMethod: paymentMethod.moneyInCash,
                price: 700,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos tenetur deserunt voluptates, ab consectetur, repellendus tempora a provident accusantium minima, harum incidunt assumenda est beatae sapiente! Dolorem, repellat explicabo?",
            },
            header: {
                specialization: "Front-end (Typescript+React)",
                ava: man,
                lastName: "Агафонов",
                name: "Михаил",
            },
            portfolio: {
                projects: [Project3, Project4, Project5],
            },
            like: 11,
            dislike: 3,
            id: "mikha__aga777",
        }
    ]
}

export const freelancers = (state = InitialState, action: any) => {
    return (state)
}