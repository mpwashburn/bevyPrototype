import React, { Component  } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LoginBtn from '../components/LoginBtn';

export default class Welcome extends Component {
  render() {
    const {btnContainer, btnLogin, btnSignup, btnLongText, logoContainer, logoText, joinBtn, buttonStyle} = styles;
    return (
      <View style={{flex:1}}>
        <View style={logoContainer}>
          <Text style={logoText}>Bevy</Text>
        </View>
        <View style={btnContainer}>
          <LoginBtn title='Join' style={joinBtn}></LoginBtn>
          <TouchableOpacity style={btnLogin} title='Login' onPress={() => {this.props.navigation.navigate('Discover')}}>
          <Text style={btnLongText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignup} title='Sign Up' onPress={() => {this.props.navigation.navigate('Signup')}}>
          <Text style={btnLongText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  logoContainer:{
    justifyContent:'center',
    alignSelf:'center',
    marginTop:175,
    borderColor:'#ff5714',
    borderWidth:5,
    borderRadius: 40,
    height: 130,
    width: 130,
  },
  logoText:{
    alignSelf:'center',
    fontSize: 36,
    padding:20,
    fontWeight:'600',
  },
  btnContainer: {
    justifyContent:'center',
    alignSelf:'center',
    marginTop:100
  },
  joinBtn: {
    backgroundColor:'#6eeb83'
  },
  btnLogin: {
    width:300,
    height:40,
    borderRadius:25,
    backgroundColor:'#6eeb83',
    marginTop:5,
    marginBottom:5
  },
  btnSignup: {
    width:300,
    height:40,
    borderRadius:25,
    backgroundColor:'#1be7ff',
    marginTop:5,
    marginBottom:5
  },
  btnLongText: {
    alignSelf:'center',
    paddingTop:10,
    paddingBottom:10
  },
  buttonStyle: {
    height: 75
  }
};
