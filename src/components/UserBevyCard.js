import React from 'react';
import { View, Text } from 'react-native';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection'

const UserBevyCardCover = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={{flexDirection:'column'}}>
        <View><Text>Image should be set behind title</Text></View>
        <View><Text>Trip Title</Text></View>
        </View>
      </CardSection>
      <CardSection>
        <View>
        <Text>Profile Pic</Text>
        <Text>Username</Text>
        </View>
        <View>
        <Text>Pic 1</Text>
        <Text>Pic 2</Text>
        <Text>Pic 3</Text>
        <Text>Pic 4</Text>
        </View>
      </CardSection>
    </Card>
  );
};

export default UserBevyCardCover;