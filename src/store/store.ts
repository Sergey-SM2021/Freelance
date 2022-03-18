import { applyMiddleware, combineReducers, createStore } from 'redux'
import { freelancers } from './reducers/freelancers'
import thunk from 'redux-thunk'
import { profile } from './reducers/profile'

const rootReducer = combineReducers({
    freelancers,
    profile
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
export type RootType = ReturnType<typeof rootReducer>