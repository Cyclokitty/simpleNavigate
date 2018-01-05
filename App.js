/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>Hello, welcome to Chat with Laura!</Text>
        <Button
          onPress={() => navigate("Chat")}
          title="Chat with Laura"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Laura',
  };
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>Chat with Laura</Text>
      </View>
    );
  }
}

export const myapp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('myapp', () => myapp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignItems: 'center',
    color: '#6B00B2',
    fontSize: 20,
  }
});

export default myapp;
