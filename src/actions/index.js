import firebaseAppRef from './firebase'
import * as player from './post'
import * as user from './user'
import * as feed from './feed'

module.exports = Object.assign({}, player, user, feed);
