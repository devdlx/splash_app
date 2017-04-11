/* @flow */

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Platform,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import {Card, List, ListItem, Button, Icon} from 'react-native-elements'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {NavigationActions} from 'react-navigation'

class Camera extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {}

    componentWillUnmount() {}

    render() {

        const {user} = this.props.state
        // console.log(user);
        let {height, width} = Dimensions.get('window');

        return (
            <View>



            </View>
        );
    }
}

const styles = {

    container: {
        flex: 1,
        flexGrow: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'orange'
    },

    cardContainer: {
        // marginVertical: 8,
        // borderColor: 'red',
        borderWidth: 0,
        margin: 0,
        padding: 0,

        ...Platform.select({
            ios: {
                shadowOffset: {
                    height: 0,
                    width: 0
                },
                shadowOpacity: 0,
                shadowRadius: 0
            },
            android: {
                elevation: 0
            }
        })

    },

    cardImageStyle: {
        height: 350
    },

    cardWrapperStyle: {
        padding: 0
    },

    cardContentWrapper: {
        flexDirection: 'row',
        padding: 8
    },

    buttonsWrapper: {
        flex: 1,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // backgroundColor: 'green'
    },

    cardButton: {
        borderRadius: 0,
        margin: 0,
        marginRight: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'

    },

    cardButtonText: {
        color: 'black',
        // fontSize: 24
    },

    likeButton: {},

    likeButtonLiked: {},

    likeButtonTextLiked: {
        color: 'red'
    },

    shareButton: {},

    cardLikesText: {
        paddingLeft: 12,
        paddingBottom: 8,
        fontSize: 12,
        fontWeight: 'bold'
    },

    cardDestriptionText: {
        paddingHorizontal: 12,
        paddingBottom: 12
    },

    cardTimeAgoText: {
        paddingLeft: 12,
        paddingBottom: 8,
        fontSize: 8,
        color: 'grey'
    }
};

Camera.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Camera)
