import Immutable from 'seamless-immutable'
import {
    NavigationActions,
    addNavigationHelpers
} from 'react-navigation'

import * as UserActionTypes from '../constants/UserActionTypes';

export function startListeningToAuth() {
    // console.log('*** startListeningToAuth');
    // console.log('navigation =>', navigation);
    return function(dispatch, getState) {
        firebaseAppRef.auth().onAuthStateChanged(function(user) {
            if (user) {
                // console.log('User is signed in.');
                // console.log(user);
                listenToUserUpdatesOn(dispatch, user);

            } else {
                // console.log('No user is signed in bro.');
                listenToUserUpdatesOff(dispatch, '')
            }
        });
    }
}


export function authWithEmail(email, password) {
    // console.log(email);
    return function(dispatch, getState) {
        firebaseAppRef.auth().signInWithEmailAndPassword(email, password)
            // .then((user) => {
            //     // console.log(' {user} => ', user);
            //
            //     // dispatch({
            //     //     type: UserActionTypes.LOGGEDIN,
            //     // newUserState: user,
            //     // });
            //
            // })
            .catch((err) => {

                dispatch({
                    type: UserActionTypes.AUTHERROR,
                    message: err.message
                });

                console.log(err);
            });
    }
}


export function loggout() {
    console.log('loggout by user');

    return function(dispatch, getState) {
        // listenToUserUpdatesOff(dispatch, getState().user.uid)
        firebaseAppRef.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });
    }

}

function refUserLocation(uid) {
    return `user/${uid}`
}

let userRef;


let _listenToUserUpdatesOn = false;

function listenToUserUpdatesOn(dispatch, user) {

    const uid = user.uid;

    // console.log('_listenToUserUpdatesOn => ', _listenToUserUpdatesOn);

    if (_listenToUserUpdatesOn) {
        return;
    }
    _listenToUserUpdatesOn = true;

    userRef = firebaseAppRef.database().ref(refUserLocation(uid));

    // Get User profile by 'uid' and listen for updates
    userRef.on('value', (userProfile) => {

        // console.log('userProfile.val() => ', userProfile.val());
        // console.log('dispatch: ', {
        //     type: UserActionTypes.UPDATE_USER_PROFILE,
        //     ...userProfile.val()
        // });

        dispatch({
            type: UserActionTypes.UPDATE_USER_PROFILE,
            profile: userProfile.val(),
        });
    });

    // update user state
    dispatch({
        type: UserActionTypes.LOGGEDIN,
        uid: user.uid,
    });


    // Show main page
    // navigation.dispatch(NavigationActions.reset({
    //     index: 0,
    //     actions: [NavigationActions.navigate({
    //         routeName: 'Main'
    //     })]
    // }), );

}


function listenToUserUpdatesOff(dispatch, uid = '') {
    // console.log('listenToUserUpdatesOff()');
    // if (!_listenToUserUpdatesOn) {
    //     return;
    // }
    _listenToUserUpdatesOn = false;

    // Stop listening to user state changes
    if (userRef) {
        userRef.off();
    }

    // reset use state
    dispatch({
        type: UserActionTypes.LOGGEDOUT
    });

    // // go back to login page
    // navigation.dispatch(NavigationActions.reset({
    //     index: 0,
    //     actions: [NavigationActions.navigate({
    //         routeName: 'Login'
    //     })]
    // }), );

}
