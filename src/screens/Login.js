import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Login Screen</Text>
        <Button title='Login' onPress= {() => {this.props.navigation.navigate('Discover')}} />
        <Button title='Signup' onPress= {() => {this.props.navigation.navigate('Signup')}} />
        <Button title='Discover' onPress= {() => {this.props.navigation.navigate('Discover')}} />
      </View>
    );
  }
}