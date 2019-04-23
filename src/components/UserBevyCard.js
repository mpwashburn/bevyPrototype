import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection'

export default class UserBevyCardCover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {

    return (
      <View>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginLeft:5, marginRight:5}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
      <ScrollView>
        <Card>
          <CardSection>
            <View style={{flexDirection:'column'}}>
            <View>
              <Image 
                style={{width:353, height:150}} 
                source={{uri:'https://via.placeholder.com/400'}} 
                />
              </View>
            </View>
          </CardSection>
          <CardSection>
          <View style={{flex:1}}><Text>Trip Title</Text></View>
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
      </ScrollView>
      </View>
    );
  }
};