/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './src/store'
import Routes from './src/config/routes'
import Home from './src/components/Home'

const Navigator = StackNavigator(Routes, {
  headerMode: 'screen'
})

export default class App extends Component {

  render() {
  
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}