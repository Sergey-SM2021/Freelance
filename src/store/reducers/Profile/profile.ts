import { FreelancerFullType, paymentMethod } from "../../../models"
import Project0 from '../../../assets/Projects/Project3.jpg'
import Project1 from '../../../assets/Projects/Project4.jpg'
import Project2 from '../../../assets/Projects/Project5.jpeg'
import avaPath from '../../../assets/man.png'
import { actionType, actionTypes } from "./profileActionsTypes"

const initState: FreelancerFullType = {
    about: {
        description: "test",
        expiriens: "test",
        paymentMethod: paymentMethod.moneyInCash,
        price: 0,
        steck: ["test", "test", "test", "test"],
    },
    header: {
        ava: avaPath,
        lastName: "test",
        name: "test",
        specialization: "test",
    },
    portfolio: {
        projects: [Project0, Project1, Project2, Project0, Project0, Project1, Project0, Project1,],
    },
    workHistory: [
        {
            name: "test",
            price: 0,
            skills: ["test", "test", "test"]
        },
        {
            name: "test",
            price: 0,
            skills: ["test", "test", "test"]
        }
    ],
    reviews: [
        {
            ava: avaPath,
            description: "test",
            details: "test",
            name: "test",
            lastName: "test",
            stars: 0
        },
    ],
    dislike: 0,
    id: "test",
    like: 0,
}

export const profile = (state = initState, action: actionType) => {
    switch (action.type) {
        case actionTypes.SETPROFILE:
            return (action.payload)
        default:
            return { ...state }
    }
}