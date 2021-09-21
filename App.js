import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { BlogProvider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';

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
  return <BlogProvider>
    <App />
  </BlogProvider> 
}
