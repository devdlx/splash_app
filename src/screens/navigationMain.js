import {Platform} from 'react-native';
import {Router, Scene, StackNavigator, TabNavigator, CardStack} from 'react-navigation';
import Login from './loginScreen'
import Home from './homeScreen'
import Splash from './splashScreen'
import Settings from './settingsScreen'
import Profile from './profileScreen'

const mainTabs = TabNavigator({
    Home: {
        screen: Home,
        path: 'home'
    },

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
    headerMode: 'none',
    mode: Platform.OS === 'ios'
        ? 'modal'
        : 'card'
});

export default MainNavigator
