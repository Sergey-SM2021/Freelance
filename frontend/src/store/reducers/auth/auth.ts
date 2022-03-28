import { TAction, constats, TInitialState } from "./authTypes"

const initialState: TInitialState = {
    isAuth: false,
    person:null
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