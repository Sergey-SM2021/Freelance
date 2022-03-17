import { applyMiddleware, combineReducers, createStore } from 'redux'
import { freelancers } from './reducers/freelancers'
import thunk from 'redux-thunk'
import { freelncer } from './reducers/freelancer'

const rootReducer = combineReducers({
    freelancers,
    freelncer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
export type RootType = ReturnType<typeof rootReducer>