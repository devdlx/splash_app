/* @flow */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ListView
} from 'react-native';
import {Card, List, ListItem, Button, Icon} from 'react-native-elements'

import ScreenContainer from './screenContainer'
export default class Settings extends Component {

    static navigationOptions = {
        title: 'Settings',
        tabBar: {
            icon: ({tintColor, focused}) => (<Icon name={focused
                ? 'person-outline'
                : 'person'} color={focused
                ? tintColor
                : 'black'}/>)
        },
        header: {
            visible: true,
            style: ScreenContainer.headerStyle
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    title: 'Logout',
                    action: 'logout'
                }
            ]
        }
    }

    componentDidMount() {}

    renderSettingsItems(item, sectionID, rowID) {
        return (
            <TouchableOpacity style={styles.itemWrapper} key={rowID}>

                <Text style={styles.itemTitle}>
                    {item.title}
                </Text>

                <View style={styles.buttonsWrapper}>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.likeButtonPress(item, rowID)
                    }}>

                        <Text style={styles.buttonText}>text</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>

                        <Icon name={'comment'} color={'red'}></Icon>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.shareButtonPress(item, rowID)
                    }}>
                        <View>
                            <Icon name={'share'} color={'red'}></Icon>
                        </View>
                    </TouchableOpacity>

                </View>

            </TouchableOpacity>
        )
    }

    render() {
        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        // console.log(this.state);

        let ds = dataSource.cloneWithRows(this.state.items)
        // let ds = dataSource.cloneWithRows([])

        return (
            <ScreenContainer padding={false}>
                <ListView enableEmptySections dataSource={ds} renderRow={this.renderSettingsItems.bind(this)}/>
            </ScreenContainer>
        );
    }
}

const styles = StyleSheet.create({
    

    itemWrapper: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12
    },

    itemTitle: {
        flex: 2,

        fontSize: 18
    },

    buttonsWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        // backgroundColor: 'green'
    },

    button: {
        marginHorizontal: 8
    },
    buttonText: {
        fontSize: 18
    },

    logoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        marginHorizontal: 12
    },

    logo: {
        width: 100,
        height: 100
    },

    title: {
        // textAlign: 'center',
        color: 'white',
        opacity: 0.9,
        marginTop: 12,
        fontSize: 62
    }

});
//
// <View style={styles.logoContainer}>
//     <Text style={styles.title}>Settings</Text>
// </View>
