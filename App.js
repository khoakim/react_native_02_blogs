import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import IndexScreen from './src/IndexScreen';

const navigator = createStackNavigator({
  Home:IndexScreen
},{
  initialRouteName:'Home',
  defaultNavigationOptions: {
    title:'Home'
  }
})
const App =  createAppContainer(navigator);

export default () => {
  return <App />
}
