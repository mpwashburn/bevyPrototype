import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SignupScreen extends Component {
  render() {
    return (
      <View title="Sign Up" style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Signup</Text>
        <Button title='Welcome' onPress= {() => {this.props.navigation.navigate('Welcome')}} />
      </View>
    );
  }
}