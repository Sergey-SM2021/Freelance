import { FreelancersType, paymentMethod } from "../../../models"
import Project0 from '../../../assets/Projects/Project0.jpeg'
import Project1 from '../../../assets/Projects/Project1.jpeg'
import Project2 from '../../../assets/Projects/Project2.jpg'
import Project3 from '../../../assets/Projects/Project3.jpg'
import Project4 from '../../../assets/Projects/Project4.jpg'
import Project5 from '../../../assets/Projects/Project5.jpeg'
import man from '../../../assets/man.png'
import { actionType, constants } from "./freelancersActionsTypes"

const InitialState: { personsData: FreelancersType } = {
    personsData: [
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
                projects: [Project3, Project4, Project1],
            },
            like: 11,
            dislike: 3,
            id: "mikha__aga777",
        }
    ]
}

export const freelancers = (state = InitialState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.SETFREELANCERS:
            stateCopy.personsData = action.payload
            return stateCopy
        default:
            return stateCopy
    }
}