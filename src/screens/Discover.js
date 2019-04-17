/** Discover Screen acts like user's timeline where they would see updates of their friend's trips and those that they follow for inspiration **/
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class DiscoverScreen extends Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Discover Screen</Text>
        <Button title='Login' onPress= {() => {this.props.navigation.navigate('Login')}} />
      </View>
    );
  }
}