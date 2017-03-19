import firebaseAppRef from './firebase'
import * as player from './post'
import * as user from './user'
import * as home from './home'

module.exports = Object.assign({}, player, user, home);
