import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection'

const UserBevyCardCover = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={{flexDirection:'column'}}>
        <View>
          <Image 
            style={{width:353, height:150}} 
            source={{uri:'https://via.placeholder.com/400'}} 
            />
          </View>
        <View><Text>Trip Title</Text></View>
        </View>
      </CardSection>
      <CardSection>
        <View style={{flex:1, paddingLeft:10}}>
        <Image style={{width:50, height:50, borderRadius:25}} source={{uri:'https://via.placeholder.com/50'}} />
        <Text style={{fontSize:10}}>Username</Text>
        </View>
        <View style={{flex:3, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
        <Image style={{width:50, height:50}} source={{uri:'https://via.placeholder.com/50'}} />
        <Image style={{width:50, height:50}} source={{uri:'https://via.placeholder.com/50'}} />
        <Image style={{width:50, height:50}} source={{uri:'https://via.placeholder.com/50'}} />
        <Image style={{width:50, height:50}} source={{uri:'https://via.placeholder.com/50'}} />
        </View>
      </CardSection>
    </Card>
  );
};

export default UserBevyCardCover;
