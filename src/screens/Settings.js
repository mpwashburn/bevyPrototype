import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Settings Screen</Text>
        <Button title='Welcome Page' onPress= {() => {this.props.navigation.navigate('Welcome')}} />
        <Button title='Account Details' onPress= {() => {this.props.navigation.navigate('#')}} />
        <Button title='Preferences' onPress= {() => {this.props.navigation.navigate('#')}} />
        <Button title='Logout' onPress= {() => {this.props.navigation.navigate('#')}} />
      </View>
    );
  }
}