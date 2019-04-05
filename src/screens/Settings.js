import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Settings Screen</Text>
        <Button title='Login' onPress= {() => {this.props.navigation.navigate('Login')}} />
      </View>
    );
  }
}