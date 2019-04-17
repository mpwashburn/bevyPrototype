import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class AddTripScreen extends Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>AddTrip</Text>
        <Button title='Welcome Page' onPress= {() => {this.props.navigation.navigate('Welcome')}} />        
      </View>
    );
  }
}