import { applyMiddleware, combineReducers, createStore } from 'redux'
import { freelancers } from './reducers/freelancers/freelancers'
import thunk from 'redux-thunk'
import { profile } from './reducers/Profile/profile'
import {auth} from '../store/reducers/auth/auth'

const rootReducer = combineReducers({
    freelancers,
    profile,
    auth
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
export type RootType = ReturnType<typeof rootReducer>