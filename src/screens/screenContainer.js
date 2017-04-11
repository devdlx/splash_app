/* @flow */
import moment from 'moment'

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    TouchableOpacity,
    Dimensions,
    StatusBar
} from 'react-native';

import {Button, Icon} from 'react-native-elements'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'

class ScreenContainer extends Component {

    static headerStyle = {
        backgroundColor: 'white'

    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // this.props.actions.fetchScreenContainerItems();
    }

    componentWillUnmount() {}

    // shouldComponentUpdate(one, two) {
    //   console.log(one, two, this.props.state);
    //     return true
    // }

    componentWillReceiveProps(np) {
        console.log(np, this.props);
        // if (np.style) {
        //     // this.setState({style: Object.assign({}, defaultStyle, np.style)})
        // }
    }

    render() {
        return (
            <View style={defaultStyle.container}>
                <StatusBar backgroundColor="white" animated={true} barStyle="dark-content" translucent={true}/>
                <View>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

ScreenContainer.defaultProps = {
    style: defaultStyle
};

const defaultStyle = {

    container: {
        flex: 1,
        flexGrow: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                // backgroundColor: 'orange',
                paddingTop: 22
            },
            android: {
                elevation: 0
            }
        })
    },

    buttonsWrapper: {
        flex: 1,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // backgroundColor: 'green'
    },

    buttons: {
        borderRadius: 0,
        margin: 0,
        marginRight: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'

    },

    buttonsText: {
        color: 'black',
        // fontSize: 24
    }
};

ScreenContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ScreenContainer)
