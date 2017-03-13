/* @flow */

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Platform,
    ListView
} from 'react-native';

import {Card, List, ListItem, Button, Icon} from 'react-native-elements'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        // this.props.actions.fetchHomeItems()
    }

    componentWillUnmount() {}

    // shouldComponentUpdate(one) {
    //     return true
    // }

    onEndReached = () => {
        this.props.actions.fetchHomeItems();
        // console.log(this.props);
    }

    renderCard(item, index) {

        return (

            <Card image={{
                uri: item.image || 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png'
            }} title={item.title} containerStyle={styles.card} wrapperStyle={styles.wrapperStyle} key={index}>

                <Text style={{
                    marginBottom: 12,
                    padding: 12
                }}>
                    {item.description}
                </Text>

                <Button icon={{
                    name: 'textsms'
                }} backgroundColor='rgb(70, 100, 118)' fontFamily='Lato' buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0
                }} title='VIEW NOW'/>
            </Card>

        )
    }

    render() {

        const {state} = this.props
        // console.log('home.items:', state.home.length);
        // const listItems = items.map((item, index) => this.renderCard(item, index));

        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        let ds = dataSource.cloneWithRows(state.home)

        return (
            <View>
                <ListView enableEmptySections dataSource={ds} renderRow={this.renderCard} renderSectionHeader={this.renderSectionHeader} onEndReached={this.onEndReached}/>
            </View>
        );
    }
}

const styles = {

    topCard: {
        backgroundColor: 'white',
        borderWidth: 0,
        padding: 0,
        margin: 0,
        marginBottom: 0,
        height: 64
    },

    topCardImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 64,
        opacity: .5
    },

    card: {
        marginVertical: 8,
        borderColor: 'red',
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
    wrapperStyle: {
        padding: 10
    },
    container: {
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingHorizontal: 12,
        paddingBottom: 80,
        margin: 0,
        padding: 0,
        // backgroundColor: 'rgb(52, 70, 88)'
    },
    title: {
        fontSize: 18,
        color: '#444f6c',
        margin: 8
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

// <ListView dataSource={ds} renderRow={(rowData) => <Text>{rowData}</Text>}/>

// <View style={styles.topCard}>
//
//     <Image resizeMode='cover' source={{
//         uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-12.png'
//     }} style={styles.topCardImage}/>
//
// </View>
