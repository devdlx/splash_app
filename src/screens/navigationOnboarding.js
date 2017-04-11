import {StackNavigator} from 'react-navigation'

// import Register from './screenRegister'
import Login from './loginScreen'
// import PwdForget from './screenPwdforget'
// import Tour from './screenTour'

const OnboardingNavigator = StackNavigator({
    Login: {
        screen: Login
    },
    // Register: {
    //     screen: Register
    // },
    // PwdForgot: {
    //     screen: PwdForgot
    // },
    // Tour: {
    //     screen: Tour
    // }
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
})

export default OnboardingNavigator
