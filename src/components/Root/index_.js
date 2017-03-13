/**
 * Admin Native
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, DrawerLayoutAndroid} from 'react-native';
import {Provider} from 'react-redux'

import store from '../../store'

// ------------------------

// ------------------------
//  App Components
import App from '../../screens/App'

// ------------------------

// ------------------------
//  Firebase
// import firebase from 'firebase'

// ------------------------

export default class Root extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

        // var config = {
        //     apiKey: "AIzaSyAMDWKG7qyQ9msJaaKb7vmvK-rNu3X_7-Q",
        //     authDomain: "project-604055857022237684.firebaseapp.com",
        //     databaseURL: "https://project-604055857022237684.firebaseio.com",
        //     storageBucket: "project-604055857022237684.appspot.com",
        //     messagingSenderId: "61711221972"
        // };
        //
        // this.firebaseApp = firebase.initializeApp(config);

        // console.log(config);
    }

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}
