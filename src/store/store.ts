import { applyMiddleware, combineReducers, createStore } from 'redux'
import { freelancers } from './reducers/freelancers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    freelancers
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
export type RootType = ReturnType<typeof rootReducer>