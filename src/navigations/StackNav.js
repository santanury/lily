import {} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screens

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import TabNav from './TabNav';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{gestureEnabled: false}}
        screenOptions={{headerShown: false}}
        initialRouteName="TabNav">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabNav" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
