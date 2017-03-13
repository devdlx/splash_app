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

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {}

    componentWillUnmount() {}

    // shouldComponentUpdate(one) {
    //     return true
    // }

    onEndReached = () => {

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

        return (
            <View>
                <Text>some text on the profile screen</Text>
            </View>
        );
    }
}

const styles = {

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
