import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';

type BottomTabParamList = {
  Login: undefined;
  Registro: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Registro" component={RegistroScreen} />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
