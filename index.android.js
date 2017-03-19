/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import Root from './src/components/Root';
// import App from './src/screens/appScreen'

import setup from './src/screens/setup'


// AppRegistry.registerComponent('splash_app', () => Root);

// AppRegistry.registerComponent('splash_app', () => App);

AppRegistry.registerComponent('splash_app', () => setup);
