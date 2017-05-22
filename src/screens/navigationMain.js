import React from 'react';
import {Platform} from 'react-native';
import {Router, Scene, StackNavigator, TabNavigator, CardStack} from 'react-navigation';
import Login from './loginScreen'
import Feed from './feedScreen'
import Splash from './splashScreen'
import Settings from './settingsScreen'
import Profile from './profileScreen'
import Camera from './cameraScreen'
import {Icon} from 'react-native-elements'

const mainTabs = TabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            tabBar: {
                icon: ({tintColor, focused}) => (<Icon name={'view-day'} color={focused
                    ? tintColor
                    : 'black'}/>)
            },
            header: {
                visible: false
            }
        }
    },

    Profile: {
        screen: Profile,
        path: 'profile',
        navigationOptions: {
            header: {
                visible: false
            }
        }
    }
}, {
    // Change this to start on a different tab
    initialRouteName: 'Profile',
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
    MainTabs: {
        screen: mainTabs
    },
    Settings: {
        screen: Settings,
        path: 'settings'
    }
}, {
    initialRouteName: 'MainTabs',
    // headerMode: 'none',
    mode: Platform.OS === 'ios'
        ? 'modal'
        : 'card'
});

export default MainNavigator
