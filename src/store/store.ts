import { applyMiddleware, combineReducers, createStore } from 'redux'
import { specialists } from './reducers/specialists'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    specialists
})

export const store = createStore(rootReducer,applyMiddleware(thunk))