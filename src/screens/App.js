/* @flow */

import React, {Component, PropTypes} from 'react'
import {Text, StyleSheet, StatusBar} from 'react-native';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actions from '../actions'
import store from '../store'

import Login from './Login'
import Home from './Home'

import {
    View,
    Card,
    Image,
    Subtitle,
    Caption,
    Icon,
    Button,
    ScrollView,
    NavigationBar,
    Title
} from '@shoutem/ui';

// import Header from '../components/Header'
// import MainSection from '../components/MainSection'
import {Router, Scene} from 'react-native-router-flux';

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
            <View style={{
                flex: 1
            }}>
                <StatusBar barStyle='light-content'/>
                <Router {...this.props}>
                    <Scene key="root" hideNavBar hideTabBar>
                        <Scene key="login" component={Login} initial/>
                        <Scene key="home" component={Home}/>
                    </Scene>
                </Router>
            </View>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(App)

// <Scene key="splash" component={Splash} initial/>
