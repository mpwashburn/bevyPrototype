import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import Discover from './screens/Discover';

export default class App extends Component {
  render() {
    return (
        <AppContainer />
    )
  }
}

const MainBtmTabNav = createBottomTabNavigator({
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
      headerLeft: <Ionicon name="ios-menu" size={30}style={{paddingLeft:15}} onPress={()=> navigation.openDrawer()} />
    }
  }
}
)

const DrawerNav = createDrawerNavigator({
  Discover: {
    screen: MainStackNav
  }
})

const SwitchNav = createSwitchNavigator({
    Welcome: {screen: Welcome },
    Discover: {screen: DrawerNav}
  },
  {
    initialRouteName: 'Welcome'
  }
);

const AppContainer = createAppContainer(SwitchNav);
