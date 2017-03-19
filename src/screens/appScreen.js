/* @flow */

import React, {Component, PropTypes} from 'react'
import {Text, StyleSheet, StatusBar, Platform, View} from 'react-native';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actions from '../actions'
import store from '../store'

import Login from './loginScreen'
import Home from './homeScreen'
import Splash from './splashScreen'
import Settings from './settingsScreen'
import Profile from './profileScreen'

import {Router, Scene, StackNavigator, TabNavigator} from 'react-navigation';

const mainTabs = TabNavigator({
    Home: {
        screen: Home,
        path: 'home'
    },
    // Notifications: {
    //   screen: MyNotificationsScreen,
    //   path: 'notifications',
    // },
    Settings: {
        screen: Settings,
        path: 'settings'
    },
    Profile: {
        screen: Profile,
        path: 'profile'
    }
}, {
    // Change this to start on a different tab
    initialRouteName: 'Profile',
    // lazyLoad: 'true',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12
        },
        style: {
            backgroundColor: 'transparent'
        }
    }
});

const AppNavigator = StackNavigator({

    Login: {
        screen: Login
    },

    Main: {
        screen: mainTabs
    },

    Index: {
        screen: Splash
    }

}, {
    initialRouteName: 'Index',
    headerMode: 'none',
    mode: Platform.OS === 'ios'
        ? 'modal'
        : 'card'
});

class App extends Component {

    constructor(props) {
        super(props);
        this.props.actions.startListeningToAuth();
    }

    componentDidMount() {
        // console.log(this.props.actions.startListeningToAuth);
    }

    componentWillUnmount() {}

    render() {
        const {actions, state} = this.props
        // console.log(this.props.state.user);

        return (
            <AppNavigator></AppNavigator>
        )
    }
}

App.propTypes = {
    actions: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {state}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
