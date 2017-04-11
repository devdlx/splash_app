import {
    combineReducers
} from 'redux'

import player from './player'
import user from './user'
import feed from './feed'
// import firebaseApp from './firebase'



const rootReducer = combineReducers({
    player,
    user,
    feed
    // firebaseApp
})

export default rootReducer
