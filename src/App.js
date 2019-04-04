import React, { Component } from 'react';
import {View, Text } from 'react-native';
import { createAppContainer, createStackNavigation } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Hello World</Text>
      </View>
    )
  }
}