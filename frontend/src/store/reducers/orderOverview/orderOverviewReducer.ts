import { actionType, constants, IOrderReducerInitialState } from "./orderOverviewReducerTypes"

const defaultState: IOrderReducerInitialState = {
    client: null,
    order: null,
    error: null,
    isLoading: false
}

export const orderOverviewReducer = (state = defaultState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.STARTORDEROVERVIEWLOADING:
            stateCopy.isLoading = true
            return stateCopy
        case constants.ENDORDEROVERVIEWLOADING:
            stateCopy.isLoading = false
            return stateCopy
        case constants.SETORDEROVERVIEW:
            stateCopy.order = action.payload.order
            stateCopy.client = action.payload.client
            return stateCopy
        default:
            return stateCopy
    }
}