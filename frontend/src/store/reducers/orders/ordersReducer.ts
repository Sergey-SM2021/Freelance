import { TOrdersAction, IOrdersReducer, constants } from "./ordersTypes"

const initialState: IOrdersReducer = {
    orders: [],
    error: null,
    isLoading: false
}

export const ordersReducer = (state = initialState, action: TOrdersAction) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case constants.STARTORDERSLOADING:
            stateCopy.isLoading = true
            return stateCopy
        case constants.ENDORDERSLOADING:
            stateCopy.isLoading = false
            return stateCopy
        case constants.SETORDERS:
            stateCopy.orders = action.payload
            return stateCopy
        default:
            return stateCopy
    }
}