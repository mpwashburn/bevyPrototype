import React, { Component  } from 'react';
import { View, Text, Button } from 'react-native';

export default class Welcome extends Component {
  state = {  }
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Welcom Screen</Text>
        <Button title='Login' onPress={() => {this.props.navigation.navigate('Discover')}} />
      </View>
    );
  }
}