import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeContext } from 'styled-components';

import Login from '../views/Login';
import CreateAccount from '../views/CreateAccount';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  const theme = useContext(ThemeContext);

  return (
    <AuthStack.Navigator screenOptions={{ gestureEnabled: false }}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Voltar',
          headerTintColor: theme.colors.neutral600,
          headerStyle: {
            backgroundColor: theme.colors.neutral100,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.neutral500,
          },
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
