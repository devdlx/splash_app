/* @flow */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TouchableHighlight as Button, Image} from 'react-native';
import logo from '../assets/Logo.png';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {NavigationActions} from 'react-navigation'
class Splash extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const {navigate} = this.props.navigation;
        // console.log(navigate('Login'));

    }

    componentWillUnmount() {}

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextState, nextProps);

        const {state, navigation} = nextProps;

        console.log(state);

        switch (state.user.loginState) {

            case 'LOGGEDOUT':
                // console.log(navigation.navigate('Login'));
                // navigation.navigate('Login', {}, 'Navigation/RESET');
                // setTimeout( ()=> {
                  this.props.navigation.dispatch(NavigationActions.reset({
                      index: 0,
                      actions: [NavigationActions.navigate({routeName: 'Login'})]
                  }),);
                // }, 1000);

                break;

            case 'LOGGEDIN':
            // setTimeout( ()=> {
              this.props.navigation.dispatch(NavigationActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({routeName: 'Main'})]
              }),);
            // }, 1000);
                break;

            default:

        }

        return true;
    }

    render() {

        return (
            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={logo}/>
                    <Text style={styles.title}>SPLASH WATER DRIP!</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -8
    },

    logo: {
        width: 150,
        height: 150,
        marginVertical: 16
    },

    title: {
        textAlign: 'center',
        color: 'black',
        opacity: 0.6,
        marginTop: 12,
        fontSize: 24
    }

});

Splash.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
