import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from './text'; // Đúng đường dẫn AuthContext
import Home from './home';
import LoginComponent from './Login'; // ✅ Sửa lỗi chính tả
import ProfileComponent from './Profile';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const { user } = useAuth();

  if (!user) {
    return <LoginComponent />; 
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Explorer" component={Home} />
      <Tab.Screen name="Account" component={ProfileComponent} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
