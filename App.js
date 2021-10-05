import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
// import { BlogProvider } from './src/context/BlogContext';
import { Provider as BlogProvider} from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator({
  Home:IndexScreen,
  Show:ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
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
