import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    // const store = applyMiddleware()(createStore)(rootReducer, initialState)
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    return store
}
