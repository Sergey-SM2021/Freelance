import { FreelancersType } from "../../models"
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
            ava:man,
            like: 91,
            dislike: 5,
            specialization: "FullStack developer midlle ++",
            steck: ["react", "redux", "typescript", "material-ui"],
            id: "sergiy3220",
            lastName: "Царёв",
            name: "Сергий",
            price: 2000,
            projects: [Project0, Project1, Project2],
            description: "Основная информация: Представляю команду профессионалов MetaLamp, в разработке уже более 7 лет. Команда насчитывает 60 человек, покрываем все часовые пояса России. Успешно завершили 100+ проектов в разных предметных областях: финансовые технологии, аналитические и образовательные платформы, логистические системы, маркетплейсы, блокчейн. На фронте имеем мощную экспертизу на стеке Typescript+React. На бэке специализируемся на Node.js и экзотическом Haskell. Осуществляем проекты под ключ,..."
        },
        {
            ava:man,
            like: 11,
            dislike: 3,
            price: 700,
            id: "mikha__aga777",
            specialization: "Front-end (Typescript+React)",
            lastName: "Агафонов",
            name: "Михаил",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos tenetur deserunt voluptates, ab consectetur, repellendus tempora a provident accusantium minima, harum incidunt assumenda est beatae sapiente! Dolorem, repellat explicabo?",
            projects: [Project3, Project4, Project5],
            steck: ["typescript", "react", "redux"]
        }
    ]
}

export const freelancers = (state = InitialState, action: any) => {
    return (state)
}