import { applyMiddleware, combineReducers, createStore } from 'redux'
import { freelancers } from './reducers/freelancers/freelancers'
import thunk from 'redux-thunk'
import { profile } from './reducers/Profile/profile'
import { auth } from '../store/reducers/auth/auth'
import {ordersReducer} from './reducers/orders/ordersReducer'
import {orderOverviewReducer} from "./reducers/orderOverview/orderOverviewReducer"
import { myOrder } from './reducers/myOrderReducer/myOrderReducer'

const rootReducer = combineReducers({
    freelancers,
    profile,
    auth,
    orders: ordersReducer,
    orderOverview: orderOverviewReducer,
    myOrder 
})

export const store = createStore(rootReducer, applyMiddleware(thunk) )
export type RootType = ReturnType<typeof rootReducer>