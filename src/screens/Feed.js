import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import UserBevyCard from '../components/UserBevyCard';

export default class FeedScreen extends Component {
  render() {
    return (
      <UserBevyCard>
        <Text>Card Component</Text>
      </UserBevyCard>
    );
  }
}