import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SignupScreen extends Component {
  render() {
    return (
      <View title="Login" style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Signup</Text>
        <Button title='Login' onPress= {() => {this.props.navigation.navigate('Login')}} />
      </View>
    );
  }
}