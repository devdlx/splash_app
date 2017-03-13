import firebase from 'firebase'
import * as types from '../constants/FirebaseActionTypes';

// var config = {
//     apiKey: "AIzaSyAMDWKG7qyQ9msJaaKb7vmvK-rNu3X_7-Q",
//     authDomain: "project-604055857022237684.firebaseapp.com",
//     databaseURL: "https://project-604055857022237684.firebaseio.com",
//     storageBucket: "project-604055857022237684.appspot.com",
//     messagingSenderId: "61711221972"
// };
//
//
// export const firebaseAppRef = firebase.initializeApp(config);

// console.log(firebaseAppRef);

const initialState = {};

export default function firebaseApp(state = initialState, action) {
    console.log(action);
    switch (action) {
        case types.LOGGEDIN:
            return Object.assign({}, state);

        default:
            return state;
    }
}
