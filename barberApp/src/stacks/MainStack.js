import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Barber from './Barber';
import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouterName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen name="Barber" component={Barber} />
  </Stack.Navigator>
);
