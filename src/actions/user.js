import * as UserActionTypes from '../constants/UserActionTypes';

export function startListeningToAuth() {
    return function(dispatch, getState) {
        firebaseAppRef.auth().onAuthStateChanged(function(user) {
            if (user) {
                // console.log('User is signed in.');
                dispatch({
                    type: UserActionTypes.LOGGEDIN,
                    uid: user.uid,
                    user: user
                });
            } else {
                // console.log('No user is signed in bro.');
                dispatch({
                    type: UserActionTypes.LOGGEDOUT
                });
            }
        });
    }
}


export function authWithEmail(email, password) {
    console.log(email);
    return function(dispatch, getState) {
        firebaseAppRef.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(' {user} => ', user);
            })
            .catch((err) => {

                dispatch({
                    type: UserActionTypes.AUTHERROR,
                    message: err.message
                });

                console.log(err);
            });
    }
}


export function auth(user) {
    // console.log(user);
    return {
        user
    };
}
