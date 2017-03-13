import * as types from '../constants/FirebaseActionTypes';
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAMDWKG7qyQ9msJaaKb7vmvK-rNu3X_7-Q",
    authDomain: "project-604055857022237684.firebaseapp.com",
    databaseURL: "https://project-604055857022237684.firebaseio.com",
    storageBucket: "project-604055857022237684.appspot.com",
    messagingSenderId: "61711221972"
};
// firebase.database.enableLogging(true);
export default firebaseAppRef = firebase.initializeApp(config);


// import Firestack from 'react-native-firestack'
//
// var config = {
//     apiKey: "AIzaSyAMDWKG7qyQ9msJaaKb7vmvK-rNu3X_7-Q",
//     authDomain: "project-604055857022237684.firebaseapp.com",
//     databaseURL: "https://project-604055857022237684.firebaseio.com",
//     storageBucket: "project-604055857022237684.appspot.com",
//     GCMSenderID: "61711221972",
//     debug: '*',
// };
//
//
// const firestack = new Firestack(config);
