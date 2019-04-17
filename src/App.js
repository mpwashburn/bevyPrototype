import React, { Component } from 'react';
import {Button, ThemeProvider } from 'react-native-elements';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import Discover from './screens/Discover';
import Feed from './screens/Feed';
import AddTrip from './screens/AddTrip'

export default class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    )
  }
}

const MainBtmTabNav = createBottomTabNavigator({
  Feed,
  AddTrip,
  Profile,
  Settings
},{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    }
  }
}
);

const MainStackNav = createStackNavigator({
  MainBtmTabNav: MainBtmTabNav
},{
  defaultNavigationOptions:({navigation}) => {
    return {
      headerLeft: <Ionicon name="ios-menu" size={30}style={{paddingLeft:15}} onPress={()=> navigation.goBack()} />
    }
  }
}
)

// const DrawerNav = createDrawerNavigator({
//   Discover: {
//     screen: MainStackNav
//   }
// })

const SwitchNav = createSwitchNavigator({
    Welcome: {screen: Welcome },
    Signup: {screen: Signup},
    Discover: {screen: MainStackNav}
  },
  {
    initialRouteName: 'Welcome'
  }
);

const AppContainer = createAppContainer(SwitchNav);
