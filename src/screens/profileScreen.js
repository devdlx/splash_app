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

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {}

    componentWillUnmount() {}

    // shouldComponentUpdate(newState, oldState) {
    //   console.log(newState, oldState);
    //     return true
    // }

    onEndReached = () => {
        // console.log(this.props);
    }

    loggoutButtonPress() {
        this.props.actions.loggout();
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Login'})]
        }),);
    }

    render() {

        const {user} = this.props.state.user
        // console.log(user);
        let {height, width} = Dimensions.get('window');

        return (
            <ScrollView>

                <Card containerStyle={styles.cardContainer} wrapperStyle={styles.cardWrapperStyle}>

                    <View style={styles.cardContentWrapper}>

                        <View style={{
                            marginRight: 24,
                            marginLeft: 8
                        }}>
                            <Image style={{
                                height: 100,
                                width: 100,
                                borderRadius: 50
                            }} source={{
                                uri: user.photoURL
                                    ? user.photoURL
                                    : 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png'
                            }}/>

                            <Text style={{
                                margin: 8,
                                color: 'black'
                            }}>{user.email}</Text>
                        </View>

                        <View style={styles.buttonsWrapper}>

                            <TouchableOpacity style={styles.cardButton} onPress={() => {
                                this.likeButtonPress(item)
                            }}>
                                <Icon name={'favorite'} color={user.liked
                                    ? styles.likeButtonTextLiked.color
                                    : styles.cardButtonText.color}></Icon>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cardButton} onPress={() => {
                                this.shareProfileButtonPress(user)
                            }}>
                                <View>
                                    <Icon name={'share'} color={styles.cardButtonText.color}></Icon>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cardButton} onPress={() => {
                                this.loggoutButtonPress()
                            }}>

                                <Icon name={'remove-circle-outline'} color={styles.cardButtonText.color}></Icon>

                            </TouchableOpacity>

                        </View>

                        <Text style={styles.cardDestriptionText}>
                            {user.description}
                        </Text>

                    </View>

                </Card>

            </ScrollView>
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

Profile.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
