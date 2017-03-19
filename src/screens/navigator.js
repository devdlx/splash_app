import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import OnboardingNavigator from './navigationOnboarding'
import MainNavigator from './navigationMain'
import Splash from './splashScreen'
import * as actions from '../actions'

class Navigator extends Component {
    constructor(props) {
        super(props)
        // console.log(props);
        if (props.user.loginState === 'LOGGEDIN_CHECKING') {
            this.props.actions.startListeningToAuth();
        }
    }

    render() {

        switch (this.props.user.loginState) {
            case 'LOGGEDIN':
                return (<MainNavigator/>);
                break;

            case 'LOGGEDOUT':
                return (<OnboardingNavigator/>);
                break;
            default:
                return (
                    <Splash></Splash>
                );
        }

    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const mapStateToProps = state => (state)

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
