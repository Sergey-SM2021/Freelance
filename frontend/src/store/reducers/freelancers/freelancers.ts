import man from '../../../assets/man.png'
import { actionType, constants, TInitialState } from "./freelancersActionsTypes"
import Project1 from '../../../assets/Projects/Project5.jpeg'
import Project2 from '../../../assets/Projects/Project3.jpg'
import Project3 from '../../../assets/Projects/Project4.jpg'

const InitialState: TInitialState = {
    error: null,
    freelancers:[],
    loading: false,
    count:1
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
            stateCopy.count = action.payload.length
            return stateCopy
        case constants.SETERROR:
            stateCopy.error = action.payload
            return stateCopy
        default:
            return stateCopy
    }
}