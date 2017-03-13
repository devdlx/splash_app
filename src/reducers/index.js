import {
    combineReducers
} from 'redux'

import player from './player'
import user from './user'
import home from './home'
// import firebaseApp from './firebase'



const rootReducer = combineReducers({
    player,
    user,
    home
    // firebaseApp
})

export default rootReducer
