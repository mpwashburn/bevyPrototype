import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class FeedScreen extends Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Feed</Text>
        <Button title='Welcome Page' onPress= {() => {this.props.navigation.navigate('Welcome')}} />
      </View>
    );
  }
}