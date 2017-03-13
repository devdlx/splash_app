/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Stage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        console.log(this.props);

    }

    componentWillUnmount() {}

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.stage}>
                    {children}
                </View>
            </View>
        );
    }
}

Stage.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node
};

const styles = {
    container: {
        marginVertical: 24,
        flexDirection: 'column'
    },
    title: {
        fontSize: 18,
        color: '#444f6c',
        margin: 8
    },
    stage: {
        paddingVertical: 40,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f6f7'
    }
};
