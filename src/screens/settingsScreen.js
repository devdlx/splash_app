/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight as Button, Image} from 'react-native';

export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Text style={styles.title}>Settings</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
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
        textAlign: 'center',
        color: 'white',
        opacity: 0.9,
        marginTop: 12
    }

});
