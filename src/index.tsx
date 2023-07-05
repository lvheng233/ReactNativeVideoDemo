import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoDetails from './pages/VideoDetails'
import Home from './pages/Home'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={VideoDetails} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}