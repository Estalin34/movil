import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  Welcome: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

function LoginScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Go to Welcome"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
}

export default LoginScreen;
