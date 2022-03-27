import { TAction, constats } from "./authTypes"

const initialState = {
    isAuth: false
}

export const auth = (state = initialState, action: TAction) => {
    const stateCopy = { ...state }
    switch (action.type) {
        case constats.SETFREELANCER:
            stateCopy.isAuth = true
            return stateCopy

        default:
            return stateCopy
    }
}