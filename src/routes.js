import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './views/Home';
import Login from './views/Login';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode="none" screenOptions={{gestureEnabled: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Routes;
