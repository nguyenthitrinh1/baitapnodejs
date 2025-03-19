import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './mainTab';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={MainTabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
