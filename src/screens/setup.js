import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Navigator from './navigator'


import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const store = createStore(rootReducer, undefined, applyMiddleware(thunk))

class setup extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         store
    //     }
    //
    //     console.log(store);
    // }

    render() {
        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>
        )
    }

}

export default setup
