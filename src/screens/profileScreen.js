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
import ScreenContainer from './screenContainer'

class Profile extends Component {


  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor, focused }) => (
        <Icon
          name={focused?'person-outline':'person'}
          color={focused ? tintColor:'black'}
        />
      ),
    },
  }

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {}

    componentWillUnmount() {}

    shouldComponentUpdate(newProps, newState) {
        // console.log(newProps.user === this.props.user);
        if (newProps.user === this.props.user) {
            return false;

        }
        return true;

    }

    onEndReached = () => {
        // console.log(this.props);
    }

    loggoutButtonPress() {
        this.props.actions.loggout();

    }


    settingsButtonPress(){
      // console.log('settingsButtonPress ', this.props.navigation);
      this.props.navigation.navigate('Settings')
    }

    render() {

        const {user} = this.props.state
        // console.log(user);
        let {height, width} = Dimensions.get('window');

        return (
          <ScreenContainer >
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
                                uri: user && user.photoURL
                                    ? user.photoURL
                                    : 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png'
                            }}/>

                            <Text style={{
                                margin: 8,
                                color: 'black'
                            }}>{'user.email'}</Text>
                        </View>

                        <View style={styles.buttonsWrapper}>

                            <TouchableOpacity style={styles.cardButton} onPress={() => {
                                this.likeButtonPress(item)
                            }}>
                                <Icon name={'favorite'} color={'red'}></Icon>
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

                    </View>

                    <Text style={styles.cardDestriptionText}>{'user.description'}</Text>

                      <TouchableOpacity style={styles.cardButton} onPress={() => {
                          this.settingsButtonPress()
                      }}>

                          <Icon name={'settings'} color={styles.cardButtonText.color}></Icon>

                      </TouchableOpacity>

                </Card>

            </ScrollView>
            </ScreenContainer>
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

        // ...Platform.select({
        //     ios: {
        //         shadowOffset: {
        //             height: 0,
        //             width: 0
        //         },
        //         shadowOpacity: 0,
        //         shadowRadius: 0
        //     },
        //     android: {
        //         elevation: 0
        //     }
        // })

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
