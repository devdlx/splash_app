/* @flow */

import React, {Component, PropTypes} from 'react'

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    //KeyboardAvoidingView
} from 'react-native';

import Video from 'react-native-video';

// import logo from '../logo.svg';

import logo from '../assets/Logo.png';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Actions, ActionConst} from 'react-native-router-flux';

import * as actions from '../actions'
// import store from '../store'

import * as UserActionTypes from '../constants/UserActionTypes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: 'rgb(52, 70, 88)'
    },

    item: {},

    logoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        marginHorizontal: 12
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        textAlign: 'center',
        color: 'white',
        opacity: 0.9,
        marginTop: 12
    },

    formContainer: {
        // alignItems: 'center',
        flex: 1,
        flexGrow: 1,
        // justifyContent: 'center',
        marginTop: 12,
        padding: 12,
        marginHorizontal: 12
    },

    formInput: {
        marginBottom: 16,
        flex: 1,
        height: 80,
        color: 'rgba(255,255,255,0.8)',
        paddingHorizontal: 10
    },

    buttonLoginContainer: {
        marginVertical: 8
    },

    buttonLoginText: {
        textAlign: 'center',
        color: 'rgb(52, 70, 88)',
        fontWeight: '600',
        paddingVertical: 12,
        backgroundColor: 'rgba(255,255,255,0.8)'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});

class Login extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Actions.home({type: ActionConst.REPLACE});
    }

    componentWillUnmount() {}

    actionLogin() {
        console.log('loggen ');
        Actions.home({type: ActionConst.REPLACE});
    }

    focusNextField = (nextField) => {
        this.refs[nextField].focus();
    }

    render() {

        const {actions, state} = this.props

        console.log(state.user);
        // switch (state.user.loginState) {
        //     case UserActionTypes.LOGGEDOUT:
        //         // console.log('logged out!');
        //         break;
        //
        //     case UserActionTypes.LOGGEDIN:
        //         console.log('logged in!');
        //         break;
        //     default:
        //
        // }

        return (

            <View style={styles.container}>

                <Video source={require('../assets/background.mp4')} ref={(ref) => {
                    this.player = ref
                }} rate={1.0} volume={1.0} muted={false} paused={false} resizeMode="cover" repeat={true} playInBackground={false} playWhenInactive={false} progressUpdateInterval={250.0} onLoadStart={this.loadStart} style={styles.backgroundVideo}/>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={logo}/>
                    <Text style={styles.title}>Hey Login Bro!</Text>
                </View>

                <View style={styles.formContainer}>

                    <TextInput ref="1" style={styles.formInput} placeholder="Username" placeholderTextColor="rgba(255,255,255,0.2)" returnKeyType="next" onSubmitEditing={() => this.focusNextField('2')} keyboardType="email-address" autoCorrect={false}></TextInput>

                    <TextInput ref="2" placeholder="Password" placeholderTextColor="rgba(255,255,255,0.2)" style={styles.formInput} returnKeyType="send" onSubmitEditing={() => this.actionLogin()} secureTextEntry></TextInput>

                    <TouchableOpacity style={styles.buttonLoginContainer} onPress={this.actionLogin}>
                        <Text style={styles.buttonLoginText}>Login</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

Login.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
