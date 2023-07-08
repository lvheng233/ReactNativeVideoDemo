import * as React from 'react';
import { StatusBar  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideoDetails from './pages/VideoDetails'
import Home from './pages/Home'
import VideoPage from './pages/Video';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={VideoPage} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
      <Stack.Navigator>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }}/>
        <Stack.Screen  options={{ headerShown: false }} name="VideoDetails" component={VideoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}