import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const BtnLong = ({children, title}) => {
  const {btnContainer,btnStyle} = styles;
  return (
      <TouchableOpacity title={children} style={btnStyle}>
        <Text>{children}</Text>
      </TouchableOpacity>
  );
}

const styles = {
  btnContainer: {
    justifyContent:'center',
    alignSelf:'center',
    marginTop:100
  },
  btnStyle:{
    justifyContent:'center',
    alignItems:'center',
    width:300,
    height:40,
    borderRadius:25,
    marginTop:5,
    marginBottom:5
  }
}

export default BtnLong;