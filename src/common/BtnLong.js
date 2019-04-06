import React from 'react';
import { View, Text, Button } from 'react-native';

const BtnLong = () => {
  return (
    <View>
      <Button 
      onPress={()=>{this.props.navigation.navigate('Insert')}} 
      title=''
      color=''
      accessibilityLabel=''
      />
    </View>
  );
}

export default BtnLong;