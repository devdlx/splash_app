/* @flow */

import React, {Component, PropTypes} from 'react'
import {Text, StyleSheet, StatusBar, Platform, View} from 'react-native';

import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux'

import * as actions from '../actions'
import store from '../store'

import Login from './loginScreen'
import Home from './homeScreen'
import Splash from './splashScreen'
import Settings from './settingsScreen'
import Profile from './profileScreen'

import {Router, Scene, StackNavigator, TabNavigator, CardStack} from 'react-navigation';

const mainTabs = TabNavigator({
    Home: {
        screen: Home,
        path: 'home'
    },
    // Notifications: {
    //   screen: MyNotificationsScreen,
    //   path: 'notifications',
    // },

    Profile: {
        screen: Profile,
        path: 'profile'
    }
}, {
    // Change this to start on a different tab
    initialRouteName: 'Home',
    // lazyLoad: 'true',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeTintColor: 'red',
        labelStyle: {
            // fontSize: 18,
            fontWeight: 'bold',
            color: 'black'
        },
        style: {
            backgroundColor: 'white'
        },
        indicatorStyle: {
            backgroundColor: 'red'
        }
    }
});

const MainNavigator = StackNavigator({
    Tabs: {
        screen: mainTabs
    },

    Settings: {
        screen: Settings,
        path: 'settings'
    }
}, {
    initialRouteName: 'Tabs',
    // headerMode: 'none',
    mode: Platform.OS === 'ios'
        ? 'modal'
        : 'card'
});

const AppNavigator = StackNavigator({

    Login: {
        screen: Login
    },

    Main: {
        screen: MainNavigator
    },

    Index: {
        screen: Splash
    }

}, {
    initialRouteName: 'Index',
    headerMode: 'none',
    mode: Platform.OS === 'ios'
        ? 'card'
        : 'modal'
});

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log(this.props.actions.startListeningToAuth);
    }

    componentWillUnmount() {}

    render() {
        // const {actions, state} = this.props
        // console.log(this.props.state.user);

        return (
            <Provider store={store}>
                <AppNavigator></AppNavigator>
            </Provider>
        )
    }
}

// App.propTypes = {
//     actions: PropTypes.object.isRequired,
//     state: PropTypes.object.isRequired
// }
//
// function mapStateToProps(state) {
//     return {state}
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     }
// }
//
// connect(mapStateToProps, mapDispatchToProps)(App)
