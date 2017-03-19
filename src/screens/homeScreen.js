/* @flow */
import moment from 'moment'

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Platform,
    ListView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import {Card, List, ListItem, Button, Icon} from 'react-native-elements'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Home extends Component {

  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor, focused }) => (
        <Icon
          name={'home'}
          color={focused ? tintColor:'black'}
        />
      ),
    },
  }


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.actions.fetchHomeItems();
    }

    componentWillUnmount() {}

    // shouldComponentUpdate(one, two) {
    //   console.log(one, two, this.props.state);
    //     return true
    // }

    onEndReached() {
        this.props.actions.fetchHomeItems();
    }

    likeButtonPress(item, index) {
        this.props.actions.likePost(item, 'home', index);
    }

    shareButtonPress(evt) {}

    renderLikesText(likes) {
      if (!likes) {
          return;
      }
        return (
            <Text style={styles.cardLikesText}>{likes}{' Likes'}</Text>
        )
    }

    renderTimeAgoText(date) {
        if (!date) {
            return;
        }
        return (
            // <Text style={styles.cardTimeAgoText}>{moment(date).fromNow()}</Text>
            <Text style={styles.cardTimeAgoText}>{date}</Text>
        )
    }

    renderCard(item, sectionID, rowID) {
        // console.log(item.likes && item.likes.byUser && item.likes.byUser[this.props.state.user.uid]);
        let liked = false;
        if (item.likes && item.likes.byUser && item.likes.byUser[this.props.state.user.uid]) {
            liked = item.likes.byUser[this.props.state.user.uid];
        }
        // console.log(liked);

        let {height, width} = Dimensions.get('window');

        return (

            <Card image={{
                uri: item.image || 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png'
            }} containerStyle={styles.cardContainer} wrapperStyle={styles.cardWrapperStyle} imageStyle={{
                height: width
            }} key={rowID}>
                <View style={styles.cardContentWrapper}>
                    <View style={styles.buttonsWrapper}>

                        <TouchableOpacity style={styles.cardButton} onPress={() => {
                            this.likeButtonPress(item, rowID)
                        }}>

                            <Icon name={'favorite'} color={liked
                                ? styles.likeButtonTextLiked.color
                                : styles.cardButtonText.color}></Icon>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cardButton} onPress={() => {
                            this.commentButtonPress(item, rowID)
                        }}>

                            <Icon name={'comment'} color={styles.cardButtonText.color}></Icon>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cardButton} onPress={() => {
                            this.shareButtonPress(item, rowID)
                        }}>
                            <View>
                                <Icon name={'share'} color={styles.cardButtonText.color}></Icon>
                            </View>
                        </TouchableOpacity>

                    </View>

                    {this.renderLikesText(item.likeCount)}

                    <Text style={styles.cardDestriptionText}>
                        {item.description}
                    </Text>

                    {this.renderTimeAgoText(item.date)}

                </View>

            </Card>

        )
    }

    render() {

        const {state} = this.props

        // console.log(state);
        // console.log('home.items:', state.home.length);
        // const listItems = items.map((item, index) => this.renderCard(item, index));

        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        let ds = dataSource.cloneWithRows(state.home.items)

        return (
            <View style={styles.container}>
                <ListView enableEmptySections dataSource={ds} renderRow={this.renderCard.bind(this)} renderSectionHeader={this.renderSectionHeader} onEndReached={this.onEndReached.bind(this)}/>
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

Home.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
