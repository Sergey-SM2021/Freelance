import { FreelancerType } from "../../models"
import Project0 from '../../assets/Projects/Project0.jpeg'
import Project1 from '../../assets/Projects/Project1.jpeg'
import Project2 from '../../assets/Projects/Project2.jpg'
import Project3 from '../../assets/Projects/Project3.jpg'
import Project4 from '../../assets/Projects/Project4.jpg'
import Project5 from '../../assets/Projects/Project5.jpeg'

type InitialStateType = {
    personsData: Array<FreelancerType>
}

const InitialState: InitialStateType = {
    personsData: [
        {
            specialization: "FullStack developer midlle ++",
            steck: ["react", "redux", "typescript", "material-ui"],
            id: "sergiy3220",
            lastName: "Царёв",
            name: "Сергий",
            price: 2000, projects: [Project0, Project1, Project2]
        },
        {
            price: 700,
            id: "mikha__aga777",
            specialization: "Front-end (Typescript+React)",
            lastName: "Агафонов",
            name: "Михаил",

            projects: [Project3, Project4, Project5],
            steck: ["typescript", "react", "redux"]
        }
    ]
}

export const freelancers = (state = InitialState, action: any) => {
    return (state)
}