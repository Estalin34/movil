import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
import UsuarioScreen from '../screens/UsuarioScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

type RootStackParamList = {
  Auth: undefined;
  Usuario: undefined;
  Welcome: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={BottomNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Usuario" component={UsuarioScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
