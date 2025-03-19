import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from './useAuthor';
import AuthStack from './author';
import MainStackNavigator from './mainStack';
import { ActivityIndicator, View } from 'react-native';

const Router = () => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  console.log('isLoggedIn:', isLoggedIn); // Debugging

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainStackNavigator />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Router;
