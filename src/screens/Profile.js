import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Profile Screen</Text>
        <Button title='Login' onPress= {() => {this.props.navigation.navigate('Login')}} />
      </View>
    );
  }
}